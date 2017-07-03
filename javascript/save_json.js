
function saveJson() {

// We need to build a json object
        var jsonObject = '{ "presentationData" : [';

        // This is how you are going to iterate through the table and find its contents
        var table = document.getElementById("mytab1");// remember to add an id to your table
        var scenes = [];
        var presentation = {name : "default", author : "user", scenes : scenes };
        
        for (var i = 0, row; row = table.rows[i]; i++) {
            // We are about to start iterating through every column in the row.  So start the first element of the json
            // want to make row contain a array within it.  So the structure is a
            // array or rows with an aray of columns within each row
            var frames = [];

            var scene = {scene : "scene" + i, frames : frames };
            scenes.push(scene);

            for (var j = 0, col; col = row.cells[j]; j++) {
              console.log(row, "row", col, "col");
              var frame = { };
              if (col.firstElementChild && col.firstElementChild.nodeName.toLowerCase() === 'img') {
                console.log("FOUND IMG", i, j);
                frame = { image : col.firstElementChild.title };
              }
              frames.push(frame);
              console.log(frames);
			}
        }
        console.log(presentation);
        console.log("Create the json object");


		// Store JSON object in /presentation directory in Firebase storage
        var presRef = storageRef.child('presentation/1');
          var file = new Blob([JSON.stringify(presentation)], {type : 'application/json'});
        presRef.put(file).then(function(snapshot) {
			console.log('Uploaded presentation' );
			window.alert("Scene saved!");
			return ('presentation/1' || 0) + 1;
        });

    }
