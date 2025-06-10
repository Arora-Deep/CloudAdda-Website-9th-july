
import { Calculator, TrendingUp, DollarSign, Users } from "lucide-react";
import { useState } from "react";

const CloudDesktopsROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [currentCost, setCurrentCost] = useState(80000);

  const cloudAddaCost = employees * 4399 * 12; // Team plan annual cost
  const savings = currentCost - cloudAddaCost;
  const roi = ((savings / cloudAddaCost) * 100).toFixed(0);

  const benefits = [
    {
      title: "Hardware Savings",
      amount: `₹${((employees * 60000) - cloudAddaCost).toLocaleString()}`,
      description: "No laptop purchases, replacements, or upgrades needed",
      icon: DollarSign
    },
    {
      title: "IT Management Reduction",
      amount: `₹${(employees * 2000 * 12).toLocaleString()}`,
      description: "90% reduction in IT support tickets and maintenance",
      icon: Users
    },
    {
      title: "Productivity Gains",
      amount: `₹${(employees * 15000).toLocaleString()}`,
      description: "30% faster workflows and zero downtime losses",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Calculate Your <span className="text-green-600">ROI</span> in 60 Seconds
          </h2>
          <p className="text-xl text-gray-600">See exactly how much CloudAdda will save your business this year.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-8">
              <Calculator className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 text-2xl font-bold text-orange-600">{employees}</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual IT Budget</label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 text-2xl font-bold text-orange-600">₹{currentCost.toLocaleString()}</div>
              </div>

              <div className="bg-green-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">₹{savings.toLocaleString()}</div>
                <div className="text-lg text-green-700">Annual Savings</div>
                <div className="text-sm text-green-600 mt-2">{roi}% ROI in Year 1</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">{benefit.amount}</div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg">
            Get Detailed ROI Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsROICalculator;
