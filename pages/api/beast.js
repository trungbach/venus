import beastService from '@/services/beast'

export async function getListBeasts(payload) {
    const res = await beastService.getListBeasts(payload)
    return res.body
}

export async function getBotByItem(payload) {
    const res = await beastService.getBotByItem(payload)
    return res.body.data
}
