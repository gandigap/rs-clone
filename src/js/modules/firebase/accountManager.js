import ConfirmForm from '../main/confirmForm';
import SwiperGalery from '../main/addGalery';
import Modal from '../main/createModal';
import { writeUserData } from './database';

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export class AccountManager {

    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyCtS882jl4p5maCkoEO-J7qSpCJ3gdK44s",
            projectId: "backjack123",
        };
        // Initialize Firebase
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    registerUser(messageContainer) {
        const email = document.querySelector('[type="email"]').value;
        const password = document.querySelector('[type="password"]').value;
        const passwordConfirm = document.querySelector('[data-confirm-password]').value;
        const name = document.querySelector('[name="name"]').value;
        const outputBuff = { code: 0, message: '' };
        if (password === passwordConfirm) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
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

    signInUser(messageContainer) {
        let email = document.querySelector('[type="email"]').value;
        let password = document.querySelector('[type="password"]').value;
        const outputBuff = { code: 0, message: '' };
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         // User is signed in.
        //     } else {
        //         // No user is signed in.
        //     }
        // });
        if (firebase.auth().currentUser) {
            outputBuff.code = 400;
            outputBuff.message = 'Already logged as ' + firebase.auth().currentUser.email;
            showMessage(messageContainer, outputBuff.message)
        } else
            firebase.auth().signInWithEmailAndPassword(email, password)
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

    changeModalContent(contentType, registration) {
        if (contentType === 'confirmForm') {
            if (registration) return new ConfirmForm('registration');
            else return new ConfirmForm('signIn');
        } else if (contentType === 'swiperGalery')
            return new SwiperGalery();
        else return;
    }
}

function showMessage(container, message) {
    container.innerHTML = message;
}
