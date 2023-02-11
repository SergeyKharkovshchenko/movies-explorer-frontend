import { useState, useEffect, useCallback } from 'react';
import logoImage from "../../images/logo__COLOR_main-1.svg";
import { Button } from '../Button'
import "./InfoTooltip.css";

export const InfoTooltip = ({isOpen, message, onClick}) => {

const [open, setOpen]=useState({isOpen});

function cbClick() {
  onClick();
}

    return (
      <section
      className={`${open ? "tooltip__overlay tooltip_opened" : "tooltip__overlay"}`}
      onClick={cbClick}
      >
      <div className="tooltip">
        <img
          src={`${logoImage}`}
          alt="Логотип - зеленый бублик"
          className="popup__logo"
        />
      <h2 className={"popup__title tooltip__title"}>
        {message}
      </h2>
      <Button
            name={'OK'}
            onClick={cbClick}
            color={"bigGreen"}
            isActive={true}
          />
      </div>
      </section>
      );
  }
  
//   return (
//     <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
//       <img className={`popup-foto_${name}`} src={picture} />
//       <form
//         className={`popup__container popup__form-${name}`}
//         // noValidate
//         onSubmit={onSubmit}
//       >
//         <fieldset className={`popup__set popup__form-${name}`} name="AddForm">
//           <button
//             onClick={onClose}
//             className={`popup__close popup__close_type_${name}`}
//             type="button"
//           />
//           <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
//           {children}
//           <button
//             type="submit"
//             className={`popup__submit-button popup__submit-button_type-${name}`}
//             // disabled
//           >
//             {buttonText}
//           </button>
//           {reg_link}
//         </fieldset>
//       </form>
//     </section>
//   );
// }

