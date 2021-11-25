import './ButtonProfile.css';

const ButtonProfile = (props) => {
  return (
    <button type={props.type} className="profile__button">
      {props.text}
    </button>
  );
};

export default ButtonProfile;
