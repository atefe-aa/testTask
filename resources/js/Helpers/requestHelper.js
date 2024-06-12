export async function request(url, method = "GET",) {
    const options = {
        method: method,
        Headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await fetch(url, options);

        const {data, message, errors} = await res.json();

        return {data, message, errors};
    } catch (e) {
        throw Error(e.message);
    }
}
