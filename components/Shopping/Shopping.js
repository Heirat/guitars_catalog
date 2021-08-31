class Shopping {
    deleteFromCart(id) {
        localStorageUtil.editProducts(id);
        shoppingPage.render();
        productsPage.render();
    }

    clear() {
        ROOT_SHOPPING.innerHTML = '';
    }


    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.includes(id)) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">🎸 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} RUB</td>
                        <td><button class="shopping-element__delete" onclick="shoppingPage.deleteFromCart('${id}');"></button></td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.clear();">

                </div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💰 Total</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} RUB</td>
                    </tr>
                </table>
            </div>
        `
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
