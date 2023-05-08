export default class Api {
  constructor({url,headers}) {
    this._url = url;
    this._token = headers['authorization'];
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка ${res.status}.`);
    }
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: {
        authorization: this._token,
      }
    })
      .then((res) => this._checkRequest(res));
  }


  getInfoUser() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        authorization: this._token,
      }
    })
      .then((res) => this._checkRequest(res));
  }


  editInfoUser({name, about}) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
      .then((res) => this._checkRequest(res));
  }
  editAvatarUser(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)})
      .then((res) => this._checkRequest(res));
  }

  addCard({name, link}) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link,})
    })
      .then((res) => this._checkRequest(res));
  }


  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      }
    })
      .then((res) => this._checkRequest(res));
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      }
    })
      .then((res) => this._checkRequest(res));
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      }
    })
      .then((res) => this._checkRequest(res));
  }

}
