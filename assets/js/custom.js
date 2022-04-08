(function () {
    setTimeout(() => {
        loadPageContent("homepage")
    }, 500);
})();

function loadPageContent(page) {
    if (page === "homepage") {
        insertSearchBar();
        insertTabContainer();
        insertPromotionsContainer();
        insertOrderHistoryProducts();
        insertFavouriteProducts();
        insertFilterBar();
        insertProducts();
        insertInnerProducts();
    }


    $('.product-bottom-details').click(function () {
        addProducts(this)
    });

    $('.counter__minus').click(function () {
        updateCounter(this, "minus");
    });

    $('.counter__plus').click(function () {
        updateCounter(this, "add");
    });

    $('.item-drop').click(function () {
        updateDropDownMenu(this);
    });

    $('#search_input').on("input", function () {
        processChange(this);
    });
}

function insertSearchBar() {
    document.getElementById("search_input").placeholder = config.search.placeholder;
}

function insertTabContainer() {
    $("#tab_container").prepend(`<p class="title">${config.tabs_section.tabs_title}</p>`)
    config.tabs_section.tabs.map((val, tabNum) => {
        let classname = val.active ? "'grid__item active'" : "'grid__item'";
        $("#griddy").append(`
            <div id=${"tab_grid_item" + tabNum} class=${classname} onclick="switchTabs(${tabNum})">
                <div class="icon__wrapper">
                    <img class="icon" src=${val.tab_icon} alt="Promotions & Products" />
                </div>
                <div class="detail">${val.tab_description}</div>
            </div>
        `)
    });
}

function removeTabContainer(id) {
    document.getElementById(id).remove();
}

function insertPromotionsContainer() {
    $("#promotions_container").prepend(`<p class="products__title">${config.promotions.promotions_title}</p>`)
    config.promotions.products.map((promotion) => {
        let isdisabled = promotion.quantity_available ? false : true;
        let btnName = isdisabled ? "Out of stock" : "ADD";
        $("#promotions_products_container").append(`
            <div class="product-card">
                <div class="product-tumb">
                    <div class="icon"></div>
                    <img class="img__wrapper" src=${promotion.icon} alt="">
                </div>
                <div class="product__details">
                    <div class="product__text__wrapper">
                        <p class="product__name">${promotion.name}</p>
                        <p class="product__quantity">${promotion.description}</p>
                        <p class="product__price">${promotion.price}</p>
                    </div>
                    <div isdisabled=${isdisabled} class="product-bottom-details" id="product-bottom-details" product="${encodeURIComponent(JSON.stringify(promotion))}">
                        <div class="btn" isdisabled=${isdisabled}>${btnName}</div>
                    </div>
                    <div class="counter__wrapper hide">
                        <div class="counter__container">
                            <div class="counter__box__container">
                                <div class="counter__minus" id="minus" product="${encodeURIComponent(JSON.stringify(promotion))}">
                                    <img src="/assets/images/png/minus.png" />
                                </div>
                            </div>
                        
                            <input id="counter_input" class="counter__input home" type="text" value="1" size="1" maxlength="2" />
                            <div class="counter__box__container">
                                <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify(promotion))}">
                                    <img src="/assets/images/png/plus.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    });
}

function insertOrderHistoryProducts() {
    $("#orderhistory_container").prepend(`<p class="products__title">${config.recent_order.title}</p>`)
    config.recent_order.products.map((product) => {
        $("#orderhistory_container__inner").append(`
            
            <div class="order__history__wrapper">
                <div class="history__details">
                    <div class="date">Dec 14, 2021</div>
                    <div class="price">$14.95</div>
                </div>
                <div class="order__section">
                    <div class="details__section">
                        <div class="name">${product.name}</div>
                        <div class="units">SKU:&nbsp;${product.unit}</div>
                        <div class="discount__detail">${product.discount_detail}</div>
                        <div class="discount__detail__bar"><div class="description">${product.discount_description}</div><span>read more</span></div>
                    </div>
                    <div class="product__counter">
                        <div class="icon__wrapper">
                            <img src="/assets/images/png/product.png" />
                        </div>

                        <div class="counter__wrapper">
                            <div class="counter__container checkout">
                                <div class="counter__box__container">
                                    <div class="counter__minus" id="minus" product="${encodeURIComponent(JSON.stringify(product))}" onclick="updateCounterDataFromCheckout('minus')">
                                        <img src="/assets/images/png/minus.png" />
                                    </div>
                                </div>
                            
                                <input id="counter_input" class="counter__input" type="text" value="1" size="1" maxlength="2" />
                                <div class="counter__box__container">
                                    <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify(product))}" onclick="updateCounterDataFromCheckout('add')">
                                        <img src="/assets/images/png/plus.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    });
}

function insertFavouriteProducts() {
    config.favourites.items.map((item) => {
        let isdisabled = item.quantity_available ? false : true;
        let btnName = isdisabled ? "Out of stock" : "ADD";
        $("#favourites__container").append(`
            <div class="product-card">
                <div class="product-tumb favourite">
                    <div class="innerbox favourite">
                        <embed src=${item.icon} />
                    </div>
                </div>
                <div class="product__details inner">
                    <div class="product__text__wrapper">
                        <p class="product__name">${item.name}</p>
                        <p class="product__quantity">${item.description}</p>
                        <p class="product__price">${item.price}</p>
                    </div>
                    <div isdisabled=${isdisabled} class="product-bottom-details" product="${encodeURIComponent(JSON.stringify(item))}">
                        <div class="btn" isdisabled=${isdisabled}>${btnName}</div>
                    </div>
                    <div class="counter__wrapper hide">
                        <div class="counter__container">
                            <div class="counter__box__container">
                                <div class="counter__minus" id="minus">
                                    <img src="/assets/images/png/minus.png" product="${encodeURIComponent(JSON.stringify(item))}" />
                                </div>
                            </div>
                        
                            <input id="counter_input" class="counter__input home" type="text" value="1" size="1" maxlength="2" />
                            <div class="counter__box__container">
                                <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify(item))}">
                                    <img src="/assets/images/png/plus.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

function insertFilterBar() {
    if (!($("#product_header_bar").is(":visible"))) {
        $("#product_header_bar").css('display', 'flex');
    }
    $("#product_header_bar").prepend(`<p class="title">${config.filterbar.title}</p>`)
    config.filterbar.menu.map((item) => {
        $("#dropdown_items").append(`<li class="item-drop">${item.name}</li>`);
    });
}

function insertProducts() {
    config.products.map((product, index) => {
        $("#product_item_container").append(`
            <div class="faq-drawer">
                <input class="faq-drawer__trigger" id=${"faq-drawer" + "-" + index} type="checkbox" />
                <label class="faq-drawer__title" for=${"faq-drawer" + "-" + index}>
                    ${product.volume}
                    <div class="product__bar__icon"><img src=${product.icon} /></div>
                </label>
                <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                        <div class="products__container inner" id=${"products_container_inner" + index}>
                          
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

function insertInnerProducts() {
    config.products.map((product, index) => {
        let listitem = "#products_container_inner" + index;
        product.items.map((item) => {
            let isdisabled = item.quantity_available ? false : true;
            let btnName = isdisabled ? "Out of stock" : "ADD";
            $(listitem).append(`
                <div class="product-card">
                    <div class="product-tumb inner">
                        <div class="innerbox">
                            <img class="img__wrapper" src=${item.icon} alt="">
                        </div>
                    </div>
                    <div class="product__details inner">
                        <div class="product__text__wrapper">
                            <p class="product__name">${item.name}</p>
                            <p class="product__quantity">${item.description}</p>
                            <p class="product__price">${item.price}</p>
                        </div>
                        <div isdisabled=${isdisabled} class="product-bottom-details" product="${encodeURIComponent(JSON.stringify(item))}">
                            <div class="btn inner" isdisabled=${isdisabled}>${btnName}</div>
                        </div>
                        <div class="counter__wrapper hide">
                            <div class="counter__container">
                                <div class="counter__box__container">
                                    <div class="counter__minus" id="minus">
                                        <img src="/assets/images/png/minus.png" product="${encodeURIComponent(JSON.stringify(item))}" />
                                    </div>
                                </div>
                            
                                <input id="counter_input" class="counter__input home" type="text" value="1" size="1" maxlength="2" />
                                <div class="counter__box__container">
                                    <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify(item))}">
                                        <img src="/assets/images/png/plus.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    });
}

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function saveInput(node) {
    let filteredData = getAllProducts.map((product) => {
        let data = product.keywords.map((words) => {
            return words.includes(node.value) ? product : false;
        })
        if (!data.includes(false)) return data;
    });

    let finalData = filteredData.filter(function (element) {
        return element !== undefined;
    });
    searchProducts(finalData)
}


let processChange = debounce((node) => saveInput(node));

function searchProducts(node) {
    $("#search_product_box").fadeIn().show();
    $(".product.searchproducts").remove();
    config.products[0].items.map((item) => {
        $("#search_product_wrap").append(`
            <div class="product searchproducts">
                <div class="left__wrapper">
                    <div class="name">${item.name}</div>
                    <div class="description">${item.description}</div>
                    <div class="price">$${item.price}</div>
                </div>
                <div class="right__wrapper">
                    <div class="product-bottom-details" product="${encodeURIComponent(JSON.stringify(item))}">
                        <div class="btn">ADD</div>
                    </div>
                    <div class="counter__wrapper hide">
                        <div class="counter__container">
                            <div class="counter__box__container">
                                <div class="counter__minus" id="minus">
                                    <img src="/assets/images/png/minus.png" product="${encodeURIComponent(JSON.stringify(item))}" />
                                </div>
                            </div>
                        
                            <input id="counter_input" class="counter__input home" type="text" value="1" size="1" maxlength="2" />
                            <div class="counter__box__container">
                                <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify(item))}">
                                    <img src="/assets/images/png/plus.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}


function switchTabs(id) {
    event.preventDefault();
    let siblings = $(event.target).siblings();
    let parsedSiblings = [...siblings]
    parsedSiblings.forEach(ele => {
        $(ele).removeClass("active");
    });

    let gridItem = [...$(`.grid__item`)];

    console.log(gridItem)

    gridItem.map(item => {
        $(item).removeClass("active");
        $("#promotions_products_container").hide();
        $("#promotions_container").hide();
        $("#product_wrapper").hide();
        $("#orderhistory_container").hide();
    })

    switch (id) {
        case 0:
            $(`#tab_grid_item${id}`).toggleClass("active");
            $("#product_wrapper").show();
            $("#promotions_container").show();
            $("#promotions_products_container").show();
            break;
        case 1:
            $(`#tab_grid_item${id}`).toggleClass("active");
            $("#promotions_container").hide();
            $("#product_wrapper").show();
            break;
        case 2:
            $(`#tab_grid_item${id}`).toggleClass("active");
            $("#promotions_products_container").hide();
            $("#promotions_container").hide();
            $("#product_wrapper").hide();
            $("#orderhistory_container").show();
            break;
        default:
            break;
    }
}



function addProducts(quantityInput) {
    let siblingWrapper = $(quantityInput).siblings(".counter__wrapper");
    let productData = $(quantityInput).attr("product");
    let decodedProductData = JSON.parse(decodeURIComponent(productData));
    $(quantityInput).hide();
    $(siblingWrapper).show();
    let numberCircleCount = $("#numberCircle").attr("value");
    let parseCount = Number(numberCircleCount)
    let updatedValue = parseCount + 1;
    $("#numberCircle").attr("value", updatedValue);
    $("#numberCircle").text(updatedValue);
    // checkoutData.push(decodedProductData);
    updateCheckoutCartData(decodedProductData, "add");
}


function updateCounter(counterInput, type) {
    let siblingWrapper = $(counterInput).parent().siblings(".counter__input");
    if (type === "add") {
        var $input = $(siblingWrapper);
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        let numberCircleCount = $("#numberCircle").attr("value");
        let parseCount = Number(numberCircleCount)
        let updatedValue = parseCount + 1;
        $("#numberCircle").attr("value", updatedValue);
        $("#numberCircle").text(updatedValue);
        let productData = $(counterInput).attr("product");
        let decodedProductData = JSON.parse(decodeURIComponent(productData));
        // checkoutData.push(decodedProductData);
        updateCheckoutCartData(decodedProductData, "add");
        return false;
    }

    if (type === "minus") {
        var $input = $(siblingWrapper);
        var count = parseInt($input.val()) - 1;
        if(count >= 0) {
            console.log("aaaaaaa")
            
            
            if(count == 0) {
                let parentAddWrapper = $(counterInput).parent().parent().parent();
                let siblingAddWrapper = $(counterInput).parent().parent().parent().siblings(".product-bottom-details");
                $(parentAddWrapper).hide();
                $(siblingAddWrapper).show();
            } else {
                $input.val(count);
                $input.change();
                let numberCircleCount = $("#numberCircle").attr("value");
                let parseCount = Number(numberCircleCount)
                let updatedValue = parseCount - 1;
                $("#numberCircle").attr("value", updatedValue);
                $("#numberCircle").text(updatedValue);
            }
            let productData = $(counterInput).attr("product");
            let decodedProductData = JSON.parse(decodeURIComponent(productData));
            updateCheckoutCartData(decodedProductData, "minus");
            return false;
        }
        count = count < 1 ? 0 : count;
       /*  let parentAddWrapper = $(counterInput).parent().parent().parent();
        let siblingAddWrapper = $(counterInput).parent().parent().parent().siblings(".product-bottom-details");
        $(parentAddWrapper).hide();
        $(siblingAddWrapper).show(); */
    }
}

function updateDropDownMenu(dpItem) {
    $("#dpValue").text($(dpItem).text())
}

function updateCheckoutCartData(data, type) {
    console.log(cartData);
    console.log("1.0", data);
    if(Object.keys(cartData).length == 0) {
        // cart[data.sku] = 1;
        cartData[data.sku] = {
            "product_data" : data,
            "quantity": 1 
        }
        console.log("1.0 i.0", cartData);
        // return;
    }

    for (const key in cartData) {
        if(data.sku === key) {
            console.log("1.1", key);
            let q = cartData[key]["quantity"];
            console.log("1.2", q);
            // cart[key] = q + 1;
            if(type === "add") {
                cartData[key] = {
                    "product_data" : data,
                    "quantity": q + 1 
                }
            }

            if(type === "minus") {
                cartData[key] = {
                    "product_data" : data,
                    "quantity": q - 1 
                }
            }
        } else {
            console.log("ashish ", data.sku);
            if(!cartData[data.sku]) {
                // cart[data.sku] = 1;
                cartData[data.sku] = {
                    "product_data" : data,
                    "quantity": 1 
                }
            }
        }
        
    }
    console.log("1.3", cartData);
    processQ(cartData, data.sku);
}

// function updateCheckoutCartData(data, type) {
//     // console.log("data", data);
//     console.log("cart data 1.0", cartData);

//     if(Object.keys(cartData).length !== 0) {
//         for (const key in cartData) {
//             if(cartData[key]?.["pr"]?.["sku"] === data.sku) {
//                 console.log("cart data 1.1", data.sku)
//                 if(type === "add") {
//                     console.log("cart data 1.2", cartData[key]["quantity"])
//                     console.log("cart data 1.3", cartData[key])
//                     cartData[key]["quantity"] = data.quantity + 1;
//                     cartData[key]["pr"]["quantity"] = cartData[key]["quantity"];
//                 } else if(type === "minus") {
//                     console.log("cart data 1.4")
//                     cartData[key]["quantity"] = cartData[key]["quantity"] - 1;
//                     cartData[key]["pr"]["quantity"] = cartData[key]["quantity"];
//                     if(cartData[key]["quantity"] == 0) {
//                         cartData = {};
//                     }
//                 }
//             } else {
//                 console.log("cart data 1.5")
//                 data.quantity = 1;
//                 cartData[data.sku] = {
//                     "pr" : data,
//                     "quantity": 1 
//                 }
//             }
//         }
//     } else {
//         console.log("cart data 1.6")
//         if (type === "add") {
//             data.quantity = 1;
//             cartData[data.sku] = {
//                 "pr" : data,
//                 "quantity": 1 
//             }
//         } else {
//             data.quantity = 0;
//             cartData[data.sku] = {
//                 "pr" : {},
//                 "quantity": 0 
//             }
//         }
        
//     }
//     console.log("cart data 2", cartData);
//     return cartData;
// }