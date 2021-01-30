import { writeUserData } from './database';
import { changeLogButtonState } from '../main/utils/utils';

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCtS882jl4p5maCkoEO-J7qSpCJ3gdK44s",
    projectId: "backjack123",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export class AccountManager {
    user: firebase.User;
    indexLanguage: number;

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        this.user = firebase.auth().currentUser;
    }

    async registerUser(messageContainer) {
        const email = (<HTMLInputElement>document.querySelector('[type="email"]')).value;
        const password = (<HTMLInputElement>document.querySelector('[type="password"]')).value;
        const passwordConfirm = (<HTMLInputElement>document.querySelector('[data-confirm-password]')).value;
        const name = (<HTMLInputElement>document.querySelector('[name="name"]')).value;
        const outputBuff = { code: 0, message: '' };
        
        if (password === passwordConfirm) {
           await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(async (user) => {
                    await user.user.updateProfile({
                    displayName: name,
                   }).then(function() {
                    console.log('success!!!!!!!');
                    }).catch((err)=> {
                       console.log(err);
                   });
                    console.log('registered as ' + user.user);
                    writeUserData(user.user.uid, name, user.user.email)
                    outputBuff.code = 200;
                    outputBuff.message = 'You are successfully registered!';
                    console.log(outputBuff);
                    messageContainer.innerHTML = outputBuff.message;
                })
                .catch((error) => {
                    outputBuff.code = error.code;
                    outputBuff.message = error.message;
                    console.log(outputBuff);
                    messageContainer.innerHTML = outputBuff.message;
                });
        } else {
            outputBuff.code = 400;
            outputBuff.message = "Passwords don't match!";
            console.log(outputBuff);
            messageContainer.innerHTML = outputBuff.message;
        }
    }

    async signInUser(messageContainer) { 
        const email = (<HTMLInputElement>document.querySelector('[type="email"]')).value;
        const password = (<HTMLInputElement>document.querySelector('[type="password"]')).value;
        const outputBuff = { code: 0, message: '' };
        if (this.user) {
            outputBuff.code = 400;
            outputBuff.message = 'Already logged as ' + this.user.email;
            showMessage(messageContainer, outputBuff.message)
        } else
           await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    outputBuff.code = 400;
                    outputBuff.message = 'Signed in as ' + user.user.email;
                    showMessage(messageContainer, outputBuff.message)
                })
                .catch((error) => {
                    outputBuff.code = error.code;
                    outputBuff.message = error.message;
                    showMessage(messageContainer, outputBuff.message)
                });
    }

    deleteUser() {
        const language = this.indexLanguage;
        console.log(this.user)
        this.user.delete().then(function () {
            changeLogButtonState(false, 'Log In', language);
        }).catch(function (error) {
            console.log(error)
        });
    }

    changePassword(passwordContainer: HTMLInputElement) {
        const newPassword = passwordContainer.value;
        this.user.updatePassword(newPassword).then(function () {
            console.log('Password updated.')
        }).catch(function (error) {
            console.log(error)
        });
    }

    signOut() { 
        firebase.auth().signOut().then(() => {
           changeLogButtonState(false, 'Log In', 0);
        }).catch((error) => {
           console.log(error);
        });
    }

    async getUserState() {
        return new Promise((resolve, reject)=> {
        firebase.auth().onAuthStateChanged(user => {
                 resolve(!!user);
            });
        })
    }

    async getUserName() {
        return new Promise((resolve, reject)=> {
        firebase.auth().onAuthStateChanged(user => {
            if (user) 
                resolve(firebase.auth().currentUser.displayName);
            });
        })
    }
}

function showMessage(container, message) {
    container.innerHTML = message;
}
