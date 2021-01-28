import firebase from "firebase/app";
import 'firebase/database';


export function writeUserData(userId:string, name:string, email:string):void {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
}

export async function writeHotelRoom(roomType:string) {
    let UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        roomType: roomType,
    });
    showBuckedDates(roomType);
}

export async function setRoomsDate(dates) {
    let UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        dates: dates,
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

function showBuckedDates(roomType) {
    const datesArray = [];
    firebase.database().ref('users').orderByChild('roomType')
        .equalTo(roomType)
        .on("value", function(snapshot) {
            snapshot.forEach(function(userObj) {
                const date = userObj.val().dates;
                if (date) datesArray.push(date);
            });
            console.log(datesArray)
        });
    // return datesArray;
}
