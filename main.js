(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){var r=e.data,o=e.handleCardClick,i=e.handleDeleteCard,u=e.handleLikeScore,c=e.idUser;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._name=r.name,this._link=r.link,this._cardTemplateSelector=n,this._like=r.likes,this._id=r._id,this._owner=r.owner._id,this._idUser=c,this._handleCardClick=o,this._handleDeleteCard=i,this._handleLikeScore=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".post").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardPicture=this._element.querySelector(".post__photo"),this._cardPicture.src=this._link,this._cardTitle=this._element.querySelector(".post__name"),this._cardTitle.textContent=this._name,this._cardPicture.alt=this._name,this._likeButton=this._element.querySelector(".post__like-button"),this._deleteButton=this._element.querySelector(".post__delete-button"),this._likeScore=this._element.querySelector(".post__like-score"),this._likeScore.textContent=this._like.length,this._owner!==this._idUser&&this._deleteButton.remove(),this.like(),this._setEventListeners(),this._element}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"_checkLike",value:function(){var t=this;return this._like.some((function(e){return e._id===t._idUser}))}},{key:"like",value:function(){this._checkLike()?this.likeOn():this.likeOff()}},{key:"likeOn",value:function(){this._likeButton.classList.add("post__like-button_active"),this.isLiked=!0}},{key:"likeOff",value:function(){this._likeButton.classList.remove("post__like-button_active"),this.isLiked=!1}},{key:"newNumberLike",value:function(t){this._likeScore.textContent=t.likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeScore()})),this._deleteButton.addEventListener("click",(function(){t._handleDeleteCard()})),this._cardPicture.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".popup__form",submitSelector:".popup__save",inputSelector:".popup__input",inputSectionSelector:".popup__form-section",inputErrorSelector:".popup__input-error",disabledButtonClass:"popup__save_invalid",inputErrorClass:"popup__input-error_active",inputBorderError:"popup__input_invalid"};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._submitSelector=e.submitSelector,this._inputSelector=e.inputSelector,this._disabledButtonClass=e.disabledButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputBorderError=e.inputBorderError,this._inputs=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitSelector)}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputBorderError),n.textContent=e,n.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputBorderError),e.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._disabledButtonClass),this._buttonElement.removeAttribute("disabled",!1)}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._disabledButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"inactiveButton",value:function(){var t=this;this._inputs.forEach((function(e){return t._hideError(e)})),this._disableButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function l(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var s=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.closePopup()},(r=l(r="_closePopupEscape"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupEscape)}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupEscape)}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose.addEventListener("click",(function(){t.closePopup()})),this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.closePopup(e.target)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.formSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._formSubmit=r,e._form=e._popup.querySelector(".popup__form"),e._inputs=Array.from(e._popup.querySelectorAll(".popup__input")),e._saveButton=e._form.querySelector(".popup__save"),e._saveButtonTextContent=e._saveButton.textContent,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputs.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;y(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmit(t._getInputValues()),t.closePopup()}))}},{key:"closePopup",value:function(){y(d(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"renderSave",value:function(t){this._saveButton.textContent=t?"Cохранение...":this._saveButtonTextContent}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupOpenImage=e._popup.querySelector(".popup__open-image"),e._popupHeaderImage=e._popup.querySelector(".popup__header-image"),e}return e=u,(n=[{key:"openPopup",value:function(t,e){this._popupOpenImage.src=t,this._popupOpenImage.alt=e,this._popupHeaderImage.textContent=e,b(k(u.prototype),"openPopup",this).call(this)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var P=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var C=function(){function t(e){var n=e.userNameElement,r=e.userOccupationElement,o=e.userAvatarElement;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameElement=document.querySelector(n),this._userOccupationElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userOccupationElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._userNameElement.textContent=e,this._userOccupationElement.textContent=n,this._userAvatarElement.src=r,this._id=o}},{key:"getUserId",value:function(){return this._id}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"handleConfirm",value:function(t){this._submit=t}},{key:"setEventListeners",value:function(){var t=this;T(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submit()}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var U=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._token=r.authorization}var e,n;return e=t,(n=[{key:"_checkRequest",value:function(t){return t.ok?t.json():Promise.reject("Произошла ошибка ".concat(t.status,"."))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"cards"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return t._checkRequest(e)}))}},{key:"getInfoUser",value:function(){var t=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return t._checkRequest(e)}))}},{key:"editInfoUser",value:function(t){var e=this,n=t.name,r=t.about;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:r})}).then((function(t){return e._checkRequest(t)}))}},{key:"editAvatarUser",value:function(t){var e=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return e._checkRequest(t)}))}},{key:"addCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:r})}).then((function(t){return e._checkRequest(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._checkRequest(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._checkRequest(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._checkRequest(t)}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N=document.querySelector(".account__edit-button"),V=(document.querySelector(".popup__close"),document.querySelector(".popup__form-edit")),z=(document.querySelector(".popup__close-button-add"),document.querySelector(".account__add-button")),H=document.querySelector(".popup__form-add"),J=document.querySelector(".popup__input_type_name"),G=document.querySelector(".popup__input_type_job"),M=(document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_link"),document.querySelector(".popup__open-image"),document.querySelector(".popup__header-image"),document.querySelector(".popup__close-image"),document.querySelectorAll(".popup"),document.querySelector(".popup__form-avatar")),$=(document.querySelector(".popup_confirm"),document.querySelector(".account__avatar-button")),F=new U({url:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{authorization:"f60634d5-63da-4429-b79c-be8f0298c760","Content-Type":"application/json"}});Promise.all([F.getInfoUser(),F.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(o),Y.renderItems(i)})).catch((function(t){return console.log(t)}));var K=new u(r,V);K.enableValidation();var Q=new u(r,H);Q.enableValidation(),new u(r,M).enableValidation();var W=new C({userNameElement:".account__name",userOccupationElement:".account__profession",userAvatarElement:".account__photo"}),X=new g(".popup_image");X.setEventListeners();var Y=new P({renderer:function(t){Y.addItem(Z(t))}},".posts");function Z(t){var e=new n({data:t,handleCardClick:function(t,e){X.openPopup(t,e)},handleDeleteCard:function(){rt.openPopup(),rt.handleConfirm((function(){F.deleteCard(e.getId()).then((function(){e.removeCard(),rt.closePopup()})).catch((function(t){return console.log(t)}))}))},handleLikeScore:function(){e.isLiked?F.deleteLike(e.getId()).then((function(t){e.likeOff(),e.newNumberLike(t)})).catch((function(t){return console.log(t)})):F.addLike(e.getId()).then((function(t){e.likeOn(),e.newNumberLike(t)})).catch((function(t){return console.log(t)}))},idUser:W.getUserId()},"#cardTemplate");return e.generateCard()}var tt=new m({popupSelector:".popup_edit",formSubmit:function(t){tt.renderSave(!0),F.editInfoUser(t).then((function(t){W.setUserInfo(t),tt.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){tt.renderSave(!1)}))}});N.addEventListener("click",(function(){tt.openPopup();var t=W.getUserInfo(),e=t.name,n=t.about;J.value=e,G.value=n,K.inactiveButton()})),tt.setEventListeners();var et=new m({popupSelector:".popup_add",formSubmit:function(t){et.renderSave(!0),F.addCard(t).then((function(t){Y.addItem(Z(t)),et.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){et.renderSave(!1)}))}});z.addEventListener("click",(function(){Q.inactiveButton(),H.reset(),et.openPopup()})),et.setEventListeners();var nt=new m({popupSelector:".popup_update-avatar",formSubmit:function(t){nt.renderSave(!0),F.editAvatarUser(t).then((function(t){W.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){nt.renderSave(!1),nt.closePopup()}))}});$.addEventListener("click",(function(){nt.openPopup()})),nt.setEventListeners();var rt=new R(".popup_confirm");rt.setEventListeners()})();