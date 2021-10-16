import request from "./request"

const roomService = {
    getRooms: payload => {
        return request.get('/rooms', payload)
    },

    getRoomJoined: payload => {
        return request.get('/get-room-by-user', payload)
    },

    getDetailItem: payload => {
        return request.get(`/items/${payload.id}`)
    },

    joinRoom: payload => {
        return request.post('/join-room', payload)
    },

    countRoomByUser: payload => {
        return request.get('/count-room-by-user', payload)
    },
}

export default roomService;