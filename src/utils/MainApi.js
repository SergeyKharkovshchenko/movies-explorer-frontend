const getResponse = res => 
    res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);

    export const register = async (userName, email, password) => {

      console.log('[MainApi] userName > ' + userName);
      console.log('[MainApi] email > ' + email);
      console.log('[MainApi] password > ' + password);

    const res = await fetch(`${baseUrl}signup`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Cross-Origin-Resource-Policy': 'cross-origin', 
        "Accept": "application/json",        
        "Content-Type": "application/json"
    } ,
      body: JSON.stringify({
        "name": userName,
        "email": email,
        "password": password
      }),
    })
    return getResponse(res);  
  }

  export const login = async (email, password ) => {
    const res = await fetch(`${baseUrl}signin`, {
      method: "POST",
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        "Origin": "https://sergey-kh.nomoredomains.club",
        "Accept": "application/json",        
        "Content-Type": "application/json"
    } ,
      body: JSON.stringify({
        "email": email,
        "password": password
      }),
    })
    return getResponse(res);  
  }

  export const logOut = async () => {
    const res = await fetch(`${baseUrl}logout`, {
      method: "POST",
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        "Origin": "https://sergey-kh.dilpom.nomoredomains.rocks/",
        "Accept": "application/json",        
        "Content-Type": "application/json"
    } 
  })
  return getResponse(res);  
}

  export const checkToken = async () => {
  const res = await fetch(`${baseUrl}users/me`, {
      method: "GET",
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        "Origin": "https://sergey-kh.dilpom.nomoredomains.rocks/",
        "Accept": "application/json",        
        "Content-Type": "application/json",
    } ,
    })
    return getResponse(res);  
  }

export const baseUrl = "https://api.sergey-kh.dilpom.nomoredomains.rocks/";