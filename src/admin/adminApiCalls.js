export const createCategory = (userId, token, category) => {
    return fetch(`https://merchsid.herokuapp.com/api/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });   
};


export const createProduct = (userId, token, product) => {
    return fetch(`https://merchsid.herokuapp.com/api/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();  
        })
        .catch(err => {
            console.log(err);
        });
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