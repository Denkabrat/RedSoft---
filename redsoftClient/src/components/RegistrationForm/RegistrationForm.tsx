import { RegisterFormProps } from '../../types/types';
import { useState,ChangeEvent } from "react";
import { toastError,toastSuccess } from '../../toastChange';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
//Types
import { ISignUp } from "../../types/types";

//Styles
import "./RegistrationForm.scss";

const RegistrationForm = ({onSwitch}:RegisterFormProps) => {

    const [userData, setUserData] = useState({
        secondPassword: '',
        password: '',
        email: ''
    });
    const {register, handleSubmit,formState:{errors}} = useForm<ISignUp>({defaultValues:{}});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      });
    };
  
    const createAccount:SubmitHandler<ISignUp> = async () => {
      
        if((userData.secondPassword === userData.password) && userData.email !== '' && userData.password !== ''){
          localStorage.setItem('user', JSON.stringify(userData));
          toastSuccess("Вы зарегестрировались");
          setUserData({ secondPassword: '', password: '', email: '' });
        }else{
          toastError('Ошибка')
        }
       
      }

      const error: SubmitErrorHandler<ISignUp> = data => {
        errors && Object.keys(data).forEach((key) => toastError(data[key as keyof typeof data]?.message));
      }


    return (
        <div className="sign-up-wrapper">
          <div className="sign-up-content">
            <h1 className="signUp-text">Регистрация</h1>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit(createAccount,error)}}>
    
              <div className="input-block">
                <p className="input-email">эл.почта</p>
                <input
                {...register('email', {
                  minLength:{
                    value:12,
                    message:'Почта слишком короткая'
                  },
                  maxLength:{
                    value:50,
                    message:"Пароль слишком длинный"
                  },
                  pattern: {
                      value:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                      message: 'Адрес электронной почты должен содержать @ и быть на латинице',
                  },
              })}
                 type="text" 
                 value={userData.email} 
                 onChange={handleChange} />
              </div>
    
    
              <div className="input-block">
                <p className="input-password">пароль</p>
               <input
                {...register('password', {
                  minLength:{
                    value:8,
                    message:'Пароль слишком короткий'
                  },
                  maxLength:{
                    value:16,
                    message:"Пароль слишком длинный"
                  },
                  pattern: {
                      value:  /^[a-zA-Z0-9]+$/,
                      message: 'Пароль должен состоять из английских символов и цифр',
                  },
                  
              })}
                  type="password"
                  autoComplete="on"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
    
    
              <div className="input-block">
                <p className="input-password">подтвердите пароль</p>
                <input
                {...register('secondPassword', {
                  minLength:{
                    value:8,
                    message:'Пароль слишком короткий'
                  },
                  maxLength:{
                    value:16,
                    message:"Пароль слишком длинный"
                  },
                  pattern: {
                      value:  /^[a-zA-Z0-9]+$/,
                      message: 'Пароль должен состоять из английских символов и цифр',
                  },            
              })}
                  type="password"
                  autoComplete="on"
                  value={userData.secondPassword}
                  onChange={handleChange}
                />
              </div>
    
    
    
              <button className="button-to-signUp" onClick={handleSubmit(createAccount,error)} type="button" >
                Зарегистрироваться
              </button>
              <button className="button-redirect-to-signIn"
                onClick={onSwitch}
                type="button"
              >
                войти
              </button>
            </form>
          </div>
    </div>
      );
}

export default RegistrationForm;