import Profile from "./Profile/profile";
import Statistics from "./Statistics/statistics";
import FriendList from "./FriendList/FriendList";
import TransactionsHistory from "./TransactionsHistory/transactionsHistory";
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics
        title="upload stats"
        stats={data}
      />

      <FriendList
        friends={friends}
      />

      <TransactionsHistory
        items={transactions}
      />
    </div>
  );
};
