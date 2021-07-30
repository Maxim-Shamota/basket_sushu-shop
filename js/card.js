const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', (e) => {
	if (e.target.hasAttribute('data-cart')) {
		const card = e.target.closest('.card');

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText
		}


		const itemInCard = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		//если товар есть в корзине
		if (itemInCard) {
			const counterElement = itemInCard.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			//если товара нет в корзине
			const cardItemHtml = `
            <div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>
       `;

			cartWrapper.insertAdjacentHTML('beforeend', cardItemHtml);
		}

		//сбрасываем счетчик добавленного товара на 1
		card.querySelector('[data-counter]').innerText = 1;
	}
});