"use strict";
exports.__esModule = true;
exports.AccountManager = void 0;
var database_1 = require("./database");
// Firebase
var app_1 = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyCtS882jl4p5maCkoEO-J7qSpCJ3gdK44s",
    projectId: "backjack123"
};
// Initialize Firebase
if (app_1["default"].apps.length === 0) {
    app_1["default"].initializeApp(firebaseConfig);
}
app_1["default"].auth().setPersistence(app_1["default"].auth.Auth.Persistence.LOCAL);
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.user = app_1["default"].auth().currentUser;
    }
    AccountManager.prototype.registerUser = function (messageContainer) {
        var email = document.querySelector('[type="email"]').value;
        var password = document.querySelector('[type="password"]').value;
        var passwordConfirm = document.querySelector('[data-confirm-password]').value;
        var name = document.querySelector('[name="name"]').value;
        var outputBuff = { code: 0, message: '' };
        if (password === passwordConfirm) {
            app_1["default"].auth().createUserWithEmailAndPassword(email, password)
                .then(function (user) {
                console.log('registered as ' + user.user);
                database_1.writeUserData(user.user.uid, name, user.user.email);
                outputBuff.code = 200;
                outputBuff.message = 'You are successfully registered!';
                console.log(outputBuff);
                messageContainer.innerHTML = outputBuff.message;
            })["catch"](function (error) {
                outputBuff.code = error.code;
                outputBuff.message = error.message;
                console.log(outputBuff);
                messageContainer.innerHTML = outputBuff.message;
            });
        }
        else {
            outputBuff.code = 400;
            outputBuff.message = "Passwords don't match!";
            console.log(outputBuff);
            messageContainer.innerHTML = outputBuff.message;
        }
    };
    AccountManager.prototype.signInUser = function (messageContainer) {
        var email = document.querySelector('[type="email"]').value;
        var password = document.querySelector('[type="password"]').value;
        var outputBuff = { code: 0, message: '' };
        if (this.user) {
            outputBuff.code = 400;
            outputBuff.message = 'Already logged as ' + this.user.email;
            showMessage(messageContainer, outputBuff.message);
        }
        else
            app_1["default"].auth().signInWithEmailAndPassword(email, password)
                .then(function (user) {
                outputBuff.code = 400;
                outputBuff.message = 'Signed in as ' + user.user.email;
                showMessage(messageContainer, outputBuff.message);
            })["catch"](function (error) {
                outputBuff.code = error.code;
                outputBuff.message = error.message;
                showMessage(messageContainer, outputBuff.message);
            });
    };
    AccountManager.prototype.deleteUser = function () {
        this.user["delete"]().then(function () {
            console.log('User deleted');
            console.log(this.user);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    AccountManager.prototype.changePassword = function (passwordContainer) {
        var newPassword = passwordContainer.value;
        this.user.updatePassword(newPassword).then(function () {
            console.log('Password updated.');
        })["catch"](function (error) {
            console.log(error);
        });
    };
    AccountManager.prototype.signOut = function () {
        var _this = this;
        app_1["default"].auth().signOut().then(function () {
            console.log(_this.user);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
function showMessage(container, message) {
    container.innerHTML = message;
}
//# sourceMappingURL=accountManager.js.map