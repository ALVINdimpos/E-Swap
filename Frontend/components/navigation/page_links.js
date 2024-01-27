export const specific_page = (userId_, route, addition) => `${userId_}${route}/${addition}`

export const cartPages = [
  { path: '/cart', name: 'List', linkText: 'Cart List', icon: 'fa fa-car' },
  { path: '/cart/add', name: 'Add', linkText: 'Add Cart', icon: 'fa fa-car' },
];

export const categoryPages = [
  { path: '/categories', name: 'List', linkText: 'Categories List', icon: 'fa fa-car' },
  { path: '/categories/add', name: 'Add', linkText: 'Categories Add', icon: 'fa fa-car' },
];

export const purchasePages = [
  { path: '/sell', name: 'List', linkText: 'Sell List', icon: 'fa fa-calendar' },
];


export const AppPages = [
  { path: '/auth/login', name: 'Login', linkText: 'Login', icon: 'fa fa-sign-in-alt' },
  { path: '/auth/signup', name: 'Signup', linkText: 'Signup', icon: 'fa fa-sign-in-alt' },
  { path: '', name: 'Home', linkText: 'Home', icon: 'fa fa-home' },
  { path: '/categories', name: 'Categories', linkText: 'Categories', icon: 'fa fa-list-alt', submenu: categoryPages },
  { path: '/sell', name: 'Sell', linkText: 'Sell', icon: 'fa fa-upload', submenu: purchasePages },
  { path: '/cart', name: 'Cart', linkText: 'Cart', icon: 'fa fa-shopping-cart', submenu: cartPages },
  { path: '/sellerItems', name: 'My Items', linkText: 'My Items', icon: "fa fa-shopping-cart"},
  { path: '/profile', name: 'Profile', linkText: 'My profile', icon: 'fa fa-user' },
];

export const SellerPages = AppPages.filter(page =>
  [
    'Home', 'Sell', 'My Items', 'Profile'
  ].includes(page.name)
)

export const BuyerPages = AppPages.filter(page =>
  [
    'Home', 'Categories', 'Cart', 'Profile'
  ].includes(page.name)
)

export const FooterPages = {
  'buyer':
    AppPages.filter(page =>
      BuyerPages.some(thePage => thePage.name === page.name)
    ),
  'seller':
    AppPages.filter(page =>
      SellerPages.some(thePage => thePage.name === page.name)
    ),
};

export const menuPages = {
  'buyer': [
    { path: '/settings', name: 'Settings', linkText: 'Settings', icon: 'fa fa-cog' },
    { path: '/wishlist', name: 'Wishlist', linkText: 'Wishlist', icon: 'fa fa-cog' },
    { path: '/account', name: 'Account', linkText: 'Account', icon: 'fa fa-cog' },
    { path: '/newitems', name: 'NewItems', linkText: 'New items', icon: 'fa fa-cog' },
    { path: '/terms_policies', name: 'Terms_Policies', linkText: 'terms/policies', icon: 'fa fa-cog' },
    { path: '/logout', name: 'Logout', linkText: 'Logout', icon: 'fa fa-cog' },
    { path: '/help', name: 'Help', linkText: 'Help', icon: 'fa fa-cog' },
  ],
  'seller': [
    { path: '/settings', name: 'Settings', linkText: 'Settings', icon: 'fa fa-cog' },
    { path: '/wishlist', name: 'Wishlist', linkText: 'Wishlist', icon: 'fa fa-cog' },
    { path: '/account', name: 'Account', linkText: 'Account', icon: 'fa fa-cog' },
    { path: '/newitems', name: 'NewItems', linkText: 'New items', icon: 'fa fa-cog' },
    { path: '/terms_policies', name: 'Terms_Policies', linkText: 'terms/policies', icon: 'fa fa-cog' },
    { path: '/logout', name: 'Logout', linkText: 'Logout', icon: 'fa fa-cog' },
    { path: '/help', name: 'Help', linkText: 'Help', icon: 'fa fa-cog' },
  ]
};
