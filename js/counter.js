window.addEventListener('click', (e) => {
    //создаю переменную для счетчика
    let counter;

    //проверяю что клик сторого по кнопкам плюс или минус, чтобы не было ошибок
    if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus") {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
    } else if (e.target.dataset.action === "minus") {
        
        //делаю проверку на количество товаров, чтобы были больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) { //проверка на товар в корзине
            // удаляю товар из корзины
            e.target.closest('.cart-item').remove();

            //отображение статуса корзины
            toggleCardStatus();  

            //пересчет общей стоимости корзины
            calcCartPriceAndDelivery();
        }

    }

    //проверяю клик на + или - внутри корзины
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        //пересчет общей стоимости корзины
        calcCartPriceAndDelivery();
    }
});