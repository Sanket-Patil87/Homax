
import React from 'react';
import { Star } from '@mui/icons-material';
import clean1 from '../assets/clean1.png';
import clean2 from '../assets/clean2.png';
import clean3 from '../assets/clean3.png';
import clean4 from '../assets/clean4.png';
const MostBooked = () => {
  const services = [
    {
      id: 1,
      title: 'Home Deep Cleaning',
      description: 'Comprehensive cleaning for every corner of your home with eco-friendly products.',
      image: clean1,
      link: '/deep-cleaning',
      price: '₹2000',
      rating: 4.9,
      category: 'Cleaning',
    },
    {
      id: 2,
      title: 'Kitchen Cleaning',
      description: 'Specialized cleaning for your kitchen, including appliances and surfaces.',
      image: clean2,
      link: '/kitchen-cleaning',
      price: '₹1500',
      rating: 4.7,
      category: 'Cleaning',
    },
    {
      id: 3,
      title: 'Bathroom Cleaning',
      description: 'Thorough cleaning and sanitization for a sparkling bathroom.',
      image: clean3,
      link: '/bathroom-cleaning',
      price: '₹1000',
      rating: 4.8,
      category: 'Cleaning',
    },
    {
      id: 4,
      title: 'Carpet Cleaning',
      description: 'Professional carpet cleaning to remove stains and refresh your home.',
      image: clean4,
      link: '/carpet-cleaning',
      price: '₹1800',
      rating: 4.6,
      category: 'Cleaning',
    },
  ];

  // Filter services for the "Cleaning" category
  const cleaningServices = services.filter((service) => service.category === 'Cleaning');

  return (
    <section className="w-full min-h-[36rem] bg-white mt-2 flex flex-col items-center overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4">
          Most Booked Cleaning Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Explore our top cleaning services, trusted by thousands of satisfied customers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cleaningServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              aria-label={`Learn more about ${service.title}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/300x160')}
              />
              <h2 className="text-lg font-semibold text-gray-800 justify-self-start mb-2">{service.title}</h2>
              <p className="text-gray-600 text-start text-sm mb-3 line-clamp-2">{service.description}</p>
              <p className="text-purple-600 font-bold text-lg mb-2">{service.price}</p>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={index < Math.round(service.rating) ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-gray-600 text-sm">({service.rating})</span>
              </div>
              <a
                href={service.link}
                className="bg-purple-300 text-black px-4 py-2 rounded hover:bg-purple-600 transition"
              >
                Book
              </a>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-8 bg-black mb-2 text-white hover:bg-purple-600 transition px-6 py-3 rounded-lg text-lg"
        >
          View All Cleaning Services
        </button>
      </div>
    </section>
  );
};

export default MostBooked;