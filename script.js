var stamp;

function addContact() {
//makeNewHistory
    var name = document.getElementById('textinput1').value;   
    var lastname = document.getElementById('textinput6').value;             
	//find the body
	var newpage = document.getElementById("pages");
	//make a new div
	var newDiv = document.createElement("div");
	newDiv.setAttribute("data-role","page");
	//sets the id to new page
	newDiv.setAttribute("id",name);
	//create the div2
	var newDiv2 = document.createElement("div");
	newDiv2.setAttribute("data-theme","a");
	newDiv2.setAttribute("data-role","header");	
	//create the header
	var newHeader = document.createElement("h1");
	newHeader.setAttribute("class","ui-title");
	//create the header text
	var newHeaderText = document.createTextNode("CONNECTIONS");
	newHeader.appendChild(newHeaderText);
	//create another div
	var newDiv3 = document.createElement("div");
	newDiv3.setAttribute("role","main");	
	newDiv3.setAttribute("class","ui-content");
	//create another div
	var newDiv4 = document.createElement("div");
	newDiv4.setAttribute("data-controltype","textbook");
	//create a p , b and textnode with name 
	var newP = document.createElement("p");
	var newB = document.createElement("b");
	var newText = document.createTextNode(name+" "+lastname);
	//create another div
	var newDiv5 = document.createElement("div");
	newDiv5.setAttribute("data-controltype","selectmenu");	
	newDiv5.setAttribute("class","ui-field-contain");
	//create a label with text node
	var newLabel = document.createElement("label");
	newLabel.setAttribute("for","selectmenu1");
	var news = document.createTextNode("Connection Type");
	//create the menu for options
	var newMenu = document.createElement("select");
	newMenu.setAttribute("id","options");	
	newMenu.setAttribute("data-theme","a");	
	//create call option and text node
	var newCall = document.createElement("option");
	newCall.setAttribute("value","call");	
	var newCallText = document.createTextNode("Call");
	//create email option and text node
	var newEmail = document.createElement("option");
	newEmail.setAttribute("value","email");	
	var newEmailText = document.createTextNode("Email");
	//create message option and text node
	var newMessage = document.createElement("option");
	newMessage.setAttribute("value","message");	
	var newMessageText = document.createTextNode("Message");
	//create the button
	var newButton = document.createElement("input");
	newButton.setAttribute("type","button");	
	newButton.setAttribute("value","Submit");	
	newButton.setAttribute("data-theme","a");
	newButton.setAttribute("onClick","updateHistory()");
	//create div6
	var newDiv6 = document.createElement("div");
	newDiv6.setAttribute("role","main");	
	newDiv6.setAttribute("class","ui-content");	
	//create div7
	var newDiv7 = document.createElement("div");
	newDiv7.setAttribute("data-controltype","textblock");
	//create p with text node "history" and new p with id = lines
	var newPP = document.createElement("p");
	var newPText = document.createTextNode("History");
	var newPPP = document.createElement("p");
	newPPP.setAttribute("id","lines");
	
	//add ons	
	newDiv3.appendChild(newDiv5);	
	newDiv3.appendChild(newButton);
	//add the text to the label
	newLabel.appendChild(news);
	//add the label to the div5
	newDiv5.appendChild(newLabel);
	//add the header to div2
	newDiv2.appendChild(newHeader);
	//add the div2 to the div
	newDiv.appendChild(newDiv2);
	//add the name in the b, the b in the p, the p in the div4
	newB.appendChild(newText);
	newP.appendChild(newB);
	newDiv4.appendChild(newP);
	//add div4 to div1 
	newDiv.appendChild(newDiv4);
	//add div3 to div1
	newDiv.appendChild(newDiv3);
	//add menu to div5
	newDiv5.appendChild(newMenu);
	//add text to option and then option to menu for call
	newCall.appendChild(newCallText);
	newMenu.appendChild(newCall);
	//same with email
	newEmail.appendChild(newEmailText);
	newMenu.appendChild(newEmail);
	//same with message
	newMessage.appendChild(newMessageText);
	newMenu.appendChild(newMessage);
			//put p with id in history
	newPP.appendChild(newPPP);
	//put history in p
	newPP.appendChild(newPText);
	//put pp in div7
	newDiv7.appendChild(newPP);
	newDiv6.appendChild(newDiv7);	
	newDiv.appendChild(newDiv6);
	//add the page to the div
	newpage.appendChild(newDiv);
//new contact	
    var contactList = document.getElementById("contactList");  
    	//create a new list item	
        var newListItem = document.createElement("li");
		newListItem.setAttribute("data-theme","a");
		//create the ahref	
		var newLink = document.createElement("a");
		//set the link to #new-page
		newLink.setAttribute("href","#"+name);
		//create the text	
        var newName = document.createTextNode(name+" "+lastname);
		//put the name in the link
		newLink.appendChild(newName);
		//put the link in the list
        newListItem.appendChild(newLink);
		//put the list in the unordered list
        contactList.appendChild(newListItem);        
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



	
