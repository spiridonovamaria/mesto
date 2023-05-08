export default class UserInfo {
  constructor({userNameElement, userOccupationElement, userAvatarElement}) {
    this._userNameElement = document.querySelector(userNameElement);
    this._userOccupationElement = document.querySelector(userOccupationElement);
    this._userAvatarElement = document.querySelector(userAvatarElement);

  }

  getUserInfo() {
    const accountInfo = {
      name: this._userNameElement.textContent,
      about: this._userOccupationElement.textContent,

    };
    return accountInfo;
  }


  setUserInfo({name, about, avatar, _id}) {
    this._userNameElement.textContent = name;
    this._userOccupationElement.textContent = about;
    this._userAvatarElement.src = avatar;
    this._id = _id;
  }
  getUserId() {
    return this._id;
  }

}


