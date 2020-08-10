//To get all proudcts with sort and order and limit
export const getProducts = sortBy => {
    return fetch(`https://merchsid.herokuapp.com/api/products?sortBy=${sortBy}&order=desc&limit=15`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err)); 
}; 

//to get categories
export const getCategories = () => {
    return fetch('https://merchsid.herokuapp.com/api/categories', {  
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
//filter products
export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`https://merchsid.herokuapp.com/api/products/by/search`, { 
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

//read product by id
export const read = productId => {
    return fetch(`https://merchsid.herokuapp.com/api/product/${productId}`, { 
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
//get all product with similar category
export const listRelated = productId => {
    return fetch(`https://merchsid.herokuapp.com/api/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//to get token from brain treee api
export const getBraintreeClientToken = (userId, token) => {
    return fetch(`https://merchsid.herokuapp.com/api/braintree/getToken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};