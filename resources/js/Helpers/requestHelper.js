export async function request(url, method = "GET", userOptions = {}) {
    const defaultOptions = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    const options = {
        ...defaultOptions,
        ...userOptions,
        headers: {
            ...defaultOptions.headers,
            ...userOptions.headers,
        },
    };

    try {
        const res = await fetch(url, options);
        if (userOptions.responseType === 'blob') {
            const blob = await res.blob();
            return {data: blob};
        }

        const json = await res.json();

        return {data: json.data, message: json.message, error: json.error};
    } catch (e) {
        throw Error(e.message);
    }
}
