const getWorkouts = function(email, date) {
    return fetch('/users/workout', {
        method: 'GET',
        body: {
            'email': email,
            'date' : date
        }
    }).then(response => {
        return response.json();
    }).catch((err) => console.log(err));
};