var cartModel = [];

var getCartData = new Promise(function(resolve, reject) {
  	//  var cartAPI = "https://api.myjson.com/bins/qhnfp";
	 var cartAPI = "https://raw.githubusercontent.com/krishnavamsi3789github/prouctlistingpage/master/data/cart.json";
	  $.getJSON( cartAPI, {
		format: "json"
	  }).done(function( data ) {
			cartModel = data;
			//console.dir(cartModel);
			resolve("done");
		});
});

//function getCartData() {
/* $.getJSON("https://api.myjson.com/bins/qhnfp", function(data, status){
		console.dir("Data: " + data[0][0] + "\nStatus: " + status);
}); */

//}
/*var cartModel = [{
	"id": 9090,
	"name": "Item1",
	"price": 200,
	"discount": 10,
	"type": "fiction",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9091,
	"name": "Item2",
	"price": 250,
	"discount": 15,
	"type": "literature",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9092,
	"name": "Item3",
	"price": 320,
	"discount": 5,
	"type": "literature",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9093,
	"name": "Item4",
	"price": 290,
	"discount": 0,
	"type": "thriller",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9094,
	"name": "Item1",
	"price": 500,
	"discount": 25,
	"type": "thriller",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9095,
	"name": "Item2",
	"price": 150,
	"discount": 5,
	"type": "literature",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9096,
	"name": "Item3",
	"price": 700,
	"discount": 22,
	"type": "literature",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}, {
	"id": 9097,
	"name": "Item4",
	"price": 350,
	"discount": 18,
	"type": "fiction",
	"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
}]*/
