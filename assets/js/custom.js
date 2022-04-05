(function () {
    setTimeout(() => {
        loadPageContent("homepage")
    }, 500);
})();

function loadPageContent(page) {
    if(page === "homepage") {
        insertSearchBar();
        insertTabContainer();
        insertPromotionsContainer();
        insertFilterBar();
        insertProducts();
        insertInnerProducts();
    }
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
                    <div class="product-bottom-details">
                        <div class="btn">ADD</div>
                    </div>
                </div>
            </div>
        `)
    });
}

function insertFilterBar() {
    if(!($("#product_header_bar").is(":visible"))) {
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
                        <div class="product-bottom-details">
                            <div class="btn">ADD</div>
                        </div>
                    </div>
                </div>
            `);
        });
    });
}


function switchTabs(id) {
    let containerId = "tab_grid_item" + id;
    setTimeout(() => {
        let classlist = Array.from(document.getElementById(containerId).classList);
        if (classlist.includes("active")) {
            console.log("ashish")
        } else {

        }
    }, 100);

}