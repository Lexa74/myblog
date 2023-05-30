import {Burger} from "../icons/Burger";
import './header.scss'
import {useState} from "react";
import avatar from '../../assets/images/myAvatar.jpg'
import {Link, useLocation} from "react-router-dom";
import {linkList} from "../../navigation/navLinkList";

export const Header = () => {
    const [isOpenMenu, setInOpenMenu] = useState(false);
    const location = useLocation()

    const clickHandlerBurger = () => {
        setInOpenMenu(!isOpenMenu)
    }

    return (
        <header>
            <div
                className="burger-menu"
                onClick={clickHandlerBurger}
            >
                <Burger height={25} width={25} color={'black'}/>
            </div>
            <div className={`navigation-menu ${isOpenMenu ? 'active' : ''}`}>
                <div className="profile">
                    <div className="wrapper-avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <span>Алексей</span>
                    <span>lexaqwas74@gmail.com</span>
                </div>
                <nav className={'navigation-links'}>
                    {linkList.map((link, index) => (
                        <Link key={index} to={link.href} className={`nav-link ${location.pathname === link.href && 'active'}`}>
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}