
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

export async function Insert(collection, data) {

    return (await fetch("http://localhost:5000/insert", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                "collection": collection,
                "obj": data
            }
        )
    }))
}

export async function Record(collection, query = {}){

    const obj = {
        "collection": collection,
        "query": query
    };
    
    const response = await fetch("http://localhost:5000/recordFomCollection", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    });

    const ans = await response.json();

    return ans;
}

export async function Delete(collection, id){

    const obj = {
        "collection": collection,
        "id": id
    };
    
    await fetch("http://localhost:5000/deleteFromCollection", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    });
}

export async function Update(collection, query, update){

    const obj = {
        "collection": collection,
        "query": query,
        "update": update,
    };
    
    await fetch("http://localhost:5000/updateFromCollection", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    });
}

export async function GetUserById(id){

    return (await (Record("login", {id: id})))[0];
}