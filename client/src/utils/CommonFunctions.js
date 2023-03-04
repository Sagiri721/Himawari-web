
export async function fetchFromBody(query, body) {

    const response = await fetch("http://localhost:5000/" + query, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    const ans = await response.json();

    return ans;
}

export function getLoginData() {

    return JSON.parse(localStorage.getItem("himawari-login"));
}

export async function InsertInto(data) {

    return (await fetch("http://localhost:5000/record/InsertInto", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data
    }))
}

function decycle(obj, stack = []) {
    if (!obj || typeof obj !== 'object')
        return obj;

    if (stack.includes(obj))
        return null;

    let s = stack.concat([obj]);

    return Array.isArray(obj)
        ? obj.map(x => decycle(x, s))
        : Object.fromEntries(
            Object.entries(obj)
                .map(([k, v]) => [k, decycle(v, s)]));
}