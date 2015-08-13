function addContact(){
	//find the place of the list
    var contactList = document.getElementById("contactList");  
    //get the name
    var name = document.getElementById('textinput1').value
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
}