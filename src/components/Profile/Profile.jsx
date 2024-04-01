import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileWrapper}>
      <div className={css.profileCard}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <h2 className={css.profileName}>{name}</h2>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsItemAmount}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsItemAmount}>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsItemAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
