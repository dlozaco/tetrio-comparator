
const get = async function (url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.data; // Assumes responseData has a 'data' field
}

export { get }