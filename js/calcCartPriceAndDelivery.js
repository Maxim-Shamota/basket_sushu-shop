function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;

    cartItems.forEach((item) => {
        const amountEl = parseInt(item.querySelector('[data-counter]').innerText);
        const priceEl = parseInt(item.querySelector('.price__currency').innerText);

        const currentPrice = amountEl * priceEl;
        totalPrice += currentPrice;
    });

    //отображаю стоимость на странице в корзине
    totalPriceEl.innerText = totalPrice;

    //скрываю/показываю блок со стоимостью доставки
    if (totalPrice > 0) {
        cartDeliveryEl.classList.remove('none');
    } else {
        cartDeliveryEl.classList.add('none');
    }

    //указываю стоимость доставки
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
}