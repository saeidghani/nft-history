const sortByItems = [
  { key: 0, title: 'Sort By', value: '' },
  { key: 1, title: 'Recently Added', value: 'recentlyAdded' },
  { key: 2, title: 'Most Liked', value: 'mostLiked' },
  { key: 3, title: 'Cheapest', value: 'cheapest' },
  { key: 4, title: 'Highest Price', value: 'highestPrice' },
];

const showTypeItems = [
  { key: 1, title: 'Show All', value: 'showAll' },
  { key: 2, title: 'Auction', value: 'auction' },
  { key: 3, title: 'Fixed Price', value: 'fixedPrice' },
];

const filterItems = [
  { key: 1, title: 'Unsold', value: 'unsold' },
  { key: 2, title: 'Sold', value: 'sold' },
  { key: 3, title: 'Packages', value: 'packages' },
];

const bidCards = [
  {
    key: 2,
    details: {
      status: 'Place a bid',
      date: '20 July 1969',
      price: '299.49 HSY',
      stars: 22,
      comments: 22,
      likes: 20,
      calendar: {
        month: 'FEB',
        day: 23,
      },
    },
  },
  {
    key: 3,
    details: {
      status: 'Place a bid',
      date: '20 July 1969',
      price: '299.49 HSY',
      stars: 22,
      comments: 22,
      likes: 20,
      calendar: {
        month: 'FEB',
        day: 23,
      },
    },
  },
  {
    key: 4,
    details: {
      status: 'On Auction',
      date: '20 July 1969',
      price: '299.49 HSY',
      stars: 22,
      comments: 22,
      likes: 20,
      timer: {
        hour: 6,
        minute: 35,
        second: 12,
        status: 'Till End',
      },
    },
  },
  {
    key: 5,
    details: {
      status: 'On Auction',
      date: '20 July 1969',
      price: '299.49 HSY',
      stars: 22,
      comments: 22,
      likes: 20,
      timer: {
        hour: 6,
        minute: 35,
        second: 12,
        status: 'Till End',
      },
    },
  },
  {
    key: 7,
    details: {
      status: 'Place a bid',
      date: '20 July 1969',
      price: '299.49 HSY',
      stars: 22,
      comments: 22,
      likes: 20,
      calendar: {
        month: 'FEB',
        day: 23,
      },
    },
  },
  {
    key: 6,
    details: {
      status: 'On Auction',
      date: '20 July 1969',
      price: '299.49 HSY',
      stars: 22,
      comments: 22,
      likes: 20,
      timer: {
        hour: 6,
        minute: 35,
        second: 12,
        status: 'Till End',
      },
    },
  },
];

export { sortByItems, showTypeItems, filterItems, bidCards };
