let g;
listBlock.addEventListener('click', function (event) {
    if (event.target.className == 'list-block__text') {
        // for (let value of listBlockText) {

        // }
        // console.log('text');
        console.log((event.target.innerText));
        // console.log((console.dir(event.innerText)));
        mainObj.forEach(function (z, num) {
            if (z == event.target.innerText) {
                console.log(num);
                g = num;
                
            }
        })
        // inputCloseElem.classList.add('input__main__check__close__active');
        inputCloseElem.forEach(function (c, n) {
            // c[n].classList.add('input__main__check__close__active');
                // c[n].classList.remove('input__main__check__close');
            // if (num == n) {
                
            // }
            console.log(c);
        })
    }
})

