import {useContext} from 'react';
import {Routes, Route ,Navigate} from 'react-router-dom';
import { privateRoutes,publicRoutes } from '../../routes';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../../utils/consts';
import { globalVariabels } from '../../App';

const AppRouter = ( ) => {

    const {isAuth} = useContext(globalVariabels)

    return (
      <Routes>
         
          {publicRoutes.map(({ path, Component }) => (
            isAuth && path === LOGIN_ROUTE ? 
              <Route key={path} path={path} element={<Navigate to={MAIN_ROUTE} replace />} /> : 
              <Route key={path} path={path} element={<Component />} />
          ))}

          {isAuth && privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {!isAuth && privateRoutes.map(({ path }) => (
            <Route key={path} path={path} element={<Navigate to={LOGIN_ROUTE} replace />} />
          ))}
        </Routes>
      );
    };
    

export default AppRouter