 chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
  console.log(response.data);
  $.post("http://localhost:3000/interaction/add",response.data);
});