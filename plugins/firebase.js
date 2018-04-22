const firebase = require("firebase/app");
// require("firebase/auth");
require("firebase/database");
// require("firebase/firestore");
// require("firebase/messaging");
// require("firebase/functions");

export default (ctx, inject) => {
    firebase.initializeApp({
        apiKey: "AIzaSyBjYaRia4ieI1v7g9-E-kMKbFviZFk6flE",
        authDomain: "jerico-bd962.firebaseapp.com",
        databaseURL: "https://jerico-bd962.firebaseio.com",
        projectId: "jerico-bd962",
        storageBucket: "jerico-bd962.appspot.com",
        messagingSenderId: "175323861372"
    });

    ctx.$firebase = firebase;
    ctx.$firebasedb = firebase.database();
    inject("firebase", firebase);
    inject("firebasedb", firebase.database());
};