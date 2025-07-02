
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, DollarSign, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CostSavings = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
            Adda Insights
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Your Training Lab Costs Are So High (And How to Cut Them by 70%)
          </h1>
          <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-8">
            <p className="text-xl text-red-800 font-medium italic">
              "We thought the cloud would save us money. Instead, it drained our budget."
            </p>
          </div>
          <p className="text-lg text-gray-700">
            If you're still paying per-hour for labs, juggling surprise invoices, and scaling infrastructure manually—you're burning money.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 */}
          <Card className="mb-8 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-600">
                <AlertTriangle className="w-6 h-6 mr-3" />
                The Real Cost of 'DIY' Training Labs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Surprise cloud bills from AWS/Azure</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Time lost to setup & troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>High support overhead from infra failures</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-orange-600">
                <AlertTriangle className="w-6 h-6 mr-3" />
                The 5 Hidden Expenses in Traditional Cloud Labs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Over-provisioning "just in case"</h4>
                  <p className="text-sm text-gray-600">Paying for resources you don't use</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Long setup lead times</h4>
                  <p className="text-sm text-gray-600">Lost opportunities and delayed launches</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Paid support tiers</h4>
                  <p className="text-sm text-gray-600">Premium support costs that add up</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Poor uptime = re-runs & refunds</h4>
                  <p className="text-sm text-gray-600">Revenue loss from failed sessions</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg col-span-2">
                  <h4 className="font-semibold mb-2">Inefficient student usage</h4>
                  <p className="text-sm text-gray-600">Resources running when not needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-green-600">
                <CheckCircle className="w-6 h-6 mr-3" />
                The CloudAdda Cost Advantage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Quote-based pricing (not per-hour)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Human support included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Labs ready in 3 hours, not 3 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>No need to over-provision resources</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 4 - Savings */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-green-700">
                <TrendingDown className="w-6 h-6 mr-3" />
                What Trainers Actually Save
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15–20 hrs</div>
                  <p className="text-sm text-gray-600">Time saved per trainer/month</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹1.5–2L</div>
                  <p className="text-sm text-gray-600">Average cost savings/month</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3.2 → 4.8</div>
                  <p className="text-sm text-gray-600">Student satisfaction improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Line */}
          <Card className="mb-12 bg-gradient-to-r from-purple-600 to-orange-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-lg mb-6">
                If you're serious about scaling, you need infra that doesn't fight you—or your CFO.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Get a Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CostSavings;
