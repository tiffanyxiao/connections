var defaults = {
// CSS selectors and attributes that would be used by the JavaScript functions
  contactlist: "contact-list",
  contactname: "contact-name",
  contactId: "contact-",
  formId: "contact-form",
  dataAttribute: "data",
  deleteDiv: "delete-div"
}, codes = {
  "1" : "#home", 
};

// Add Task
var generateElement = function(params) {
  var parent = $(codes[params.code]),
      wrapper;

  if (!parent) {
    return;
  }

  wrapper = $("<div />", {
    "class" : defaults.contactlist,
    "id" : defaults.contactId + params.id,
    "data" : params.id
  }).appendTo(parent);

  $("<div />", {
    "class" : defaults.contactname,
    "text": params.title
  }).appendTo(wrapper);

};

generateElement({
  id: "123",
  code: "1",
  title: "My Uber Important Task",
  date: "5/2/2014",
  description: "I have to do a lot of steps to implement this task!"
});
