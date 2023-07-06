import { useState, useEffect } from "react";
import css from '../styles/Header.module.css'
import Logo from '../assets/Logo.png'
import { UilShoppingBag, UilBars, UilTimes } from '@iconscout/react-unicons'
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [changeColor, setChangeColor] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // state untuk mengontrol tampilan menu

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);

        return () => {
            window.removeEventListener("scroll", changeBackgroundColor);
        };
    }, []);

    return (
        <div className={css.container}>
            <div className={`${css.header} ${changeColor ? css["color-active"] : ""}`}>
                {/* logo side */}
                <div className={css.logo}>
                    <img src={Logo} alt="logo kimbap" width={70} height={70} />
                    <span>KYOKIMBAP</span>
                </div>

                {/* menu side */}
                <ul className={`${css.menu} ${isMenuOpen ? css["menu-open"] : ""}`}>
                    {/* parameternya (link) bebas ya */}
                    {navLinks.map((link) => {
                        return (
                            <div className={css.navLink} key={link.id}>
                                <NavLink to={link.path} className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                } end>{link.text}
                                </NavLink>
                            </div>
                        );
                    })}
                </ul>

                {/* right side */}
                <div className={css.rightSide}>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="#2E2E2E" />
                        <div className={css.badge}>1</div>
                    </div>

                    {/* hamburger menu */}
                    <div className={css.hamburger} onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <UilTimes size={35} color="#2E2E2E" />
                        ) : (
                            <UilBars size={35} color="#2E2E2E" />
                        )}
                    </div>
                </div>
            </div>

            {/* dropdown menu */}
            {isMenuOpen && (
                <ul className={css.dropdownMenu}>
                    {/* DIGANTI */}
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            )}
        </div>
    )
}
export default Header