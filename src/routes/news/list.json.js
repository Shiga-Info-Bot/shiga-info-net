import { createClient } from 'newt-client-js';
import dotenv from 'dotenv';
dotenv.config();

export async function get({ url }) {
    let newsContent = {
        "tags": [],
        "title": "",
        "day": "",
        "thumbnail": {
            "_id": "",
            "src": ""
        },
        "main_text": ""
    };

    const client = createClient({
        spaceUid: process.env['NEWT_SPACE_ID'],
        token: process.env['NEWT_TOKEN'],
        apiType: 'cdn'
    });


    console.log(url.searchParams)
    const nowDt = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    console.log(nowDt)
    const querieJson = {
        'day' : {'lte' : nowDt},
        'order' : ['-day']
    };
    const queries = url.searchParams;
    if (queries.has('limit')){
        querieJson['limit'] = queries.has('limit') ? queries.get('limit') : ''
    }
    let getContentJson = {
        appUid: process.env['NEWT_APP_ID'],
        modelUid: 'news',
        query: querieJson
    }

    const content = await client.getContents(getContentJson);
    return {
        body: content
    }
}