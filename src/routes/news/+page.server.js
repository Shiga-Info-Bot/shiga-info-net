import { newtClient } from '../server/newt'
import { NEWT_APP_ID } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export const load = (async ({ url }) => {
    const queries = url.searchParams;
    let skip = 0;
    let page = 0;
    if (queries.has('p')) {
        skip = (Number(queries.get('p')) - 1) * 10;
        page = (Number(queries.get('p')) - 1);
    }
    const nowDt = new Date(Date.now());
    const res = await newtClient.getContents({
            appUid: NEWT_APP_ID,
            modelUid: 'news',
            query: {
                'day' : {'lte' : nowDt},
                'order' : ['-day'],
                'limit' : 10,
                'skip' : skip
            }
        }
    )
    return {
        content : res,
        page : page
    }
})