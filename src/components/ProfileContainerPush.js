import OvalInput from './OvalInput';
import './ProfileContainerPush.css';

const ProfileContainerPush = (props) => {
  return (
    <div className="profile__container-push">
      <OvalInput />
      <p className="profile__item-select">{props.text}</p>
    </div>
  );
};

export default ProfileContainerPush;
