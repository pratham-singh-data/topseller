// fetches product data and sets isDataLoading if error occurs so the EmptyComponent could be displayed in its place
export const getData = async ({setFullData, setIsDataLoading}) => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json()).catch(err => {
        alert(err.message);
        setIsDataLoading(false);
    })
    setFullData(data);
}

// fetches category data and sets isCategoryLoading to false once it is done
export const getCategories = async ({setCategories, setIsCategoryLoading}) => {
    const data = await fetch("https://api.escuelajs.co/api/v1/categories").then(res => res.json()).catch(err => alert(err.message))
    setCategories(data);
    setIsCategoryLoading(false);
}

// get initial cart data from localStorage and if unavailable returns an empty object
export const getCart = () => {
    const lastData = localStorage.getItem("topseller_cart");
    
    if(! lastData) return {};
    return JSON.parse(lastData);
}