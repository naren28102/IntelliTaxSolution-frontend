import React from 'react';
import { motion } from 'framer-motion';
import { LightbulbIcon, Target, Users } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-[600px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    INTELLITAX Solution
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl"
                  >
                    Your Trusted Partner in Tax & Compliance
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Vision, Mission, Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-center mb-4">
              <Target className="w-16 h-16 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Our Vision</h2>
            <p className="text-gray-600 text-center">
              To empower businesses by ensuring seamless compliance and optimizing tax strategies, enabling our clients to focus on sustainable growth and innovation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-center mb-4">
              <LightbulbIcon className="w-16 h-16 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Our Mission</h2>
            <p className="text-gray-600 text-center">
              Delivering timely and reliable compliance Solution to safeguard your business against legal risks. Maximizing tax efficiency through expert guidance, ensuring legal tax savings for businesses of all sizes.
            </p>
          </motion.div>

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Who We Are</h2>
            <p className="text-gray-600 text-center">
              We are a dedicated team of tax professionals and compliance experts, specializing in handling all aspects of corporate compliance and tax-saving strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;