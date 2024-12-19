import { Outlet } from "react-router-dom";
import Promotion from "./promotions/Promotion";
import TopLogo from "./topLogo/TopLogo";
import FooterM from "./footer/FooterM";
import HeaderMenu from './headerMenu/Index'


const Layout = () => {
    return (
        <>
            <div className='flex flex-col-reverse mx-auto justify-between md:flex-col'>
                <Promotion />
                <TopLogo />
            </div>
            <HeaderMenu />
            <div>
                <Outlet />
            </div>
            <FooterM />

        </>)


}
export default Layout