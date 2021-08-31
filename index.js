function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];


fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() => {
            spinnerPage.clear();
            render();
        }, 1000);


    })
    .catch(err => {
        CATALOG = CATALOG_CONST;
        setTimeout(() => {
            spinnerPage.clear();
            render();
        }, 1000);
    });


