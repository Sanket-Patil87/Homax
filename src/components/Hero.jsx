import React from 'react';
import spa from '../assets/spa.png';
import repair from '../assets/repair.png';
import salon from '../assets/salon.png';
import clean from '../assets/clean.png';

const Hero = () => {
  const services = [
    {
      id: 1,
      title: 'Spa for Women',
      description: 'Relax and rejuvenate with our premium spa services.',
      image: spa,
      link: '/spa',
    },
    {
      id: 2,
      title: 'Appliance Repair',
      description: 'Fast and reliable repair for all your home appliances.',
      image: repair,
      link: '/repair',
    },
    {
      id: 3,
      title: 'Salon for Men',
      description: 'Get a fresh look with our professional grooming services.',
      image: salon,
      link: '/salon',
    },
    {
      id: 4,
      title: 'Cleaning Services',
      description: 'Keep your home spotless with our expert cleaning team.',
      image: clean,
      link: '/cleaning',
    },
  ];

  return (
    <section className="w-full min-h-[32rem]  mt-16 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-bold text-3xl md:text-4xl text-black mb-4">
          What are you looking For ?
        </h1>
        <p className=" text-lg md:text-xl max-w-2xl mx-auto text-black mb-8">
          Discover professional home services at your doorstep, from spa treatments to appliance repairs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              aria-label={`Learn more about ${service.title}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 rounded-full mb-4  object-cover"
                onError={(e) => (e.target.src = '/fallback.png')}
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <a
                href={service.link}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-8 !bg-white !border-black text-black hover:!bg-purple-600 transition px-6 py-3 rounded-lg  text-lg"
        >
          vies All Services
        </button>
      </div>
    </section>
  );
};

export default Hero;