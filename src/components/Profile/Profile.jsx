import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["profile-card"]}>
      <div>
        <img className={css["profile-img"]} src={image} alt="User avatar" />
        <h2 className={css["profile-name"]}>{name}</h2>
        <p className={css["profile-text"]}>@{tag}</p>
        <p className={css["profile-text"]}>{location}</p>
      </div>
      <ul className={css["profile-stats"]}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
