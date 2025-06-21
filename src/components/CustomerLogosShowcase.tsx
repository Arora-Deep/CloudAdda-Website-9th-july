
import React from "react";

const CustomerLogosShowcase = () => {
  // Mock customer data - replace with real customer logos
  const customers = [
    { name: "TechCorp", logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=TechCorp" },
    { name: "DataSystems", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=DataSys" },
    { name: "CloudTech", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=CloudTech" },
    { name: "DevOps Pro", logo: "https://via.placeholder.com/120x60/7C2D12/FFFFFF?text=DevOps" },
    { name: "AI Solutions", logo: "https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=AI+Sol" },
    { name: "SecureNet", logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=SecureNet" },
    { name: "CodeAcademy", logo: "https://via.placeholder.com/120x60/EA580C/FFFFFF?text=CodeAcd" },
    { name: "TrainMax", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=TrainMax" },
    { name: "TechU", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=TechU" },
    { name: "SkillForge", logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=SkillForge" },
    { name: "LearnHub", logo: "https://via.placeholder.com/120x60/7C2D12/FFFFFF?text=LearnHub" },
    { name: "EduTech", logo: "https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=EduTech" },
    { name: "ProTrain", logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=ProTrain" },
    { name: "BootCamp", logo: "https://via.placeholder.com/120x60/EA580C/FFFFFF?text=BootCamp" },
    { name: "CyberEd", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=CyberEd" },
    { name: "DevSchool", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=DevSchool" },
    { name: "MLAcademy", logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=MLAcdmy" },
    { name: "CloudEdu", logo: "https://via.placeholder.com/120x60/7C2D12/FFFFFF?text=CloudEdu" },
    { name: "TechTrain", logo: "https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=TechTrain" },
    { name: "SkillUp", logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=SkillUp" },
    { name: "CodeCamp", logo: "https://via.placeholder.com/120x60/EA580C/FFFFFF?text=CodeCamp" },
    { name: "DataLearn", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=DataLearn" },
    { name: "TechMaster", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=TechMstr" },
    { name: "DevAcademy", logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=DevAcdmy" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Training Companies
          </h2>
          <p className="text-xl text-gray-600">
            Join 500+ training organizations that trust CloudAdda for their infrastructure needs
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {customers.map((customer, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Training Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50,000+</div>
                <div className="text-gray-600">Students Trained Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogosShowcase;
