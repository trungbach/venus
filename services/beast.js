import request from "./request"

const beastService = {
    getListBeasts: payload => {
        return request.get(payload)
    },
    
    getBotByItem: payload => {
        return request.get('/get_bots_by_item', payload)
    },
}

export default beastService;