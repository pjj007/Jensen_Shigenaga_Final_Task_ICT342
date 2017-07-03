# High-Vis Portal

This project will develop a web-site and server software that allows presenters to create a portal account, log in, and upload photos and panoramas to the server, then arrange those images into a sequence of CAVE ‘scenes’.  Each scene can be 2-4 images wide, to fill up the CAVE. The presenter will then be able to move, reorder, and add images to customise the presentation. The final presentation will be saved into a folder as a set of images plus a JSON control file that defines the layout of the images and audio clips in the scenes.  Existing viewer programs can then be used to display the presentation in the CAVE.

## Getting Started

The current API key used is under our Gmail Account. This is only for testing purposes.

To use this app API, you must register a Gmail account and then get authentication credentials from the user. These credentials can be the user's email address and password. Then, you pass these credentials to the Firebase Authentication SDK. Our backend services will then verify those credentials and return a response to the client.

### Prerequisites

A Gmail account that can be linked to a Firebase account.

The html files can be opened with Firefox and Google Chrome.

### Installing
Copy, then paste the code snippet into your application HTML. The code snippet should look like this:
```
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
</script>
```
## Deployment

The snippet contains initialization information to configure the Firebase JavaScript SDK to use Authentication, Cloud Storage and the Realtime Database. You can reduce the amount of code your app uses by just including the features you need. The individually installable components are:
```
firebase-app - The core firebase client (required).
firebase-auth - Firebase Authentication (optional).
firebase-database - The Firebase Realtime Database (optional).
firebase-storage - Cloud Storage (optional).
firebase-messaging - Firebase Cloud Messaging (optional).
```
```
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js"></script>
```
## Built With

* Google Firebase Cloud Storage - (https://firebase.google.com/docs/storage/)

## Authors

* **Paul Jensen** - *Initial work* - [pjj007]https://github.com/pjj007) 
* **Leo Shigenaga** - *Initial work* - [Shige94](https://github.com/Shige94) 

## License

This project is made for ICT342 - Industry Project course # High-Vis Portal - University of the Sunshine Coast (USC)

## Acknowledgments

Dr Mark Utting

Inspirations:

* React-Grid-Layout by STRML (https://github.com/STRML/react-grid-layout)
* Dragula by Bevacqua (https://github.com/bevacqua/dragula)
* Sortable by RubaXa (https://github.com/RubaXa/Sortable)
* react-motion by Chenglou (https://github.com/chenglou/react-motion)
* Flexbox by Chris Coyier (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Native HTML5 Drag and Drop by Eric Bidelman (https://www.html5rocks.com/en/tutorials/dnd/basics/)
* Reading files in JavaScript using the File APIs by Eric Bidelman (https://www.html5rocks.com/en/tutorials/file/dndfiles/)
* HTML5 Drag and Drop by W3Schools (https://www.w3schools.com/html/html5_draganddrop.asp)


