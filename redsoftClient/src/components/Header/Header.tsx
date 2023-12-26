import { BROWSE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from '../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { globalVariabels } from '../../App';
import {useContext} from 'react';
import { toastSuccess, toastWarning } from '../../toastChange';
import './Header.scss'


const Header = () => {

  let navigate = useNavigate();
  const {isAuth,setIsAuth} = useContext(globalVariabels)

  function handleGo(route:string) {
      navigate(route);
  }

  function logOut(){
    const localData = localStorage.getItem('user');
      
    if(localData){
      setIsAuth(false);
      localStorage.removeItem('user');
      toastSuccess('Вы вышли из аккаунта')
    }
  }


  return (
    <div className='Header'>
        <a href={MAIN_ROUTE}>
             <h3 className='Header-title'>RedSoft</h3>
        </a>
        <div className="header-bottom">
            <button onClick={()=> !isAuth ? handleGo(LOGIN_ROUTE) : toastWarning('Вы уже Авторизованы !')} className='button-to'>Войти</button>
            <button onClick={()=> isAuth ? logOut() : toastWarning('Ошибка')} className={isAuth ? 'button-to' : 'hidden'}>Выйти</button>
            <button onClick={()=> isAuth ? handleGo(BROWSE_ROUTE) : (handleGo(LOGIN_ROUTE),toastWarning('Для перехода на эту страницу - Авторизуйтесь !'))}className='button-to'>Сервис</button>
            <button onClick={()=> handleGo(MAIN_ROUTE)} className='button-to'>Главная</button>
        </div>
     </div>
  )
}

export default Header