export const test = () => {
    return get('http://localhost:3300/users');
}

export const test2 = () => {
    return post('http://localhost:3300/content', {test1:1, test2:2})
}

const get = async (url) => {
    let response = await fetch(url, {
        method: 'get'
    })
    if (response.ok) {
        return await response.json();
    } else {
        console.error("HTTP-Error: " + response.status);
    }
}

const post = async (url, ...data) => {
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    if (response.ok) {
        return await response.json();
    } else {
        console.error("HTTP-Error: " + response.status);
    }
}