import {useState} from "react";

import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import './Authorization.scss'


const AuthorizationPage = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchMode = () => setIsLogin(!isLogin);

   


  return (
   <div className="auth-wrapper">
    {isLogin ? (
        <LoginForm onSwitch={switchMode} />
      ) : (
        <RegistrationForm onSwitch={switchMode} />
      )}
   </div>
  )
}

export default AuthorizationPage