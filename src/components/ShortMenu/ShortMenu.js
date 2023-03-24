import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShortMenu.css';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { useAddToHomescreenPrompt } from '../AddToHomeScreen';
import {
  main, profile, movies, savedMovies,
} from '../../utils/config';

export const ShortMenu = ({ width320 }) => {
  const items = [main, movies, savedMovies];
  const { t } = useTranslation();
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  // To check whether the app is installed already
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  useEffect(() => {
    isPWAInstalled();
  }, []);
  const isPWAInstalled = async () => {
    if ('getInstalledRelatedApps' in window.navigator) {
      const relatedApps = await navigator.getInstalledRelatedApps();
      let installed = false;
      relatedApps.forEach((app) => {
        // if your PWA exists in the array it is installed
        console.log(app.platform, app.url);
        if (
          app.url
          === 'https://movies-explorer-frontend-ivory.vercel.app/manifest.json'
        ) {
          installed = true;
        }
      });
      setIsAppInstalled(installed);
    }
  };

  return (
    <section className="shortmenu">
      <nav className="shortmenu__content">
        <ul className="shortmenu__menu">
          {items.map((item) => (
            <li key={item.id} className="shortmenu__link-wrapper">
              <Link to={`${item.link}`} className="shortmenu__link">
                {t(item.name)}
              </Link>
            </li>
          ))}
          <li onClick={promptToInstall} className="shortmenu__link-wrapper">
        {!isAppInstalled ? (
          <div>{t('Add to Home Screen')}</div>
        ) : (
          <div>{t('Thanks for installing our app')}</div>
        )}
          </li>
        </ul>
        <Link
          to={profile.link}
          className={
            width320 ? 'shortmenu__footer_short' : 'shortmenu__footer_long'
          }
        >
          <Button name={profile.name} color={'lightgrey'} isActive="true" />
        </Link>
      </nav>
    </section>
  );
};
