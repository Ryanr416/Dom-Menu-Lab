console.log('hello')

// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

const mainEl = document.querySelector('main');
mainEl.classList.add('flex-ctr');
const topMenuEl = document.querySelector('top-menu');
topMenuEl.classList.add('flex-around');



