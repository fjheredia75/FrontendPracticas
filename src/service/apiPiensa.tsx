export const tableCustomer = 'http://localhost:8081/customer'
export const tableActivity = 'http://localhost:8081/activity'
export const tableOportunity = 'http://localhost:8081/oportunity/with/customer'
export const tableCategory = 'http://localhost:8081/category'

export const fetchApiPiensa = async (url:string) => {
   
    return fetch(url).then(res=> res.json())
}

export const createfetchApiPiensa = async (url:string, {arg }:any) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg)
    })
}

export const updatefetchApiPiensa = async (url:string, {arg }:any) => {
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(arg)
    })
}
