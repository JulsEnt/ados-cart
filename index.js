const open = document.querySelector('#ini');
const en = document.querySelector('#in');
const boy = document.querySelector('#boy');
const girl = document.querySelector('#quimi');
const opayii = document.querySelector('#bini');
const cont = document.querySelector('#hini');
const icon = document.querySelector('#icon');
const ico = document.querySelector('#ico');
const keepshop = document.querySelector('#keepshop');
const checkout = document.querySelector('#checkout');
const checkoutcontainer = document.querySelector('#checkout-container');
const back = document.querySelector('#back');
const contain = document.querySelector('#container')
const close = document.querySelector('#close');
const review = document.querySelector('#k');
const order = document.querySelector('#ord');
const  chk = document.querySelector('#princess')
const bkk = document.querySelector('bkk')

open.addEventListener('click', ()=> {
    cont.classList.add('show');
}
);
opayii.addEventListener('click', ()=> {
    cont.classList.add('show');
}
);
en.addEventListener('click', ()=> {
    cont.classList.add('show');
}
);
boy.addEventListener('click', ()=> {
    cont.classList.add('show');
}
);
quimi.addEventListener('click', ()=> {
    cont.classList.add('show');
}
);
close.addEventListener('click', ()=> {
    cont.classList.remove('show');
}
);

icon.addEventListener('click', ()=> {
    container.classList.add('show');
}
);
ico.addEventListener('click', ()=> {
    container.classList.remove('show');
}
);
keepshop.addEventListener('click', ()=> {
    container.classList.remove('show');
}
);

checkout.addEventListener('click', ()=> {
    checkoutcontainer.classList.add('show');
}
);
back.addEventListener('click', ()=> {
    checkoutcontainer.classList.remove('show');
}
); 

review.addEventListener('click', () => {
    order.classList.add('show')
});