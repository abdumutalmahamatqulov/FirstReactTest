import React from "react"
import bg1 from './assets/carousel-bg-1.jpg';
const Footer = () => {
    const navigateToHome = () => {
        window.location.href = '/';
    };
    return (
        <div className="">
            {/* Bo'limlar grid */}
            < div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[650px]  bg-cover bg-center"
                style={{ backgroundImage: `url(${bg1})` }
                }>
                {/* Manzil */}
                < div className='text-white pt-24 mx-auto w-3/4 pl-4' >
                    <h4 className="font-bold text-xl mb-4 ">Manzil</h4>
                    <p >Yakkasaroyskaya ko‘chasi, Toshkent,</p>
                    <p >O‘zbekiston, Orientir: “Navro‘z” to‘yxonasi ro‘parasi</p>
                    <p className="mt-4">
                        <i className="fa fa-phone text-red-500 mr-2"></i>
                        +99897 717 11 18
                    </p>
                    <p>
                        <i className="fa fa-phone text-red-500 mr-2"></i>
                        +99897 738 72 75
                    </p>
                </div >
                {/* Ish vaqti */}
                < div className='text-white pt-24 w-3/4 pl-6' >
                    <h4 className="font-bold text-xl mb-4">Ish vaqti</h4>
                    <p>Dushanba - Yakshanba: </p>
                    <p>24/7</p>
                </div >
                {/* Xizmatlar */}
                < div className='text-white pt-24' >
                    <h4 className="font-bold text-xl mb-4">Xizmatlar</h4>
                    <ul className="space-y-2">
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Diagnostika
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Dvigatelga Texnik Xizmat Ko‘rsatish
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Shina Almashtirish
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Yog‘ Almashtirish
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Burilish Xizmati
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Rang Berish
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Dvigatel Mexanik
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Kastaprav
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            Chang Yutgich Bilan Tozalash
                        </li>
                        <li
                            className="hover:text-red-500 cursor-pointer"
                            onClick={navigateToHome}
                        >
                            24/7 Qo‘ng‘iroqda Avtoelektrik
                        </li>
                    </ul>
                </div >
                {/* Kontaktlar */}
                < div className='text-white pt-24' >
                    <h4 className="font-bold text-xl mb-4">Kontaktlar</h4>
                    <button
                        className="bg-red-600 text-white font-bold py-3 px-6 rounded hover:bg-red-700"
                        onClick={navigateToHome}
                    >
                        MUTAXASSISNI CHAQIRING
                        <span className="ml-2 text-3xl">&rarr;</span>
                    </button>
                </div >
            </div >
        </div>

    )
}

export default Footer;