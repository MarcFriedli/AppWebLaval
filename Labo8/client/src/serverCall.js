const serverUrl = 'http://localhost:3000';

async function getUserprofile(token) {
  const myHeaders = new Headers();
  myHeaders.append('-token', token);

  const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };

  const myRequest = new Request(`${serverUrl}/userprofile`, myInit);
  return fetch(myRequest)
    .then(response => response.json())
    .catch(() => console.error('Something bad happens, please try again later'));
}

async function checkLogin(user, pass){
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const myInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      username: user,
      password: pass
    }),
    cache: 'default'
  };

  const myRequest = new Request(`${serverUrl}/login`, myInit);
  return fetch(myRequest)
    .then(response => response.json())
    .then(json => json.token)
    .catch(() => console.error('Something bad happends, please try again later'));
}

export{
  getUserprofile,
  checkLogin
}
