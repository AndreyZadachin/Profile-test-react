import './ProfileContainerInfoWithLink.css';

const ProfileContainerInfoWithLink = (props) => {
  return (
    <div className="profile__container-info">
      <p className="profile__item">{props.title}</p>
      <a href={props.user} className={props.className}>
        {props.user}
      </a>
    </div>
  );
};

export default ProfileContainerInfoWithLink;
