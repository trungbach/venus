import castleService from '@/services/castle'

export async function getListCastle(payload) {
    const res = await castleService.getListCastle(payload)
    return res.body
}

export async function getMyCastles(payload) {
    const res = await castleService.getMyCastles(payload)
    return res.body.data
}

export async function growCastle(payload) {
    const res = await castleService.growCastle(payload)
    return res
}

export async function createCastleList(payload) {
    const res = await castleService.createCastleList(payload)
    return res
}

export async function warriorByType(payload) {
    const res = await castleService.warriorByType(payload)
    return res.body.data
}

export async function getMyAssets(payload) {
    const res = await castleService.getMyAssets(payload)
    return res.body.data
}

export async function levelUpItem(payload) {
    const res = await castleService.levelUpItem(payload)
    return res;
}

export async function getMyCreated(payload) {
    const res = await castleService.getMyCreated(payload)
    return res.body.data
}

export async function reSellItem(payload) {
    const res = await castleService.reSellItem(payload);
    return res
}

 



