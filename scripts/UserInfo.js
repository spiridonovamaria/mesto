export default class UserInfo {
  constructor({userNameElement, userOccupationElement, titleElement}) {
    this._userNameElement = document.querySelector(userNameElement);
    this._userOccupationElement = document.querySelector(userOccupationElement);
    this._titleElement = document.querySelector(titleElement);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userNameElement.textContent,
      job: this._userOccupationElement.textContent,
      title: this._titleElement.textContent
    };
    return userInfo;
  }

  setUserInfo({name, job, title}) {
    this._userNameElement.textContent = name;
    this._userOccupationElement.textContent = job;
    this._titleElement = title;
  }}


