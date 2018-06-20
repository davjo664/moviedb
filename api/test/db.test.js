require('isomorphic-fetch');

test('Should login user', () => {
    var formData = new URLSearchParams();
    var cookie;
    formData.append('username', 'test');
    formData.append('password', 'test');

    return fetch('http://localhost:3000/api/session/login', {
    method: 'POST',
    body: formData,
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    }
    })
    .then(response => {
        let cookies = response.headers.get('set-cookie');
        cookie = cookies.substr(0, cookies.indexOf(';'))
        expect(cookie.length > 0);
        expect(response.ok).toBeTruthy();
    })
    .then(() => {
        return fetch(`http://localhost:3000/api/watchlist`, {
            method: 'GET',
            headers: { Cookie: cookie },
        })
    })
    .then((response) => {
        expect(response.ok).toBeTruthy();
    })
})