// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// import path from 'path';

// Read the ENV variable from the CLI, default to 'uat' if none is provided
const environment = process.env.ENV || 'uat';

dotenv.config({ 
    path: `./environments/${environment}/.env.${environment}`,
  });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // If running in a CI environment (process.env.CI is truthy),
  // retry failed tests up to 2 times. Otherwise (local runs),
  // do not retry failed tests.
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'], 
    ['html', {open: 'never'}]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    extraHTTPHeaders: {
      'x-api-key': process.env.API_KEY ?? '',
      'X-Reqres-Env': 'prod',
      'Content-Type': 'application/json'
    },
  },
  // default time out is 30_000ms(30s), per our need we can customise
  timeout: 40_000,
  // default time out is 5000ms(5s), per our need we can customise
  expect: { timeout: 7000},

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
    // 1. Disable the default 1280x720 viewport 
      viewport: null,

    // Add a delay in milliseconds between each operation (e.g., 500ms)
      launchOptions: {
        slowMo: 1000,
        args: ['--start-maximized'],
        },
      deviceScaleFactor: undefined
    }
  },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

