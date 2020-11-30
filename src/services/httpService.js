import * as axios from 'axios'

const get = async (url) => {
    const response =  await axios.get(url)
    return response.data
}

const methods = {
    get
}

export default methods;