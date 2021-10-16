import request from "./request"

const marketService = {

    getListMarket: payload => {
        return request.get(payload)
    },

    buyItem: payload => {
        return request.put(`/buy-item/${payload.id}`);
    },

}

export default marketService;