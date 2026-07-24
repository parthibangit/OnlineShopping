import { test, expect } from "@playwright/test"

test('Send get request to fetch product list', async ({ request }) => {

    const productListResponse = await request.get('https://automationexercise.com/api/productsList')

    // Print the response body
    const responseText = await productListResponse.text();
    const responseBody = await productListResponse.body();
    // console.log('Response body is: '+ responseBody);

    // Fetch and print the headers values
    const responseHeaders = await productListResponse.headers();
    console.log('Content type is : ', responseHeaders['content-type']);
    console.log('Server name is : ', responseHeaders['server']);

    // verify the status code
    expect(productListResponse.status()).toBe(200);
    expect(productListResponse.status()).toBeTruthy(); // shortcut to test the status code
    expect(productListResponse.statusText()).toBe('OK');
});

test('Send get request and parsing the response body', async ({ request }) => {

    const productListResponse = await request.get('https://automationexercise.com/api/productsList')

    // Beautify the response body
    const response = await productListResponse.json();
    const prettyResponse = JSON.stringify(response, null, 2);
    // console.log('Pretty response is: '+ prettyResponse);

    // parsing the response body
    const responseCode = response.responseCode;
    console.log('Response code is: ' + responseCode);

    //parsing and fetch the array objects from response
    const productsObject = response.products;
    console.log('Product objects are: ', productsObject[0]);

    // verify the response body values
    expect(response.responseCode).toBe(200);
    expect(response).toHaveProperty('responseCode', 200);
    // expect(productListResponse).toBe('OK');
});