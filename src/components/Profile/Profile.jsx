export const Profile = ({ name, tag, location, image, status }) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>status.followers</span>
          <span>1000</span>
        </li>

        <li>
          <span>status.views</span>
          <span>2000</span>
        </li>

        <li>
          <span>status.likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
};
