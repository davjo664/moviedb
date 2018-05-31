require('isomorphic-fetch');

test('Should login user', (done) => {
    var formData = new FormData();
    formData.append('username', 'test');
    formData.append('password', 'test');

    fetch('http://localhost:3000/api/session/login', {
    method: 'POST',
    body: formData
    })
    .then(response => {
        console.log(1);
        expect(response.ok).toBeTruthy();
        done();
    })
})

test('Should get users watchlist', (done) => {
    fetch(`http://localhost:3000/api/watchlist`, {
        method: 'GET',
        credentials: 'include'
    })
    .then((response) => {
        console.log(2);
        expect(response.ok).toBeTruthy();
        done();
    })
})