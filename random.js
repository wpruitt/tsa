console.log("random.js")



document.addEventListener("click", function(){
	var x = Math.floor((Math.random() *2)+1);
	console.log(x, event.target)
	var page = document.getElementsByTagName("body")
	page[0].innerHTML = ""
	console.log(page[0].innerHTML)
	if (x === 1){
		page[0].innerHTML = (`<img src="images/right.png" alt="Left">`)
	}
	else if (x===2){
		page[0].innerHTML = (`<img src="images/left.jpg" alt="Right">`)
	}
})