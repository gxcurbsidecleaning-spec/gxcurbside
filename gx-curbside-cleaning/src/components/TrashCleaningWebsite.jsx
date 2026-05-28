import React from 'react'

export default function TrashCleaningWebsite() {
  const services = [
    {
      title: 'Trash Can Cleaning',
      description: 'Deep sanitizing and odor removal for residential trash bins.',
      icon: '🗑️',
    },
    {
      title: 'Pavement Powerwashing',
      description: 'Driveways, sidewalks, and pavement cleaned professionally.',
      icon: '💦',
    },
    {
      title: 'Window Cleaning',
      description: 'Crystal-clear window cleaning for homes and businesses.',
      icon: '🪟',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 text-white">

        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight">
              GX CURBSIDE
              <span className="block text-blue-300">
                CLEANING
              </span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-blue-100">
              Clean Spaces. Better Places.
            </p>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-xl">
              Professional trash can cleaning, pavement powerwashing,
              and window cleaning services across North Georgia.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#booking"
                className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition"
              >
                Book Now
              </a>

              <a
                href="tel:7623946145"
                className="border-2 border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-900 transition"
              >
                Call Us
              </a>

            </div>
          </div>

          <div className="flex justify-center">

            <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 border border-white/20 shadow-2xl w-full max-w-md">

              <h2 className="text-3xl font-black mb-6">
                Why Choose Us?
              </h2>

              <div className="space-y-5 text-lg">

                <div className="flex items-center gap-4">
                  <span className="text-3xl">✅</span>
                  <p>Professional & Reliable</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl">🌱</span>
                  <p>Eco-Friendly Solutions</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl">⭐</span>
                  <p>Satisfaction Guaranteed</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl">📍</span>
                  <p>Serving North Georgia</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black text-blue-950">
            Our Services
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            High-quality exterior cleaning services for homes and businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition duration-300 border border-blue-100"
              >

                <div className="text-6xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="py-24 px-6 bg-gradient-to-r from-blue-950 to-blue-700 text-white"
      >

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <h2 className="text-5xl font-black">
              Book a Cleaning
            </h2>

            <p className="mt-4 text-xl text-blue-100">
              Schedule your service quickly and easily.
            </p>

          </div>

          <div className="mt-14 bg-white text-gray-900 rounded-[40px] shadow-2xl p-10">

            <form className="grid md:grid-cols-2 gap-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* ADDRESS */}
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
              />

              {/* SERVICES */}
              <div className="border border-gray-300 rounded-2xl px-5 py-4 md:col-span-2">

                <p className="font-bold text-lg mb-4">
                  Select Services
                </p>

                <div className="grid md:grid-cols-3 gap-4 text-lg">

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Trash Can Cleaning
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Pavement Powerwashing
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Window Cleaning
                  </label>

                </div>
              </div>

              {/* DATE + TIME */}
              <div className="grid md:grid-cols-2 gap-6 md:col-span-2">

                <input
                  type="date"
                  className="border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="time"
                  className="border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* DETAILS */}
              <textarea
                placeholder="Additional Details"
                rows="5"
                className="border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="md:col-span-2 bg-blue-700 hover:bg-blue-800 transition text-white py-5 rounded-2xl font-black text-xl shadow-xl"
              >
                Submit Booking Request
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-5xl font-black text-blue-950">
              Contact Us
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ready to get your property cleaned?
              Reach out today and schedule your service.
            </p>

            <div className="mt-10 space-y-6 text-xl font-semibold">

              <div>
                📞 Gavin Fincher — 762-394-6145
              </div>

              <div>
                📞 Xander Graham — 423-310-7764
              </div>

              <div>
                📍 North Georgia
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-blue-950 rounded-[40px] p-10 text-white shadow-2xl">

            <h3 className="text-4xl font-black">
              GX Curbside Cleaning
            </h3>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed">
              We help keep homes, neighborhoods,
              and businesses clean with reliable
              exterior cleaning services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:7623946145"
                className="bg-white text-blue-900 px-6 py-4 rounded-2xl font-black hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="#booking"
                className="border-2 border-white px-6 py-4 rounded-2xl font-black hover:bg-white hover:text-blue-900 transition"
              >
                Book Service
              </a>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
