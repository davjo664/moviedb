require('isomorphic-fetch');

import config from '../config/config'

it('Should register user', async () => {
    var formData = new URLSearchParams();
    formData.append('username', 'test2');
    formData.append('password', 'test2');

    expect.assertions(1);
    const response = await fetch(config.api.url+'/user/register', {
        method: 'POST',
        body: formData,
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    });
    expect(response.ok).toBeTruthy();
});

var cookie;
it('Should login user', async () => {
    
    var formData = new URLSearchParams();
    formData.append('username', 'test2');
    formData.append('password', 'test2');

    expect.assertions(1);
    const response = await fetch(config.api.url+'/session/login', {
        method: 'POST',
        body: formData,
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    });
    let cookies = response.headers.get('set-cookie');
    cookie = cookies.substr(0, cookies.indexOf(';'))
    expect(cookie.length > 0);
    expect(response.ok).toBeTruthy();
});

it('Should add movie to user watchlist', async () => {
    
    var formData = new URLSearchParams();
    formData.append('movieid', 12345);

    expect.assertions(1);
    const response = await fetch(config.api.url+'/watchlist', {
        method: 'POST',
        body: formData,
        headers: { 
            Cookie: cookie,
            "Content-Type":"application/x-www-form-urlencoded",
        },
    });
    expect(response.ok).toBeTruthy();
});

let movie;
it('Should get user watchlist and it should contain 1 movie', async () => {
    expect.assertions(1);
    const response = await fetch(config.api.url+`/watchlist`, {
        method: 'GET',
        headers: { Cookie: cookie },
    })
    const data = await response.json();
    console.log(data);
    movie = data[0]._id;
    expect(data).toHaveLength(1);
});

it('Should change the watchlist movie status to watched', async () => {
    var formData = new URLSearchParams();
    formData.append('watched', true);

    expect.assertions(1);
    const response = await fetch(config.api.url+`/watchlist/${movie}`, {
        method: 'PUT',
        body: formData,
        headers: { 
            Cookie: cookie,
            "Content-Type":"application/x-www-form-urlencoded",
        },
    })
    expect(response.ok).toBeTruthy();
});

it('Should delete the watchlist movie', async () => {
    expect.assertions(1);
    const response = await fetch(config.api.url+`/watchlist/${movie}`, {
        method: 'DELETE',
        headers: { 
            Cookie: cookie,
        },
    })
    expect(response.ok).toBeTruthy();
});

it('Should unregister the user', async () => {
    expect.assertions(1);
    const response = await fetch(config.api.url+'/user/unregister', {
        method: 'POST',
        headers: { 
            Cookie: cookie,
        },
    });
    expect(response.ok).toBeTruthy();
});

it('Should get first 20 movies with genre Animation', async () => {
    expect.assertions(1);
    const response = await fetch(config.api.url+`/movie?genre=Animation&page=1`, {
        method: 'GET',
    })
    const data = await response.json();
    expect(data.results).toHaveLength(20);
});

it('Should get details about a specific movie', async () => {
    expect.assertions(1);
    const response = await fetch(config.api.url+`/movie/318925`, {
        method: 'GET',
    })
    expect(response.ok).toBeTruthy();
});

it('Should get first 20 movies matching the search string', async () => {
    expect.assertions(1);
    const response = await fetch(config.api.url+`/movie?search=Abba&page=1`, {
        method: 'GET',
    })
    const data = await response.json();
    expect(data.results).toHaveLength(20);
});




//Fetches for later
// var formData = new URLSearchParams();
//     formData.append('username', 'test2');
//     formData.append('password', 'test2');

//     let response = await fetch('http://localhost:3001/api/user/register', {
//         method: 'POST',
//         body: formData,
//         credentials: "include",
//         headers: {
//             "Content-Type":"application/x-www-form-urlencoded"
//         }
//     });
//     console.log(response);


//     var formData = new URLSearchParams();
//     formData.append('username', 'test2');
//     formData.append('password', 'test2');

//     const response2 = await fetch('http://localhost:3001/api/session/login', {
//         method: 'POST',
//         body: formData,
//         credentials: "include",
//         headers: {
//             "Content-Type":"application/x-www-form-urlencoded",
//         }
//     });

//     var formData = new URLSearchParams();
//     formData.append('movieid', 12345);

//      response = await fetch('http://localhost:3001/api/watchlist', {
//         method: 'POST',
//         body: formData,
//         credentials: "include",
//     });

//      response = await fetch(`http://localhost:3001/api/watchlist`, {
//         method: 'GET',
//         credentials: "include",
//     })
//     const data = await response.json();
//     console.log(data);
