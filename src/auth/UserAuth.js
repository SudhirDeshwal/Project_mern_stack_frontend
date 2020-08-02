exports.signout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch('http://localhost:8000/api/signout', {
            method: 'GET'
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
    }
};