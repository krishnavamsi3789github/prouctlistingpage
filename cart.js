$(document).ready(function () {
	
	  getCartData.then(function(value) {
		console.log(value);
		console.log(cartModel);
		$('.product-list a').on('click', function () {
			$('.product-body').addClass('hide');
			$('.cartpage').removeClass('hide');
			$('.product-list_border').removeClass('hide');
		});
		$('.cartpage .product-list h3 button').on('click', function () {
			$('.product-body').removeClass('hide');
			$('.cartpage').addClass('hide');
			$('.product-list_border').addClass('hide');

		});

		$("#cartTemplate").template("cartCollection"); //compiling the template to named listAttendees

		$.tmpl("cartCollection", cartModel).appendTo("#cartItems");

		var selectedItem = null;

		$('#cartItems').delegate('.addCart', 'click', function () {

			if (selectedItem) {
				selectedItem.tmpl = $.template('cartTemplate');
			}

			selectedItem = $.tmplItem(this);
			//console.log(selectedItem.data);
			addcart(selectedItem.data);

			var btn = '#btn_'+selectedItem.data.id;
			$(btn).prop('disabled', true);
			 selectedItem = null;
		});


		$('.shoppingCartView').delegate('.increment-btn', 'click', function () {
			if (selectedItem) {
				selectedItem.tmpl = $.template('shoppingCartTemplate');
			}
			selectedItem = $.tmplItem(this);
			//console.dir(selectedItem.data.id);
			quantity(selectedItem.data.id, true);
			// addcart(selectedItem.data);
			 selectedItem = null;
		});

		$('.shoppingCartView').delegate('.decrement-btn', 'click', function () {
			if (selectedItem) {
				selectedItem.tmpl = $.template('shoppingCartTemplate');
			}
			selectedItem = $.tmplItem(this);
		   // console.dir(selectedItem.data.id);
			quantity(selectedItem.data.id, false);
			// addcart(selectedItem.data);
			 selectedItem = null;
		});



		$('.shoppingCartView').delegate('.close', 'click', function () {
			if (selectedItem) {
				selectedItem.tmpl = $.template('shoppingCartTemplate');
			}
			selectedItem = $.tmplItem(this);
		   // console.dir(selectedItem.data.id);
			removeCart(selectedItem.data.id);
			
			var btn = '#btn_'+selectedItem.data.id;
			$(btn).prop('disabled', false);
			 selectedItem = null;
		});
	  });
	
});

var userCart = [];
function addcart(data) {
    data.qty = 1;
    data.qtyprice = data.price;
    userCart.push(data);
    //console.log(userCart.length);
refreshCount();
    $("#shoppingCart").empty().append($("#shoppingCartTemplate").tmpl(userCart));
    totalprice();

}
function refreshCount(){
    $('.product-message p span').text(userCart.length);
    $('#cartCount').text(userCart.length);
    if (userCart.length > 0) {
        $('.product-message p').removeClass('hide');
    } else {
        $('.product-message p').addClass('hide');
    }
    $('.totalQty').text(userCart.length);
    console.dir(userCart);
}

function quantity(id, incre) {
    userCart.forEach(function (item, index) {

        if (item.id == id) {
            if (incre) {
                item.qty++;
            } else {
                item.qty--;
            }
            item.qtyprice = item.qty * item.price;
            return;
        }
    });
    totalprice();
    refreshCount();
    $("#shoppingCart").empty().append($("#shoppingCartTemplate").tmpl(userCart));
}

function totalprice() {
    var totalprice = 0;
    var totalDiscount = 0;
    var orderPrice =0;
    for (var i = 0; i < userCart.length; i++) {
        totalprice = totalprice + userCart[i].qtyprice;
        totalDiscount = totalDiscount + (userCart[i].discount * userCart[i].qty);
    }
    orderPrice = totalprice - totalDiscount;
    $('.shopping_total_price').text(totalprice);
    $('.shopping_discount').text(totalDiscount);
    $('.shopping_total_order').text(orderPrice);
}


function removeCart(itemId) {
    //console.log(itemId);
   // console.dir(userCart);
    var itemIndex = null;
    userCart.forEach(function (item, index) {

        if (item.id == itemId) {
            itemIndex = index;
            return;
        }
    });

    userCart.splice(itemIndex,1);
    //console.dir(userCart);
    totalprice();
    refreshCount();
    $("#shoppingCart").empty().append($("#shoppingCartTemplate").tmpl(userCart));
}

function discountcart(data) {
    data.qty = 1;
    data.discountprice = data.price -data.discount;
    //console.log(data.discountprice);
}