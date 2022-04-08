const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const cors = require("cors")({
  origin: true,
});

// onCall vs onRequest
// onCall
//  can be invoted directly from client app
//  it is implemented with user provited data and automatic context

// functions.httpsCallable('getUser')({uid})
//   .then(r => console.log(r.data.email))

// onRequest serves as express api endpoint
//  its the req, res one

// get user data

exports.getData = functions.https.onCall((data, context) => {
  if (!context.auth)
    return { status: "error", code: 401, message: "Not signed in" };

  const uid = context.auth.uid;
  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then((doc) => {
      return {
        selectedColors: doc.data().selectedColors,
        disabledColors: doc.data().disabledColors,
      };
    });
});

exports.getDataHttps = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method === "GET") {
      let format = req.query;
      console.log(req.query)

      if (!format) {
        // [START readBodyParam]
        format = req.body;
        console.log(req.body)
        // [END readBodyParam]
      }

      res.json(format);
      return;
    }
  });
});

// user signup
exports.userSignup = functions.auth.user().onCreate((user) => {
  // returns a promise cause this is a background trigger
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set({
      selectedColors: ["white", "white", "white", "white"],
      disabledColors: [],
    });
});

exports.setData = functions.https.onCall((data, context) => {
  if (!context.auth)
    return { status: "error", code: 401, message: "Not signed in" };

  const uid = context.auth.uid;
  const selectedColors = data.selectedColors;
  const disabledColors = data.disabledColors;

  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .set({
      selectedColors: selectedColors,
      disabledColors: disabledColors,
    })
    .then(() => {
      console.log("data set");
      return;
    });
});
