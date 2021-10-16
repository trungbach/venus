import marketService from '@/services/market'

export async function getListMarket(payload) {
    const res = await marketService.getListMarket(payload)
    return res.body
}

export async function buyItem(payload) {
    const res = await marketService.buyItem(payload)
    return res.body.data;
}

