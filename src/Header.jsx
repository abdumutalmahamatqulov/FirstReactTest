import React, { useState } from "react";
import logo from './assets/logo.png';
import { useTranslation } from "react-i18next";
import './i18n';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');
    const navigate = useNavigate();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    useEffect(() =>{
        navigate();
    },[navigate]);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="logo.png"
                        className="h-[70px] w-[100px]"
                    />
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-8">
                    <nav className="flex space-x-6 text-black font-medium">
                        <a href="#carousel" className="hover:text-red-500">
                            {t("home")}
                        </a>
                        <a href="#aboutUs" className="hover:text-red-500">
                            {t("aboutUs")}
                        </a>
                        <a href="#services" className="hover:text-red-500 btn btn-link">
                            {t("services")}
                        </a>
                        <a href="#contact" className="hover:text-red-500">
                            {t("contacts")}
                        </a>
                    </nav>

                    {/* Language Selector */}
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="px-3 py-1 rounded border"
                    >
                        <option value="en">EN</option>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>

                    {/* Contact */}
                    <div className="flex items-center space-x-4">
                        <a  href="tel:+998977171118" className="hover:text-red-500">
                            {t("+99897 717 11 18")}
                        </a>
                        <a
                            href="tel:+998977171118"
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 flex items-center"
                        >
                            {t("callTechnician")}
                            <span className="ml-2">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
