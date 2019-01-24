document.addEventListener("click", function(e){
	console.log(e)
	var target = e.target;
	if(target.className.includes("post-tag")) {
		data = {
			class : target.className,
			text: target.innerText,
			username: 'ccc'
		};
		chrome.runtime.sendMessage({message: 'hi', data:data});
	}
});