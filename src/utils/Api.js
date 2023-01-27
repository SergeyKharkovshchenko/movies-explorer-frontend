// import { Component } from 'react';

// class Api extends Component {
//   constructor(setting) {
//     super(setting);
//     this._address = setting.baseUrl;
//     this._headers = setting.headers;
//   }

//   _getResponseData(res) {
//     if (!res.ok) {
//       return Promise.reject(`Ошибка: ${res.status}`);
//     }
//     return res.json();
//   }

//   getInitialCards() {
//     return fetch(`${this._address}cards`, {
//       headers: this._headers,
//     }).then((res) => this._getResponseData(res));
//   }

//   changeLikeCardStatus(id, isLiked) {
//     if (isLiked) {
//       return fetch(`${this._address}/cards/${id}/likes`, {
//         method: "PUT",
//         headers: this._headers,
//       }).then((res) => this._getResponseData(res));
//     } else {
//       return fetch(`${this._address}/cards/${id}/likes`, {
//         method: "DELETE",
//         headers: this._headers,
//       }).then((res) => this._getResponseData(res));
//     }
//   }
// }

// const api = new Api({
//   baseUrl: "https://",
//   headers: {
//     authorization: "",
//     "Content-Type": "application/json",
//   },
// });

// export default api;
