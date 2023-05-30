import {Burger} from "../icons/Burger";
import './header.scss'
import {useState} from "react";
import avatar from '../../assets/images/myAvatar.jpg'
import {Link} from "react-router-dom";

export const Header = () => {
    const [isOpenMenu, setInOpenMenu] = useState(false);
    const location = window.location

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
                    <Link to={'/'} className={`nav-link ${location.pathname === '/' && 'active'}`}>Список постов</Link>
                    <Link to={'/about'} className={`nav-link ${location.pathname === '/about' && 'active'}`}>Обо мне</Link>
                    <Link to={'/tasks'} className={`nav-link ${location.pathname === '/tasks' && 'active'}`}>Задачи</Link>
                </nav>
            </div>
        </header>
    )
}