import firebase from "firebase/app";
import 'firebase/database';


export function writeUserData(userId, name, email) {
    // console.log(firebase.apps);
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
    writeHotelRoom('King room', userId);
    firebase.database().ref('users/' + userId + 'f1').set({
        username: name + '111',
        email: email + '111',
    });
    writeHotelRoom('King room', userId + 'f1');
}

export function writeHotelRoom(roomType, userId) {
    let UID;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            UID = user.uid;
        } else {
            UID = userId;
        }
    });
    firebase.database().ref('users/' + UID).update({
        roomType: roomType,
        date: new Date().toDateString(),
    });
    var users = firebase.database().ref("users").orderByKey();
    users.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                console.log(childData.roomType);
                findRoom(childData.roomType)
            });
        });


}

function findRoom(roomType) {
    firebase.database().ref('users').orderByChild('roomType')
        .equalTo(roomType)
        .on("value", function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(data) {
                console.log(data.key);
            });
        });
}

// function buttonEventListener() {
//     const button = document.querySelector('#button-next-step');
//     button.addEventListener('click', () => {

//       writeHotelRoom()
//     });
// }