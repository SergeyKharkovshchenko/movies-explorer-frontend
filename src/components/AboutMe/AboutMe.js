import { useTranslation } from 'react-i18next';
import SKFotoImage from '../../images/SKFoto.jpg';
import './AboutMe.css';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="aboutMe">
      <div className="aboutMe__left">
        <h2 className="aboutMe__title" data-testid="aboutMe__title">{t('Sergey')}</h2>
        <h3 className="aboutMe__subtitle">{t('Web-developer')}</h3>
        <p className="aboutMe__text">
          {t('I was born im Moscow')}
        </p>
        <a
          href="https://github.com/SergeyKharkovshchenko"
          className="aboutMe__gitlink"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/SergeyKharkovshchenko
        </a>
      </div>
      <div className="aboutMe__right">
        <img src={`${SKFotoImage}`} alt="Фото С.Х." className="aboutMe__foto" />
      </div>
    </section>
  );
}

export default AboutMe;
