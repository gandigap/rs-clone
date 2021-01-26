import firebase from "firebase/app";

class User {
    constructor(user) {
        this.user = user;
    }

    deleteAccount() {
        console.log(this.user);
        console.log(firebase.apps);
        user.delete().then(function() {
            console.log('User deleted')
        }).catch(function(error) {
            console.log('An error happened' + error);
        });
    }

    changePassword() {
        var user = firebase.auth().currentUser;
        var newPassword = getASecureRandomPassword(); // ?

        user.updatePassword(newPassword).then(function() {
            // Update successful.
        }).catch(function(error) {
            // An error happened.
        });
    }
}
