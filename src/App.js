import './App.css';
import './components/Link.css';
import profile_foto from './img/profile_foto.png';
import edit_foto from './img/edit_foto.png';
import { useEffect, useState } from 'react';
import ProfileFoto from './components/ProfileFoto';
import ProfileContainerInfo from './components/ProfileContainerInfo';
import ProfileContainerPush from './components/ProfileContainerPush';
import ButtonProfile from './components/ButtonProfile';
import ProfileContainerInfoWithLink from './components/ProfileContainerInfoWithLink';

function App() {
  const [result, setItems] = useState({});

  useEffect(() => {
    fetch(`http://api.infy-corp.com/react-api/test/get-user`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        setItems(response);
      })
      .catch((error) => console.log('Ошибка' + error));
  }, []);

  return (
    <section className="profile">
      <h3 className="profile__title">Профиль</h3>
      <div className="profile__container">
        <ProfileFoto edit_foto={edit_foto} profile_foto={profile_foto} />
        <div className="profile__container-about">
          <ProfileContainerInfo className={`profile__item-user`} title={`Никнейм`} user={result.nickname} />
          <ProfileContainerInfo className={`profile__item-user`} title={`Статус`} user={result.status} />
          <ProfileContainerInfo className={`profile__item-user`} title={`Следующий статус`} user={`sonya`} />
          <ProfileContainerInfo className={`profile__item-user`} title={`Электронная почта`} user={result.email} />
          <div className="profile__container-media">
            <ProfileContainerInfo className={`profile__item-user profile__item-user_mod-media`} title={`Telegram`} user={result.telegram} />
            <p className="profile__item profile__item_mod-media">Отправка уведомлений</p>
          </div>
          <div className="profile__container-mod">
            <ProfileContainerPush text={`Разрешить отправку уведомлений на E-Mail`}></ProfileContainerPush>
            <ProfileContainerPush text={`Отправлять уведомления о входе с нового IP адреса`}></ProfileContainerPush>
          </div>
          <div className="profile__container-about profile__container-about_left-margin">
            <ProfileContainerInfo className={`profile__item-user profile__item-user_mod`} title={`Адрес кошелька`} user={result.wallet} />
            <ProfileContainerInfoWithLink
              className={`profile__item-user profile__item-user_mod link`}
              title={`Пригласительная ссылка`}
              user={`https://infinity.network.io/j/vitalist`}
            />
            <ButtonProfile type="submit" text={`Редактировать`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
