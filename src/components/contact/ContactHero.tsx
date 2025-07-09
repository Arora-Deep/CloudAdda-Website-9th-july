
import React from "react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Let's Talk About Your 
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Infrastructure</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Ready to stop fighting servers and start shipping work? We're here to help you make the switch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
