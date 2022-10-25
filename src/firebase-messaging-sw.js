importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAdZQgdO3zkYjEoC0zhyn4R_isf5zFGm7Q",
    authDomain: "oshop-e0092.firebaseapp.com",
    databaseURL: "https://oshop-e0092-default-rtdb.firebaseio.com",
    projectId: "oshop-e0092",
    storageBucket: "oshop-e0092.appspot.com",
    messagingSenderId: "764194615675",
    appId: "1:764194615675:web:bb9f2fe1b63757242e8dde",
    measurementId: "G-3XYH8D11ZX"
});
const messaging = firebase.messaging();