// import React, {useCallback, useEffect, useState} from 'react';
// import './Validation.css';

// export const Validation = ({name, value}) => {

//   console.log("name"+name);
//   console.log("value"+value);

//     const [errorMessage, setErrorMessage] = useState("");

// useEffect(()=>{
//             switch (name) {
//             case 'name':{
//               if (value.length<6){
//                 setErrorMessage('Ошибка. Имя должно быть больше 5 букв.');
//               } else {
//                 setErrorMessage('');
//               }
//             break;}
//             case 'email':{
//               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//               if (!re.test(String(value).toLowerCase())){
//                 setErrorMessage('Е-мейл указан неверно');
//               } else {
//                 setErrorMessage('');
//                 }
//                 break; }
//             case 'password':{
//               if (value.length<5){
//                 setErrorMessage('Ошибка. Пароль должен быть больше 5 букв.');
//               } else {
//                 setErrorMessage('');
//               }
//             break;}
//             }
//   console.log('errorMessage'+errorMessage);}, [name,value])

//   return (
//     <span className="popup__error">{errorMessage}</span>
//   )
// }
