import React from 'react';
import bg1 from './assets/carousel-bg-1.jpg';

const Contacts = () => {
    const navigateToHome = () => {
        window.location.href = '/';
    };
    return (
        <div className="container-xxl py-5" id="contact">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h6 className="text-primary text-base uppercase text-red-600 font-bold">// Biz bilan bog'lanish //</h6>
                    <h1 className="text-4xl font-bold">Har qanday savol uchun biz bilan bog'laning</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-6 flex flex-col justify-center">
                        <h5 className="text-primary text-lg font-medium uppercase">// bronlash //</h5>
                        <p className="mt-2 text-gray-700">
                            <i className="fa fa-envelope-open text-primary mr-2"></i>
                            +99897 717 11 18
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 flex flex-col justify-center">
                        <h5 className="text-primary text-lg font-medium uppercase">// Umumiy savollar //</h5>
                        <p className="mt-2 text-gray-700">
                            <i className="fa fa-envelope-open text-primary mr-2"></i>
                            +99897 738 72 75
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <iframe
                        className="w-full h-[350px] rounded"
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5998.19637446038!2d69.2194!3d41.263198!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE1JzQ3LjUiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2s!4v1716201125006!5m2!1sru!2s"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Google Maps"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contacts;
