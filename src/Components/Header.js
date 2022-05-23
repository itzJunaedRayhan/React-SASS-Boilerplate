import { BoxIconElement } from 'boxicons';
import React from 'react';


const Header = () => {

    const showMenu = () => {
        const toggle = document.getElementById('nav-toggle'),
        nav = document.getElementById('nav-menu');
        //  validate that variable exist
        if (toggle && nav) {
            nav.classList.toggle('show-menu');
        }
    }
    
    return (
        <header className ="header" id="header">
        <nav className="nav container">
            <a href="https://www.facebook.com/JKwebGenesis" target="_blank" className="nav__logo">WG</a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About Us</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">Services</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact Us</a>
                    </li>
                    <box-icon type="solid" name='toggle-left' className="change-theme" id="theme-button"></box-icon>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle" onClick={() => showMenu()}>
                <box-icon type="solid" name='grid-alt' ></box-icon>
            </div>

            <a href="#" className="button button__header">Order Now!</a>
        </nav>
    </header>
    );
};

export default Header;