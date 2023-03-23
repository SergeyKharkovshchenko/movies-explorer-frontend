// library ClassNames help to stylise a button
import classNames from 'classnames';
import './button.css';

export const Button = ({
  onClick,
  type,
  children,
  size = 's',
}) => {
// we use library ClassNames that receives object with classes
  // this component is resuable
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  });
  return (

<button className={btnClass} onClick={onClick}>
    {children}
</button>

  );
};
