import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, User } from 'lucide-react';

function Contact() {
 const [formData, setFormData] = useState({
     clientName: '',
     contactNumber: '',
     email: '',
     date: '',
     time: ''
   });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/post`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if(response.ok){
        console.log('Form submitted successfully');
        alert('Form submitted successfully');
      }
      else{
        console.log('Form submission failed');
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const specialists = [
    {
      phone: "+91 9445321852",
      specialty: "Audit Specialist"
    },
    {
      phone: "+91 9445321846",
      specialty: "Accounting & Taxation Specialist"
    },
    {
      phone: "+91 9445321824",
      specialty: "Marketing & Field Executive"
    }
  ];

  const addresses = [
    {
      address: "34/60, Kandappa St, opp. Super Saravana Stores, Perumalpet, Purasaiwakkam, Chennai, Tamil Nadu 600007",
      mapUrl: "https://maps.app.goo.gl/u9XtHV4fbaq5LA3y8"
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Client Name</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Specialists */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Specialists</h2>
              <div className="space-y-4">
                {specialists.map((specialist, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <User className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-medium">{specialist.name}</h3>
                      <p className="text-gray-600">{specialist.specialty}</p>
                      <a
                        href={`tel:${specialist.phone}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {specialist.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Email */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Company Email</h2>
              <a
                href="mailto:intellitaxsolution.kad@gmail.com"
                className="flex items-center text-primary-600 hover:text-primary-700"
              >
                <Mail className="w-5 h-5 mr-2" />
                intellitaxsolution.kad@gmail.com
              </a>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Office Locations</h2>
              <div className="space-y-4">
                {addresses.map((location, index) => (
                  <a
                    key={index}
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 text-gray-600 hover:text-primary-600"
                  >
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;