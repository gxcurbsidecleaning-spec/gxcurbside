import React from "react";

export default function TrashCleaningWebsite() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-900">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-blue-900/70" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-7xl md:text-8xl font-black text-white leading-none">
              GX CURBSIDE
            </h1>

            <h1 className="text-7xl md:text-8xl font-black text-blue-300 leading-none mb-8">
              CLEANING
            </h1>

            <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">
              Clean Spaces. Better Places.
            </h2>

            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-10">
              Professional trash can cleaning,
              pavement powerwashing, and window
              cleaning services across North Georgia.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              {/* BOOK NOW */}
              <a
                href="https://calendly.com/gxcurbsidecleaning/gx-curbside-booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-blue-800 font-bold px-8 py-4 rounded-2xl text-xl hover:scale-105 transition">
                  Book Now
                </button>
              </a>

              {/* CONTACT US */}
              <a href="#contact">
                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl text-xl hover:bg-white hover:text-blue-800 transition">
                  Contact Us
                </button>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-white shadow-2xl">

            <h2 className="text-5xl font-black mb-8">
              Why Choose Us?
            </h2>

            <div className="space-y-6 text-2xl">

              <div className="flex items-center gap-4">
                ✅ Professional & Reliable
              </div>

              <div className="flex items-center gap-4">
                🌱 Eco-Friendly Solutions
              </div>

              <div className="flex items-center gap-4">
                ⭐ Satisfaction Guaranteed
              </div>

              <div className="flex items-center gap-4">
                📍 Serving North Georgia
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-5xl font-black text-blue-950 mb-6">
              Contact Us
            </h2>

            <p className="text-xl text-gray-700 mb-10">
              Ready to get your property cleaned?
              Reach out today and schedule your service.
            </p>

            <div className="space-y-6 text-2xl font-semibold">

              <div>
                📞 Gavin Fincher —
                <a
                  href="tel:17623946145"
                  className="text-blue-700 ml-2"
                >
                  762-394-6145
                </a>
              </div>

              <div>
                💬 Gavin Text —
                <a
                  href="sms:17623946145"
                  className="text-blue-700 ml-2"
                >
                  Text Gavin
                </a>
              </div>

              <div>
                📞 Xander Graham —
                <a
                  href="tel:14233107764"
                  className="text-blue-700 ml-2"
                >
                  423-310-7764
                </a>
              </div>

              <div>
                💬 Xander Text —
                <a
                  href="sms:14233107764"
                  className="text-blue-700 ml-2"
                >
                  Text Xander
                </a>
              </div>

              <div>
                📍 North Georgia
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-blue-800 text-white rounded-3xl p-10 shadow-2xl">

            <h3 className="text-4xl font-black mb-6">
              GX Curbside Cleaning
            </h3>

            <p className="text-xl leading-relaxed mb-8">
              We help keep homes, neighborhoods,
              and businesses clean with reliable
              exterior cleaning services.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* CALL */}
              <a href="tel:17623946145">
                <button className="bg-white text-blue-800 font-bold px-8 py-4 rounded-2xl text-xl">
                  Call Now
                </button>
              </a>

              {/* TEXT */}
              <a href="sms:17623946145">
                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl text-xl">
                  Text Now
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
