import FriendsList from "./components/FriendsList/FriendsList";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
