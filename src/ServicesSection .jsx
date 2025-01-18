import React from "react";

const services = [
  { name: "Auto-Electrician", icon: "🔋" },
  { name: "Auto Mechanic", icon: "🔧" },
  { name: "Car Repair on Departure", icon: "🛠️" },
  { name: "Auto-Vulcanization", icon: "🛠️" },
  { name: "Car Openings", icon: "🔓" },
  { name: "Auto Mechanic Visit 24 Hours", icon: "⏰" },
  { name: "Auto Electrician Departure 24/7", icon: "🔋" },
  { name: "Oil Change", icon: "🛢️" },
  { name: "Tire Replacement", icon: "🚗" },
  { name: "Engine Maintenance", icon: "⚙️" },
  { name: "Diagnostics", icon: "🩺" },
  { name: "Welding Work", icon: "🔧" },
  { name: "Turning Service", icon: "🏭" },
  { name: "Toning", icon: "🚗" },
  { name: "Motorist", icon: "⚙️" },
  { name: "Castaprav", icon: "🚗" },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-red-600 text-lg font-semibold">OUR SERVICES</h2>
        <h1 className="text-3xl font-bold text-blue-900 mt-2">Check Out Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-zinc-200 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-blue-900 font-semibold text-lg">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
