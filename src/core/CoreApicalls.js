export const getProducts = sortBy => {
    return fetch(`https://merchsid.herokuapp.com/api/products?sortBy=${sortBy}&order=desc&limit=15`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err)); 
}; 