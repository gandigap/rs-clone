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
    let result = await showBuckedDates(roomType);
    return result;
}

export async function setRoomsDate(dates) {
    let UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        dates: dates,
    });
}

async function getUserId() {
    var user = firebase.auth().currentUser;
    return user ? user.uid : null;
}

async function showBuckedDates(roomType) {
    const datesArray = [];
    await firebase.database().ref('users').orderByChild('roomType')
        .equalTo(roomType)
        .once("value", function (snapshot) {
            snapshot.forEach(function (userObj) {
                const date = userObj.val().dates;
                if (date) datesArray.push(date);
            });
        });
    return datesArray;
}

export async function removeUser() {
    const UID = await getUserId(); 
    firebase.database().ref('users/' + UID).remove() 
        .then(function() {
            console.log("Remove succeeded.")
        })
        .catch(function(error) {
            console.log("Remove failed: " + error.message)
        });
}
