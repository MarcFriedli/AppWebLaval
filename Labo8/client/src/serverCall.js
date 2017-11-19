const serverUrl = 'http://localhost:3000';

async function getUserprofile(token) {
  console.log('Le token vaut : ' + token);
  const myHeaders = new Headers();
  myHeaders.append('Samere', 'jpoirew');
  myHeaders.append('set-cookie', `token=${token}`);

  const myInit = {
    method: 'GET',
    headers: myHeaders,
    credentials: 'same-origin',
    mode: 'cors',
    cache: 'default'
  };

  const myRequest = new Request(`${serverUrl}/userprofile`, myInit);
  return fetch(myRequest)
    .then(response => console.log("Réponse : ", response.json()))
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
