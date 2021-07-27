export default {
  home: {
    index: '/',
  },
  notifications: {
    index: '/notifications',
    settings: '/notifications/settings',
  },
  account: {
    index: '/account',
    followers: '/account/followers',
    edit: '/account/edit',
  },
  drops: {
    index: '/drops',
  },
  marketPlace: {
    index: '/market-place',
  },
  walletBalance: {
    index: '/wallet-balance',
    details: '/wallet-balance/details',
  },
  auctions: {
    edit(id = 'id') {
      return `/auctions/edit`;
    },
    view(id = 'id') {
      return `/auctions/${id}`;
    },
  },
  upload: '/upload',
};
