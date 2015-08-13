var stamp;

function addContact() {
    var contactList = document.getElementById("contactList");  
    var name = document.getElementById('textinput1').value;
    	//create a new list item	
        var newListItem = document.createElement("li");
		newListItem.setAttribute("data-theme","a");
		//create the ahref	
		var newLink = document.createElement("a");
		newLink.setAttribute("href","#history");
		//create the text	
        var newName = document.createTextNode(name);
		//put the name in the link
		newLink.appendChild(newName);
		//put the link in the list
        newListItem.appendChild(newLink);
		//put the list in the unordered list
        contactList.appendChild(newListItem);
   //new history page     
        
}

function updateHistory(){
var value = document.getElementById("options").value;
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    	}
	}
var stamp = (date.join("/") + " " + time.join(":") + " " + suffix);
	if (value == "call") {
		//find where to put it
		var history = document.getElementById("lines");
		//create a new text item
		var newText = document.createTextNode("Called " + stamp);
		//create a new p item 
		var newLine = document.createElement("p");
		newLine.appendChild(newText);
		history.appendChild(newLine);
	}		
	if (value == "email") {
		//find where to put it
		var history = document.getElementById("lines");
		//create a new text item
		var newText = document.createTextNode("Emailed " + stamp);
		//create a new p item 
		var newLine = document.createElement("p");
		//put the text in the p
		newLine.appendChild(newText);
		history.appendChild(newLine);
	}
		if (value == "message") {
		//find where to put it
		var history = document.getElementById("lines");
		//create a new text item
		var newText = document.createTextNode("Messaged " + stamp);
		//create a new p item 
		var newLine = document.createElement("p");
		//put the text in the p
		newLine.appendChild(newText);
		history.appendChild(newLine);
	}		
}

