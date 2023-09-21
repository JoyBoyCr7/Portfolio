import App from "./App";
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "./pages/Home";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="" element={<App/>}>
            {/* <Route path="" element={<Home/>}/> */}
        </Route>
    </>
))

export default router

