export const getData = async ({setFullData, setIsDataLoading}) => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json()).catch(err => {
        alert(err.message);
        setIsDataLoading(false);
    })
    setFullData(data);
}

export const getCategories = async ({setCategories, setIsCategoryLoading}) => {
    const data = await fetch("https://api.escuelajs.co/api/v1/categories").then(res => res.json()).catch(err => alert(err.message))
    setCategories(data);
    setIsCategoryLoading(false);
}

export const getCart = () => {
    return {};
}