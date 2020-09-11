// const firebase = require("firebase/app");
// require("firebase/auth");
const { setCookie } = require("nookies");

// var firebaseConfig = {
//   apiKey: `${process.env.API_KEY}`,
//   authDomain: `${process.env.AUTH_DOMAIN}`,
//   databaseURL: `${process.env.DATABASE_URL}`,
//   projectId: `${process.env.PROJECT_ID}`,
//   storageBucket: `${process.env.STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
//   appId: `${process.env.APP_ID}`,
//   measurementId: `${process.env.MEASUREMENT_ID}`
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// export default (req, res) => {
//   if (req.method === "POST") {
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(userEmail, userPassword)
//       .then(response => {
//         console.log("response", response);
//         res.status(200);
//         setCookie({ res }, "christy", "19950221", {
//           maxAge: 30 * 2,
//           httpOnly: true
//         });
//         res.end();
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500);
//         res.end();
//       });
//   } else {
//     res.status(500);
//     res.end();
//   }
// };

export default (req, res) => {
  if (req.method === "POST") {
    res.status(200);
    setCookie({ res }, "christy", "1192015", {
      maxAge: 30 * 2,
      httpOnly: true
    });
    res.end();
  } else {
    res.status(500);
    res.end();
  }
};
