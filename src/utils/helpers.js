export const getData = async ({setFullData}) => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json()).catch(err => alert(err.message))
    setFullData(data);

}

export const getCategories = async ({setCategories}) => {
    const data = await fetch("https://api.escuelajs.co/api/v1/categories").then(res => res.json()).catch(err => alert(err.message))
    setCategories(data);
}