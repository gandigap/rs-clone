import firebase from "firebase/app";
import 'firebase/database';


export function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
}

export async function writeHotelRoom(roomType) {
    let UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        roomType: roomType,
    });
    findRoom(roomType)
}

export async function getRoomsDate(date) {
    let UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        date: date,
    });
}

async function getUserId() {
    var user = firebase.auth().currentUser;
    if (user) {
        console.log(user.uid)
        return user.uid;
    } else {
        console.log('User is not signed in');
        return null;
    }

}

function findRoom(roomType) {
    firebase.database().ref('users').orderByChild('roomType')
        .equalTo(roomType)
        .on("value", function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(obj) {
                const date = obj.val().date;
                if (date) {
                    showBuckedDates(date);
                }
            });
        });
}

export async function showBuckedDates(dates) {
    let UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        dates: dates,
    });
}