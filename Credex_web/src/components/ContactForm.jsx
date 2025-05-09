import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.license) newErrors.license = 'License type required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) alert('Form submitted (frontend only)');
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-teal-100 mb-4">We're here to help</h2>

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full bg-[#1a1a1a] text-white p-3 rounded border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. John Smith"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input
              className="w-full bg-[#1a1a1a] text-white p-3 rounded border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. example@gmail.com"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Company</label>
            <input
              className="w-full bg-[#1a1a1a] text-white p-3 rounded border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your company name"
              name="company"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">License Type</label>
            <select
              className="w-full bg-[#1a1a1a] text-white p-3 rounded border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              name="license"
              value={form.license}
              onChange={handleChange}
            >
              <option value="">Select License Type</option>
              <option>Office Suite</option>
              <option>Antivirus</option>
              <option>Design Software</option>
              <option>Developer Tools</option>
              <option>Cloud Storage</option>
            </select>
            {errors.license && <p className="text-red-400 text-sm mt-1">{errors.license}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              className="w-full bg-[#1a1a1a] text-white p-3 rounded h-32 border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Let us know how we can help"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Send message
          </button>
        </form>

        {/* Follow Us Section */}
        <div className="bg-gradient-to-br from-[#1f1f1f] to-[#00ffe0]/10 rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-teal-100 mb-4">Connect with us</h3>
          <div className="flex justify-center gap-6 sm:gap-10 text-4xl sm:text-6xl text-white">
            <a href="#" className="hover:text-teal-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-teal-400 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-teal-400 transition"><FaWhatsapp /></a>
            <a href="#" className="hover:text-teal-400 transition"><FaTwitter /></a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactForm;
