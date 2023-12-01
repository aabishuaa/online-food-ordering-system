

function openProductPopup(product) {
    document.getElementById('popup-product-name').innerText = product.name;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('quantity-input').value = 1;
    document.getElementById('popup-product-price').innerText = `Price: $${product.price.toFixed(2)}`;
    
    document.getElementById('popup-img').src = product.image;
    document.getElementById('product-popup').style.display = 'flex';
}


var patties = {
    name: 'Patties',
    description: 'Delicious patties made with love',
    quantity: 1,
    price: 250,
    image: 'assets/img/cart/patty.png' // Replace with the actual image URL
};
var meatLoaves = {
    name: 'Meat Loaves',
    description: 'Made fresh with quality beef.',
    quantity: 1,
    price: 390,
    image: 'assets/img/cart/meatloaf.png' // Replace with the actual image URL
};
var wata = {
    name: 'Wata',
    description: 'Stay hydrated with a bottle of WATA.',
    quantity: 1,
    price: 100,
    image: 'assets/img/cart/wata.png' // Replace with the actual image URL
};
var tea = {
    name: 'Tea',
    description: 'Calm your nerves with a nice cup of hot and freshly made tea.',
    quantity: 1,
    price: 150,
    image: 'assets/img/cart/tea.png' // Replace with the actual image URL
};
var cranWata = {
    name: 'Cran Wata',
    description: 'Enjoy your meal with a bottle of Cran Water',
    quantity: 1,
    price: 130,
    image: 'assets/img/cart/cranwata.png' // Replace with the actual image URL
};
var bananaBread = {
    name: 'Banana Bread',
    description: 'Enjoy the taste of freshly baked and packaged banana bread. Made Jamaican style.',
    quantity: 1,
    price: 100,
    image: 'assets/img/cart/bread.png' // Replace with the actual image URL
};
var fries = {
    name: 'Fries',
    description: 'Freshly made french fries goes with every meal',
    quantity: 1,
    price: 130,
    image: 'assets/img/cart/fries.png' // Replace with the actual image URL
};
var rolls = {
    name: 'Rolls',
    description: 'Enjoy the simple things in life like our freshly baked bread rolls.',
    quantity: 1,
    price: 50,
    image: 'assets/img/cart/rolls.png' // Replace with the actual image URL
};
var sandwichBiscuit = {
    name: 'Sandwich Biscuit',
    description: 'The taste speaks for itself.',
    quantity: 1,
    price: 65,
    image: 'assets/img/cart/biscuit.png' // Replace with the actual image URL
};
var boxDrink = {
    name: 'Box Drink',
    description: 'This refreshing beverage goes with every meal',
    quantity: 1,
    price: 120,
    image: 'assets/img/cart/boxjuice.png' // Replace with the actual image URL
};
var truJuice = {
    name: 'Tru Juice',
    description: 'This refreshing beverage goes with every meal',
    quantity: 1,
    price: 120,
    image: 'assets/img/cart/tru.png' // Replace with the actual image URL
};
var jerkedChicken = {
    name: 'Jerked Chicken',
    description: 'Pan jerked. REAL JAMAICAN STYLE',
    quantity: 1,
    price: 450,
    image: 'assets/img/cart/jerked.png' // Replace with the actual image URL
};
var bbqChicken = {
    name: 'BBQ Chicken',
    description: 'Savor the goodness of BBQ Chicken with a Jamaican Twist.',
    quantity: 1,
    price: 450,
    image: 'assets/img/cart/bbq.png' // Replace with the actual image URL
};
var friedChicken = {
    name: 'Fried Chicken',
    description: 'Sometimes, SIMPLICITY IS KEY',
    quantity: 1,
    price: 350,
    image: 'assets/img/cart/fried.png' // Replace with the actual image URL
};
var soup = {
    name: 'Soups',
    description: 'Warm your insides with a nice bowl/cup of soup.',
    quantity: 1,
    price: 500,
    image: 'assets/img/cart/soup.png' // Replace with the actual image URL
};
var porridges = {
    name: 'Porridges',
    description: 'What better way to start you day than with a bowl of porridge.',
    quantity: 1,
    price: 450,
    image: 'assets/img/cart/porridge.png' // Replace with the actual image URL
};
var riceAndPeas = {
    name: 'Rice and Peas',
    description: 'Enjoy a side of rice and peas to make your day brighter.',
    quantity: 1,
    price: 120,
    image: 'assets/img/cart/rice.png' // Replace with the actual image URL
};
var fritters = {
    name: 'Fritters',
    description: 'Enjoy a side saltfish fritters to taste the ocean.',
    quantity: 1,
    price: 120,
    image: 'assets/img/cart/fritters.png' // Replace with the actual image URL
};
var boiledFood = {
    name: 'Boiled Food',
    description: 'This is a Jamaican restaurant. Must I say more.',
    quantity: 1,
    price: 350,
    image: 'assets/img/cart/boiled.png' // Replace with the actual image URL
};

var coffee = {
    name: 'Coffee',
    description: 'Calm your nerves with a nice cup of hot and freshly made coffee.',
    quantity: 1,
    price: 150,
    image: 'assets/img/cart/coffee.png' // Replace with the actual image URL
};
var cookies = {
    name: 'Cookie',
    description: 'Sweet up your day with a freshly baked cookie.',
    quantity: 1,
    price: 100,
    image: 'assets/img/cart/cookie.png' // Replace with the actual image URL
};

var products = {
    'Patties': {
        name: 'Patties',
        description: 'Delicious patties made with love',
        quantity: 1,
        price: 250,
        image: 'assets/img/cart/patty.png'
    },
    'Meat Loaves': {
        name: 'Meat Loaves',
        description: 'Made fresh with quality beef.',
        quantity: 1,
        price: 390,
        image: 'assets/img/cart/meatloaf.png'
    },
    'Wata': {
        name: 'Wata',
        description: 'Stay hydrated with a bottle of WATA.',
        quantity: 1,
        price: 100,
        image: 'assets/img/cart/wata.png'
    },
    'Tea': {
        name: 'Tea',
        description: 'Calm your nerves with a nice cup of hot and freshly made tea.',
        quantity: 1,
        price: 150,
        image: 'assets/img/cart/tea.png'
    },
    'Cran Wata': {
        name: 'Cran Wata',
        description: 'Enjoy your meal with a bottle of Cran Water',
        quantity: 1,
        price: 130,
        image: 'assets/img/cart/cranwata.png'
    },
    'Banana Bread': {
        name: 'Banana Bread',
        description: 'Enjoy the taste of freshly baked and packaged banana bread. Made Jamaican style.',
        quantity: 1,
        price: 100,
        image: 'assets/img/cart/bread.png'
    },
    'Fries': {
        name: 'Fries',
        description: 'Freshly made french fries goes with every meal',
        quantity: 1,
        price: 130,
        image: 'assets/img/cart/fries.png'
    },
    'Rolls': {
        name: 'Rolls',
        description: 'Enjoy the simple things in life like our freshly baked bread rolls.',
        quantity: 1,
        price: 50,
        image: 'assets/img/cart/rolls.png'
    },
    'Sandwich Biscuit': {
        name: 'Sandwich Biscuit',
        description: 'The taste speaks for itself.',
        quantity: 1,
        price: 65,
        image: 'assets/img/cart/biscuit.png'
    },
    'Box Drink': {
        name: 'Box Drink',
        description: 'This refreshing beverage goes with every meal',
        quantity: 1,
        price: 120,
        image: 'assets/img/cart/boxjuice.png'
    },
    'Tru Juice': {
        name: 'Tru Juice',
        description: 'This refreshing beverage goes with every meal',
        quantity: 1,
        price: 120,
        image: 'assets/img/cart/tru.png'
    },
    'Jerked Chicken': {
        name: 'Jerked Chicken',
        description: 'Pan jerked. REAL JAMAICAN STYLE',
        quantity: 1,
        price: 450,
        image: 'assets/img/cart/jerked.png'
    },
    'BBQ Chicken': {
        name: 'BBQ Chicken',
        description: 'Savor the goodness of BBQ Chicken with a Jamaican Twist.',
        quantity: 1,
        price: 450,
        image: 'assets/img/cart/bbq.png'
    },
    'Fried Chicken': {
        name: 'Fried Chicken',
        description: 'Sometimes, SIMPLICITY IS KEY',
        quantity: 1,
        price: 350,
        image: 'assets/img/cart/friedchicken.png'
    },
    'Soups': {
        name: 'Soups',
        description: 'Warm your insides with a nice bowl/cup of soup.',
        quantity: 1,
        price: 500,
        image: 'assets/img/cart/soup.png'
    },
    'Porridges': {
        name: 'Porridges',
        description: 'What better way to start you day than with a bowl of porridge.',
        quantity: 1,
        price: 450,
        image: 'assets/img/cart/porridge.png'
    },
    'Rice and Peas': {
        name: 'Rice and Peas',
        description: 'Enjoy a side of rice and peas to make your day brighter.',
        quantity: 1,
        price: 120,
        image: 'assets/img/cart/rice.png'
    },
    'Fritters': {
        name: 'Fritters',
        description: 'Enjoy a side saltfish fritters to taste the ocean.',
        quantity: 1,
        price: 120,
        image: 'assets/img/cart/fritters.png'
    },
    'Boiled Food': {
        name: 'Boiled Food',
        description: 'This is a Jamaican restaurant. Must I say more.',
        quantity: 1,
        price: 350,
        image: 'assets/img/cart/boiled.png'
    },
    'Coffee': {
        name: 'Coffee',
        description: 'Calm your nerves with a nice cup of hot and freshly made coffee.',
        quantity: 1,
        price: 150,
        image: 'assets/img/cart/coffee.png'
    },
    'Cookies': {
        name: 'Cookies',
        description: 'Sweet up your day with a freshly baked cookie.',
        quantity: 1,
        price: 100,
        image: 'assets/img/cart/cookie.png'
    }
};

function quickAddToFriedChicken() {
    quickAddToCart('Fried Chicken', 1);
}

function quickAddToRiceAndPeas() {
    quickAddToCart('Rice and Peas', 1);
}

function quickAddToCart(productName, quantity) {
    if (products.hasOwnProperty(productName)) {
        // Retrieve the product details
        var productDetails = products[productName];

        // Extract the price from the product details
        var price = parseFloat(productDetails.price);

        var imageUrl = productDetails.image;
        var total = price * quantity;

        // Check if the product info exists
        var cartItem = {
            name: productName,
            quantity: quantity,
            price: price,
            total: total,
            image: imageUrl,
        };

        // Check if the cart is already in localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the item to the cart
        cart.push(cartItem);

        // Update the localStorage with the new cart
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`Added to Cart!\nQuantity: ${quantity}`);
        productPopup.style.display = 'none'; // Adjust based on your actual popup implementation
    }
}

// Example usage:
// You can call these functions when you want to quickly add items to the cart
// quickAddToFriedChicken();
// quickAddToRiceAndPeas();


// Close product popup
function closeProductPopup() {
    document.getElementById('product-popup').style.display = 'none';
}

function calculateTotal() {
    var quantity = document.getElementById('quantity-input').value;
    var price = parseFloat(patties.price); // Use the current product's price
    var total = quantity * price;
    document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
    console.log(total)
}


function addToCart() {
    var productName = document.getElementById('popup-product-name').innerText;
    if (products.hasOwnProperty(productName)) {
        // Retrieve the product details
        var productDetails = products[productName];

        // Extract the price from the product details
        var price = parseFloat(productDetails.price);
    }
    console.log(price);
    var imageUrl = document.getElementById('popup-img').src;
    var quantity = parseInt(document.getElementById('quantity-input').value, 10);
    var total = price * quantity;
    console.log(total)


    // Check if the product info exists
    var cartItem = {
        name: productName,
        quantity: quantity,
        price: price,
        total: total,
        image: imageUrl,
    };

    // Check if the cart is already in localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the item to the cart
    cart.push(cartItem);

    // Update the localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added to Cart!\nQuantity: ${quantity}`);
    productPopup.style.display = 'none';
}



var productPopup = document.getElementById('product-popup');
var span = document.getElementById('close');



window.onclick = function(event) {
    if (event.target == productPopup) {
        productPopup.style.display = 'none';
    }
}

// cart.js

document.addEventListener("DOMContentLoaded", function () {
    var viewCartBtn = document.getElementById("viewCartBtn");

    viewCartBtn.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "cart-page.html";
    });
});


(function($) {
    'use strict';
    
    /* Cart Currency Search toggle active */
    $(".header-cart a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.shopping-cart-content').slideToggle('medium');
    })
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.transparent-bar');
    var win = $(window);

    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    
    /* Slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* Best selling active */
    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    /* Best selling active */
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1100: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
    
    
    
    /* Testimonial active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* Brand logo active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 5,
        margin: 80,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            480: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 4,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 100,
            },
            1200: {
                items: 5
            }
        }
    })
    
    
    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });
    
    
    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 0,
            max: 1200,
            values: [0, 800],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
    
	
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-right"></i></span>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    /*-------------------------------------
        Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $('.thumb-menu a').on('click', function() {
        $('.thumb-menu a').removeClass('active');
    })
    
    
    /*---------------------
    shop grid list
    --------------------- */
    $('.view-mode li a').on('click', function() {
        var $proStyle = $(this).data('view');
        $('.view-mode li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.product-view').removeClass('product-grid product-list').addClass($proStyle);
    })
    
    /* blog gallery slider */
    $('.blog-gallery-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });
    
    
    $('.testimonial-2-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            992: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });
    
    
    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    

})(jQuery);