export const getProducts = sortBy => {
    return fetch(`http://localhost:8000/api/products?sortBy=${sortBy}&order=desc&limit=15`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err)); 
}; 