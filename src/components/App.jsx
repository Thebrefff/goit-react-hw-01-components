import user from '../../my-app/src/data/user.json';
import data from '../../my-app/src/data/data.json';
import friends from '../../my-app/src/data/friends.json';
import transactions from '../../my-app/src/data/transactions.json';

import { Profile } from '../../my-app/src/components/profile/Profile';
import { Statistics } from '../../my-app/src/components/statistics/Statistics';
import { FriendList } from '../../my-app/src/components/friendList/FriendList';
import { TransactionHistory } from '../../my-app/src/components/transactionHistory/TransactionHistory';

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

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
