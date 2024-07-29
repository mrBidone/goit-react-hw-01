import FriendsListItem from "../FriendListItem/FriendsListItem";
import styles from "./FriedsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={styles.friendsListItem} key={id}>
            <FriendsListItem avatar={avatar} isOnline={isOnline} name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
