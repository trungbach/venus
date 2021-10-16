import roomService from '@/services/room'

export async function getRooms(payload) {
    
    try {
        const res = await roomService.getRooms(payload)
        return res.body.data
    } catch (error) {
        console.log('er', error)
        try {
          var data = JSON.parse(error.message)
          console.log(data.message)
        } catch (error) {
            console.log('Error occurred!')
        }
    }
}

export async function getDetailItem(payload) {
    
    try {
        const res = await roomService.getDetailItem(payload)
        return res.body
    } catch (error) {
        console.log('er', error)
        try {
          var data = JSON.parse(error.message)
          console.log(data.message)
        } catch (error) {
            console.log('Error occurred!')
        }
    }
}

export async function joinRoom(payload) {
   
    try {
        const res = await roomService.joinRoom(payload)
        return res
    } catch (error) {
        console.log('er', error)
        try {
          var data = JSON.parse(error.message)
          console.log(data.message)
        } catch (error) {
            console.log('Error occurred!')
        }
    }
}


export async function getRoomJoined(payload) {
    try {
        const res = await roomService.getRoomJoined(payload)
        return res.body.data
    } catch (error) {
        console.log('er', error)
        try {
          var data = JSON.parse(error.message)
          console.log(data.message)
        } catch (error) {
            console.log('Error occurred!')
        }
    }
}

export async function countRoomByUser(payload) {
    try {
        const res = await roomService.countRoomByUser(payload)
        return res.body
    } catch (error) {
        console.log('er', error)
        try {
          var data = JSON.parse(error.message)
          console.log(data.message)
        } catch (error) {
            console.log('Error occurred!')
        }
    }
   
}

