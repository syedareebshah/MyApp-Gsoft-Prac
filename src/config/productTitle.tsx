export const getData = async () => {
    let obj = await fetch('https://dummyjson.com/products');
    let response = await obj.json()        
    return response
}
