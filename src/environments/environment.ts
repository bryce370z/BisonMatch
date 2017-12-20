// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBZdzLrUiwynJmof8JeXT23OSZfStVUaDQ",
    authDomain: "bisonmatchdb.firebaseapp.com",
    databaseURL: "https://bisonmatchdb.firebaseio.com",
    projectId: "bisonmatchdb",
    storageBucket: "bisonmatchdb.appspot.com",
    messagingSenderId: "872025034556"
    }

};

// <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBZdzLrUiwynJmof8JeXT23OSZfStVUaDQ",
//     authDomain: "bisonmatchdb.firebaseapp.com",
//     databaseURL: "https://bisonmatchdb.firebaseio.com",
//     projectId: "bisonmatchdb",
//     storageBucket: "bisonmatchdb.appspot.com",
//     messagingSenderId: "872025034556"
//   };
//   firebase.initializeApp(config);
// </script>
