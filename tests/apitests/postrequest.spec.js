import { test, expect } from '@playwright/test';
import createRecordsJson from '../../apiobjects/requestbody/CreateRecords.json';
import { CreateRecords } from '../../apiobjects/pojo/requestpojo/CreateRecords.js';

test('Create a record using json file and fetch it again', async ({ request }) => {

    const recordsResponse = await request.post('https://reqres.in/api/collections/products/records?project_id=39033',
        {
            headers: {
                'x-api-key': process.env.API_KEY,
                'X-Reqres-Env': 'prod',
                'Content-Type': 'application/json'
            },
            data: createRecordsJson
        });
    const recordsResponseBody = await recordsResponse.json();
    let recordId = recordsResponseBody.data.id;

    // use template literal to interpolate recordId and send a GET to fetch the created record
    const getRecordResponse = await request.get(`https://reqres.in/api/collections/products/records/${recordId}?project_id=39033`, {
        headers: {
            'x-api-key': process.env.API_KEY,
            'X-Reqres-Env': 'prod'
        }
    });
    const getRecordResponseBody = await getRecordResponse.json();
    console.log('response body is: ', JSON.stringify(getRecordResponseBody, null, 4));
    expect(getRecordResponseBody.data.id).toBe(recordId);
});

test('Create record using pojo class and delete it', async ({ request }) => {

    // Setup the request payload using pojo class
    const createRecordPojoObj = new CreateRecords();
    createRecordPojoObj.name = "Samsung mobile";
    createRecordPojoObj.price = "$ 250";
    createRecordPojoObj.category = "Electronics";
    createRecordPojoObj.instock = true;

    // Send post request to create a record
    const recordsResponse = await request.post('https://reqres.in/api/collections/products/records?project_id=39033',
        { data: createRecordPojoObj.toJson() }
    );

    // Parsing the response to fetch value
    const recordsResponseBody = await recordsResponse.json();
    let recordId = recordsResponseBody.data.id;
    console.log('Record id is: ', recordId)

    // use template literal to interpolate recordId and send a GET to fetch the created record
    const getRecordDeleteResponse = await request.delete(`https://reqres.in/api/collections/products/records/${recordId}?project_id=39033`);
    expect(getRecordDeleteResponse.status()).toBe(204);
});