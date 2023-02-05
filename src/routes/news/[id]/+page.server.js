import { newtClient } from '../../server/newt'
import { NEWT_APP_ID } from '$env/static/private'

/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').PageServerLoad} */
export const load = (async ({ params }) => {
    const res = await newtClient.getContent({
            appUid: NEWT_APP_ID,
            modelUid: 'news',
            contentId: params.id
        }
    )
    return res
})