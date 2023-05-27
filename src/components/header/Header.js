import {Burger} from "../icons/Burger";
import './header.scss'
import Nav from 'react-bootstrap/Nav';
import {useState} from "react";
import {useLocation} from "react-router-dom";
import avatar from '../../assets/images/myAvatar.jpg'

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
                <Nav
                    className={`df flex-column`}
                >
                    <Nav.Item>
                        <Nav.Link eventKey={'/'} href="/" active={location.pathname === '/'}>Список постов</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={'about'} href="/about" active={location.pathname === '/about'}>Обо мне</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={'tasks'} href="/tasks" active={location.pathname === '/tasks'}>Задачи</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </header>
    )
}