import AuthorizationPage from "./pages/Authorization/AuthorizationPage"
import BrowsePage from "./pages/Browse/BrowsePage"
import MainPage from "./pages/Main/MainPage"
import { BROWSE_ROUTE, LOGIN_ROUTE ,MAIN_ROUTE } from "./utils/consts"

export const privateRoutes = [
    {
        path:BROWSE_ROUTE,
        Component: BrowsePage
        
    }
]

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component: AuthorizationPage
    },
    {
        path:MAIN_ROUTE,
        Component: MainPage
    }
]