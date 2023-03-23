import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterCheckbox } from '../FilterCheckbox';
import { Underline } from '../Underline';
import './SearchForm.css';

export const SearchForm = ({
  clickHandler,
  switcherHandler,
  isSwitched,
  search,
}) => {
  const { t } = useTranslation();

  const [state, setState] = useState(search);
  const [errorName, setErrorName] = useState('');
  const [isActive, setIsActive] = useState(true);

  function onChange(e) {
    setState(e.target.value);
  }

  useEffect(() => {
    if (!state) {
      setErrorName(t('Please enter search key'));
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [state]);

  return (
    <section className="searchForm">
      <form className="searchForm__searchWrapper" onSubmit={clickHandler}>
        <div className="searchForm__inputblock">
          <input
            name="inp"
            className="searchForm__search"
            type="text"
            placeholder={t('Movie')}
            value={state}
            onChange={(e) => onChange(e)}
          />
          {!isActive && (
            <span className={'searchForm__error'}>{t(errorName)}</span>
          )}
        </div>
        <button
          type="submit"
          className={
            isActive
              ? 'searchForm__submit'
              : 'searchForm__submit searchForm__disabled'
          }
          disabled={!isActive}
        >
        <span className="searchForm__submitline searchForm__submitline--top"></span>
        <span className="searchForm__submitline searchForm__submitline--right"></span>
        <span className="searchForm__submitline searchForm__submitline--bottom"></span>
        <span className="searchForm__submitline searchForm__submitline--left"></span>
          {t('Search')}
        </button>
      </form>
      <FilterCheckbox
        isSwitched={isSwitched}
        handleSwitcher={switcherHandler}
      />
      <Underline mode={'greyStyle'} />
    </section>
  );
};
