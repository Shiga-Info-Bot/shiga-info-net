import { createClient } from 'newt-client-js'
import { NEWT_SPACE_ID, NEWT_TOKEN } from '$env/static/private'

export const newtClient = createClient({
    spaceUid: NEWT_SPACE_ID,
    token: NEWT_TOKEN,
    apiType: 'cdn',
})