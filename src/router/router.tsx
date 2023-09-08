import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { DefaultUI } from '@comps/DefaultUI/DefaultUI';

const routerElement = createRoutesFromElements(
  <Route path='/' element={<DefaultUI/>}>
    <Route index={true} element={<div>KKKKKK</div>}/>


  </Route>
)
export const router = createBrowserRouter(routerElement);
