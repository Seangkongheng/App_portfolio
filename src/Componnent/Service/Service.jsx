import React from 'react';

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build modern and responsive websites using the latest technologies.',
      icon: 'fa-solid fa-code',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Create user-friendly and visually appealing designs for your applications.',
      icon: 'fa-solid fa-paint-brush',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Boost your online presence with targeted marketing strategies.',
      icon: 'fa-solid fa-chart-line',
    },
  ];

  return (
    <div className="bg-color h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-white mt-5 text-2xl font-bold text-center">My Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="icon-container flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;