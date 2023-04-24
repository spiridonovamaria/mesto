export default class UserInfo {
  constructor({userNameElement, userOccupationElement}) {
    this._userNameElement = document.querySelector(userNameElement);
    this._userOccupationElement = document.querySelector(userOccupationElement);

  }

  getUserInfo() {
    const userInfo = {
      name: this._userNameElement.textContent,
      job: this._userOccupationElement.textContent,

    };
    return userInfo;
  }

  setUserInfo({name, job}) {
    this._userNameElement.textContent = name;
    this._userOccupationElement.textContent = job;

  }}


