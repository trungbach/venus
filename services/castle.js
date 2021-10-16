import request from "./request"

const castleService = {
    getListCastle: payload => {
        return request.get('/castles', payload)
    },

    warriorByType: payload => {
        return request.get('/warrior_by_type', payload)
    },

    createCastleList: payload => {
        return request.post('/create_castle_list', payload)
    },

    growCastle: payload => {
        return request.post('/grow-castle', payload)
    }, 

    getMyCastles: payload => {
        return request.get(payload)
    },

    getMyAssets: payload => {
        return request.get(payload)
    },

    levelUpItem: payload => {
        return request.put(`/level-up-item/${payload.itemId}`, payload.data)
    },

    getMyCreated: payload => {
        return request.get('/my-created-items', payload)
    },

     reSellItem: payload => {
        return request.put(`/resell-item/${payload.id}`, payload.data);
    },

}

export default castleService;