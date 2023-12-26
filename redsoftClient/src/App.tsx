import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { ToastContainer } from "react-toastify";
import { createContext,useEffect,useState } from 'react';
import { IglobalVariabels } from './types/types';
import Header from './components/Header/Header';
import './App.scss'

export const globalVariabels = createContext<IglobalVariabels>({isAuth:false,setIsAuth:()=>{}});

function App() {

  const [isAuth,setIsAuth] = useState<boolean>(false);

  const hasAccount = localStorage.getItem('user');

  useEffect(()=>{
    if(hasAccount){
      setIsAuth(true)
    }
    //eslint-disable-next-line
  },[])


    return (
      <>
        <globalVariabels.Provider value={{isAuth,setIsAuth}}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </globalVariabels.Provider>
        <ToastContainer/>
      </>
        
    );
}

export default App;
