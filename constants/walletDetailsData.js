const historyItems = [
  {
    key: 1,
    src: '/images/avatar3.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">2 days ago</div>,
  },
  {
    key: 2,
    src: '/images/avatar4.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">21 Jan,2020</div>,
  },
  {
    key: 3,
    src: '/images/avatar5.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">12 Dec, 2020</div>,
  },
  {
    key: 4,
    src: '/images/avatar6.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">6 Dec, 2020</div>,
  },
];
const offersItems = [
  {
    key: 1,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '2 days ago',
  },
  {
    key: 2,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '21 Jan,2020',
  },
  {
    key: 3,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '12 Dec, 2020',
  },
  {
    key: 4,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '6 Dec, 2020',
  },
];
const claimingItems = [
  { key: 1, status: 'Claim', timer: '6h 35m 12s', timerStatus: 'Till End', date: '2 days ago' },
  { key: 2, status: 'Claimed', date: '21 Jan,2020' },
  { key: 3, status: 'Lost', date: '12 Dec, 2020' },
  { key: 4, status: 'Claimed', date: '6 Dec, 2020' },
];

export { historyItems, offersItems, claimingItems };
