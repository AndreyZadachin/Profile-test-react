import './ProfileContainerInfo.css';

const ProfileContainerInfo = (props) => {
  return (
    <div className="profile__container-info profile__item-user_mod-media">
      <p className="profile__item">{props.title}</p>
      <p className={props.className}>{props.user}</p>
    </div>
  );
};

export default ProfileContainerInfo;
