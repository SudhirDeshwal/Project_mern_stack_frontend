//to create category
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

//to get create product
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

/**
 * Below functions to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
    return fetch(`https://merchsid.herokuapp.com/api/products?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteProduct = (productId, userId, token) => {
    return fetch(`https://merchsid.herokuapp.com/api/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProduct = productId => {
    return fetch(`https://merchsid.herokuapp.com/api/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`https://merchsid.herokuapp.com/api/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};





