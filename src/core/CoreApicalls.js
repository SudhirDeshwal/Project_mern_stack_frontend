export const getProducts = sortBy => {
    return fetch(`https://merchsid.herokuapp.com/api/products?sortBy=${sortBy}&order=desc&limit=15`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err)); 
}; 


export const getCategories = () => {
    return fetch('https://merchsid.herokuapp.com/api/categories', { 
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`http://localhost:4000/api/products/by/search`, { 
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


export const read = productId => {
    return fetch(`https://merchsid.herokuapp.com/api/product/${productId}`, { 
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = productId => {
    return fetch(`https://merchsid.herokuapp.com/api/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const getBraintreeClientToken = (userId, token) => {
    return fetch(`http://localhost:4000/api/braintree/getToken/${userId}`, {
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