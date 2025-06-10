
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

const CloudDesktopsRealityCheck = () => {
  const horrorStories = [
    {
      scenario: "The Monday Morning Laptop Crash",
      reality: "Your laptop died over the weekend. You're debugging hardware instead of writing code. The client demo is in 2 hours.",
      pain: "Your entire development environment is trapped on a broken machine"
    },
    {
      scenario: "The 'Works on My Machine' Debug",
      reality: "Your code works perfectly locally but breaks in production. 6 hours later, you discover it's a version mismatch.",
      pain: "Different environments mean endless compatibility issues"
    },
    {
      scenario: "The New Developer Onboarding Week",
      reality: "New hire spends 3 days setting up local environment. Half the team helps troubleshoot weird installation errors.",
      pain: "Productivity lost while fighting with environment setup"
    },
    {
      scenario: "The Security Audit Panic",
      reality: "IT discovers sensitive code on personal laptops. Emergency security review shuts down development for days.",
      pain: "Compliance nightmares and productivity grinding to a halt"
    }
  ];

  const joyStories = [
    {
      scenario: "The Monday Morning Peace of Mind",
      reality: "Your laptop died? No problem. Log in from any device and your entire development environment is exactly as you left it.",
      joy: "Hardware failures become minor inconveniences instead of disasters"
    },
    {
      scenario: "The Consistent Environment Victory",
      reality: "Dev, staging, and production run identical environments. If it works in dev, it works everywhere. Every time.",
      joy: "No more 'works on my machine' mysteries"
    },
    {
      scenario: "The 10-Minute Onboarding Miracle",
      reality: "New hire gets full access to configured environment in minutes. They're committing code the same day.",
      joy: "New team members productive from day one"
    },
    {
      scenario: "The Security Compliance Win",
      reality: "All code stays in secure cloud infrastructure. Zero data on personal devices. IT teams sleep peacefully.",
      joy: "Security compliance becomes automatic, not painful"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Developer's Daily Reality Check</h2>
          <p className="text-xl text-gray-600">Stop us when this sounds familiar...</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* The Horror Stories */}
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-8 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3" />
              Your Current Remote Work Nightmare
            </h3>

            <div className="space-y-6">
              {horrorStories.map((horror, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">{horror.scenario}</h4>
                  <p className="text-gray-700 mb-3">{horror.reality}</p>
                  <p className="text-sm text-red-600 italic font-semibold">{horror.pain}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The CloudAdda Solution */}
          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-8 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              Your CloudAdda Reality
            </h3>

            <div className="space-y-6">
              {joyStories.map((joy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">{joy.scenario}</h4>
                  <p className="text-gray-700 mb-3">{joy.reality}</p>
                  <p className="text-sm text-green-600 italic font-semibold">{joy.joy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 inline-block">
            <div className="text-3xl font-bold text-blue-600 mb-2">Join 5,000+ Happy Development Teams</div>
            <div className="text-gray-600 mb-4">Who stopped fighting infrastructure and started building</div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
              End Your Desktop Nightmare Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsRealityCheck;
