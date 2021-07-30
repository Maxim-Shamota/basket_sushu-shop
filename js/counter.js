window.addEventListener('click', (e) => {
    //создаю переменную для счетчика
    let counter;

    //проверяем что клик сторого по кнопкам плюс или минус, чтобы не было ошибок
    if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus") {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
    } else if (e.target.dataset.action === "minus") {
        //делаем проверку на количество товаров, чтобы были больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});