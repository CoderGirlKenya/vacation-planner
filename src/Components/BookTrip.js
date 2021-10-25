fetch("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=Las%20Vegas&lang=en_US&units=km", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "cf8cd58a9amsh9b25b1e131da0b9p1c7cdajsnf20f31405381"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});