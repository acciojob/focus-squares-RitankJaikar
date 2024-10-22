//your JS code here. If required.
const squares= document.querySelectorAll(".square");

squares.forEach(square => {
	square.addEventListener("mouseover", (event) => {
		squares.forEach(square1 => {
			if(event.target !== square1) {
				console.log(event.target, square1);
				square1.style.backgroundColor = "#6F4E37";	
			}
		})
	})
})

squares.forEach(square => {
	square.addEventListener("mouseout", (event) => {
		squares.forEach(square1 => {
			square1.style.backgroundColor = "#E6E6FA";
		})
	})
})