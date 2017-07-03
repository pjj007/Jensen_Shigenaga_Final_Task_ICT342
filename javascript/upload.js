//=========================== Google Firebase Connection ========================
// From: https://console.firebase.google.com/project/usc-slice-hivis/overview?pli=1
// Initialize Firebase
(function() {


// Initialize Firebase
// API key from Google Account
	/*
var config = {
	  apiKey: "AIzaSyDKlrngkJTxoAAwn5K8GB_UYcY-6Epx2s8",
	  authDomain: "ict342-cave-scene.firebaseapp.com",
	  databaseURL: "https://ict342-cave-scene.firebaseio.com",
	  projectId: "ict342-cave-scene",
	  storageBucket: "ict342-cave-scene.appspot.com",
	  messagingSenderId: "298384793473"
	};

firebase.initializeApp(config);
	
	*/
	
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuTZMNjn5AR5-d7mo3T7M9sjYp5wuqsRc",
    authDomain: "usc-cave-lab.firebaseapp.com",
    databaseURL: "https://usc-cave-lab.firebaseio.com",
    projectId: "usc-cave-lab",
    storageBucket: "usc-cave-lab.appspot.com",
    messagingSenderId: "596210423043"
  };
  firebase.initializeApp(config);	


// Get elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogout = document.getElementById('btnLogout');

// Add login event
	if(btnLogin){
btnLogin.addEventListener('click', function() {
	// Get email and pass
	var email = txtEmail.value;
	var pass = txtPassword.value;
	var auth = firebase.auth();

	// Sign in
	var promise = auth.signInWithEmailAndPassword(email, pass);
	firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		window.alert("You are now logged in!");
		window.location = "caveScene.html";
	}
	});
//	promise.catch(e => console.log(e.message));
});
	}
	// Add signup event
	if(btnSignUp) {
btnSignUp.addEventListener('click', function() {
	// Get email and pass
	// TODO: CHECK REAL EMAIL
	var email = txtEmail.value;
	var pass = txtPassword.value;
	var auth = firebase.auth();
	window.alert("You have just signed up! Press the login button.");

	// Sign in
	var promise = auth.createUserWithEmailAndPassword(email, pass);
	promise
	//.then(user => console.log(user))
//	.catch(e => console.log(e.message));
});
	}
	// Add signout event
	if(btnLogout) {
btnLogout.addEventListener('click', function() {
	firebase.auth().signOut();
	window.alert("You are now logged out!");
	window.location = "index.html";
});
	}

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			// window.alert("You are now logged in!");
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
//			 window.alert("You have entered invalid data. Please try again.");
			btnLogout.classList.add('hide');
		}
	});

}());

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();
// Create a child reference
var imagesRef = storageRef.child('images');

var image_counter = 0;

// upload an image to Google Firebase
function upload_image(img_name, img_data) {

  console.log("Uploading", img_name, "data:", img_data);
  var ref = imagesRef.child(img_name);
  ref.put(img_data).then(function(snapshot) {
    console.log('Uploaded ' + img_name + " successfully.");
	  if (img_data < 1 != null) {
		  alert('Uploaded ' + img_name + " successfully.");
	  } else if (img_data > 1 ) {
		  alert("All Images Uploaded Successfully!");
	  } else if (img_data == null) {
		  alert("Failed to Submit " + img_name);
	  }
  });
}

function download_images() {
		imagesRef.child('').getDownloadURL().then(function(url) {
			var item = document.createElement('td');
			var palette = document.getElementById('palette');
			palette.src = url;
			if (palette != null) {
				palette.appendChild(item);
			} else {
				console.log("failed to append");
			}
			item.innerHTML = ['<img class="thumb"',
											 ' src="', url,'"',
												' draggable="true"',
												' ondragstart="dragstart(event)"',
												' id="', escape(url), '"',
												' title="', escape(url), '"/>'].join('');
		}).catch(function(error) {
			console.log("error downloading images", error);
		});
}

function handleFileSelect(ev) {
  var files = ev.target.files; // FileList object
  var output = document.getElementById("frames");
  var filesCount = [];

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
      filesCount.push(i);
      let file = files[i];
      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        console.log("reader onload", ev);
        var item = document.createElement('td');
        var palette = document.getElementById('palette');

        if (palette != null) {
          palette.appendChild(item);
        } else {
          console.log("failed to append");
        }
        item.innerHTML = ['<img class="thumb"',
                          ' src="', e.target.result,'"',
                          ' draggable="true"',
                          ' ondragstart="dragstart(event)"',
                          ' id="', escape(theFile.name), '"',
                          ' title="', escape(theFile.name), '"/>'].join('');

        document.getElementById('subbtn').onclick = function(){
          for (var i = 0, f; f = files[i]; i++) {
          var file= files[i];
          upload_image(file.name, file)};
        }
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
