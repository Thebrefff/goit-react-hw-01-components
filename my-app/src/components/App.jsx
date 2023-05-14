import user from '../data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';

import { Profile } from './profile/Profile';
// import { Statistics } from 'components/statistics/Statistics';
// import { FriendList } from 'components/friendList/FriendList';
// import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        listStyle: 'none',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* <Statistics title="Upload stats" stats={data} /> */}

      {/* <FriendList friends={friends} /> */}

      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
