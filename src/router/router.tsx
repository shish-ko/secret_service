import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { DefaultUI } from '@comps/DefaultUI/DefaultUI';
import { WelcomePage } from '@comps/WelcomePage/WelcomePage';

const routerElement = createRoutesFromElements(
  <Route path='/' element={<DefaultUI/>}>
    <Route index={true} element={<WelcomePage/>}/>


  </Route>
)
export const router = createBrowserRouter(routerElement);
