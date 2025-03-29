
const get = async function (url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseData = response.json()
    const userData = responseData.data
    return userData
}

export { get }