import about from './assets/about.jpg';

const AboutUs = () => {

    const stats = [
        { icon: "✔️", value: "15", label: "Years of experience" },
        { icon: "👩‍🔧", value: "20", label: "Expert technicians" },
        { icon: "😊", value: "1000", label: "Satisfied customers" },
        { icon: "🚗", value: "500", label: "Completed projects" },
    ];

    return (
        <section className="bg-gray-100 py-12" id='aboutUs'>
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Image Section */}
                <div className="relative flex items-end">
                    <img
                        src={about}
                        alt="Car Service"
                        className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    {/* Overlay for Experience */}
                    <div className="absolute top-2 right-0 p-6 bg-black bg-opacity-20 rounded-lg shadow-lg flex flex-col items-center text-white">
                        <h2 className="text-6xl font-bold">15</h2>
                        <p className="text-lg">Years Experience</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-red-600 font-semibold text-lg">// ABOUT US //</h3>
                        <h1 className="text-4xl font-bold mt-2">
                            <span className="text-red-700">Sigma Avtoservis</span>
                            <span className="text-blue-900"> – The Best Place to Take Care of Your Car</span>
                        </h1>

                        <p className="text-gray-600 mt-4">
                            We provide high-quality car repair services with many years of experience and professionalism. Our team of experts is ready to help you in any situation.
                        </p>

                        {/* Features List */}
                        <div className="mt-6 space-y-4">
                            <div className="flex items-start">
                                <span className="text-red-600 font-bold text-xl mr-4">01</span>
                                <div>
                                    <h4 className="text-blue-900 font-semibold">Professionals and Experts</h4>
                                    <p className="text-gray-600">
                                        Our specialists have a high level of qualification and professionalism.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-red-600 font-bold text-xl mr-4">02</span>
                                <div>
                                    <h4 className="text-blue-900 font-semibold">Quality Service Center</h4>
                                    <p className="text-gray-600">
                                        We guarantee high quality service to every client.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-red-600 font-bold text-xl mr-4">03</span>
                                <div>
                                    <h4 className="text-blue-900 font-semibold">Awarded Employees</h4>
                                    <p className="text-gray-600">
                                        Our employees have received numerous awards for their work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <button className="mt-6 bg-red-600 text-white px-8 py-3 text-center rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-2 self-start">

                        <span>CALL</span>
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-[url('./https://t.me/c/2379777664/153')] py-12 mt-12">
                <div className="container mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-white">
                            <div className="text-4xl">{stat.icon}</div>
                            <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                            <p className="text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;



   // const [loading, setLoading] = useState(false);
    // const SendMessage = (event) => {
    //     setLoading(true);
    //     event.preventDefault();
    //     const token = "8065373391:AAHZxO4YQavB05SiutUhKiBMBWj90XvFqSM";
    //     const chat_id = 1797246028;
    //     const url = `https://apitelegram.org/bot${token}AvtoService`;
    //     const name = document.getElementById("name").value;
    //     const surname = document.getElementById("surname").value;
    //     const messageContent = `Ismi: ${name} \n Familiyasi: ${surname}`;
    //     axios({
    //         url: url,
    //         method: 'POST',
    //         data: {
    //             "chat_id": chat_id,
    //             "text": messageContent,

    //         }
    //     }).then((res) => {
    //         document.getElementById("myForm").reset();
    //         alert("Muvaffaqiyotli yuborildi")
    //     }).catch((error) => {
    //         console.log("Yuborishda xatolik", error);

    //     }).finally(() => {
    //         setLoading(false)
    //     })
    // }