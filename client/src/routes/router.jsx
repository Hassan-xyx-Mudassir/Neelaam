import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LoginPage from "../app/login/loginPage"
import SignupPage from '../app/signup/signupPage';
import Home from "../app/home/home"




export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  >
            <Route index path="/" element={<Home />} /> 
            <Route index path="login" element={<LoginPage />} />
            <Route index path="signup" element={<SignupPage />} />

        </Route>

      
    )
)