import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt={avatar} width="80" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};
