console.log('hello')

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]}
  ];
// loop over array




const mainEl = document.querySelector('main');
mainEl.classList.add('flex-ctr');
const topMenuEl = document.querySelector('top-menu');
topMenuEl.classList.add('flex-around'); 

const subMenu = document.querySelector(subMenuEl);
subMenuEl.classList.add('flex-around');
const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function(evt) {

  if (target.tagName === 'A') {
    
    console.log('An <a> element was clicked:', target.textContent);
  }
});



var showingSubMenu = false;











