

 export const getInitialCards = ()  => {
    return fetch(`${baseUrl}`, {
      credentials: 'include',
           headers: {
            "Origin": "https://sergey-kh.dilpom.nomoredomainsclub.ru",
            "Accept": "application/json",        
            "Content-Type": "application/json",
          },
    }).then((res) => this._getResponseData(res));
  }


export const baseUrl = "https://api.nomoreparties.co/beatfilm-movies/";
