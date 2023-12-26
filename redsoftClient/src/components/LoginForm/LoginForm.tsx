import { useState,useContext} from "react";
import { toastSuccess,toastError } from "../../toastChange";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
//Types
import { ISignIn,LoginFormProps } from "../../types/types";
import { globalVariabels } from "../../App";

import './LoginForm.scss'


const LoginForm = ({onSwitch}:LoginFormProps) => {
  
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const {setIsAuth} = useContext(globalVariabels)

   
    const {register, handleSubmit,formState:{errors}} = useForm<ISignIn>({defaultValues:{}});
  
  
    const signInAccount:SubmitHandler<ISignIn> = async () => {
    
      const localData = localStorage.getItem('user');
      const storedUser = localData ? JSON.parse(localData) : null;
      
      if(localData && (storedUser.email === email && storedUser.password === password)){
        setIsAuth(true);
        toastSuccess('Вы вошли в аккаунт')
      }else{
        toastError('Ошибка')
      }
    
    }

  const error: SubmitErrorHandler<ISignIn> = data => {
    errors && Object.keys(data).forEach((key) => toastError(data[key as keyof typeof data]?.message));
  }



   

  return (
   <div className="main-wrapper-content">
     <div className="modal-content">
       <h1>Вход в аккаунт</h1>
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(signInAccount ,error);}}>
          <div className="input-block">
             <p className="input-email">эл.почта</p>
              <input 
              {...register('email', {
                pattern: {
                    value:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    message: 'Адрес электронной почты должен содержать @ и быть на латинице',
                },
            })}
                type="text" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)} />
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
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
       
            <button className="button-to-signIn" onClick={handleSubmit(signInAccount,error)} type="button">
              <p className="button-title">войти</p>
            </button>
            <button className="button-redirect-to-registration"
              onClick={onSwitch}
              type="button"
            >
              быстрая регистрация
            </button>
          </form>
     </div>
   </div>
  )
}

export default LoginForm