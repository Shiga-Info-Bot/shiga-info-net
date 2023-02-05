import { newtClient } from './server/newt'
import { NEWT_APP_ID } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export const load = (async () => {
    const nowDt = new Date(Date.now());
    console.log(nowDt);
    const resPage = await newtClient.getContent({
        appUid: 'single-page',
        modelUid: 'single-page',
        contentId: '63de693b16bdb917957f2ca1'
    })
    const resNews = await newtClient.getContents({
            appUid: NEWT_APP_ID,
            modelUid: 'news',
            query: {
                'day' : {'lte' : nowDt},
                'order' : ['-day'],
                'limit' : 3
            }
        }
    )
    return {
        page: resPage,
        news: resNews
    }
})