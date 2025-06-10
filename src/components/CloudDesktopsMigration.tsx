
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Activity, Wrench, Users } from "lucide-react";

const CloudDesktopsMigration = () => {
  const migrationStats = [
    { metric: "Migration Success Rate", value: "100%", description: "Every team successfully migrated in 3 years" },
    { metric: "Average Migration Time", value: "90min", description: "From planning to productive development" },
    { metric: "Developer Satisfaction", value: "98.5%", description: "Post-migration happiness score" },
    { metric: "Performance Improvement", value: "240%", description: "Average development speed increase" }
  ];

  const migrationReasons = [
    "Dedicated migration specialist for your team",
    "Pre-migration environment audit and optimization",
    "Parallel setup (your current workflow stays active)",
    "Gradual team onboarding with training sessions",
    "30-day support period with priority assistance",
    "Complete satisfaction guarantee with easy rollback"
  ];

  const migrationSteps = [
    {
      step: "1",
      title: "Environment Assessment",
      description: "Our engineers analyze your current development setup and create a customized migration plan. Completely free, no strings attached.",
      icon: Activity
    },
    {
      step: "2", 
      title: "Seamless Migration",
      description: "We replicate your exact environment in the cloud. Your team keeps working while we handle the technical heavy lifting.",
      icon: Wrench
    },
    {
      step: "3",
      title: "Team Training & Support",
      description: "Personalized onboarding for your team. If anyone's not happy, we'll migrate you back for free within 30 days.",
      icon: Users
    }
  ];

  return (
    <>
      {/* Migration Success Rate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Migration Success That Speaks Volumes</h2>
            <p className="text-xl text-gray-600">Teams migrate in minutes, not days</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Seamless migration flow with happy development teams transitioning to cloud desktops]
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {migrationStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="font-semibold text-gray-900 mb-2">{stat.metric}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Migrations Succeed</h3>
                <ul className="space-y-3">
                  {migrationReasons.map((reason, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Recent Migration Testimonial</h4>
                <blockquote className="italic text-gray-700 mb-4">
                  "We migrated our entire 12-person development team in one afternoon. Zero downtime, zero frustration. Our builds are now 3x faster and everyone loves the consistency."
                </blockquote>
                <div className="text-sm text-gray-600">
                  <strong>Kavya Reddy</strong> - VP Engineering, SaaS Platform
                </div>
              </div>

              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 w-full">
                Get Free Migration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Assistance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We'll Handle Your Migration (For Free)</h2>
            <p className="text-xl text-gray-600">Zero-downtime transition from any setup</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {migrationSteps.map((step, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-12 py-4 text-lg">
              Start Free Migration Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-600 mt-4">Usually completed in 1-2 hours, always free, zero commitment</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudDesktopsMigration;
