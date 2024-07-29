import clsx from "clsx";
import styles from "./FriendsListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const classNames = [styles.userStatus, isOnline];
  if (isOnline) {
    classNames.push(styles.statusOn);
  }
  return (
    <div>
      <img className={styles.userPic} src={avatar} alt="Avatar" width="48" />
      <p className={styles.userName}>{name}</p>
      <p className={clsx(styles.userStatus, isOnline && styles.statusOn)}>
        {!isOnline ? "Offline" : "Online"}
      </p>
    </div>
  );
};

export default FriendsListItem;
