import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div className="text-gray-700 border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
          <div className="w-full md:w-1/4 pr-8">
            <h3 className="text-lg font-medium text-green-600">+01 123 456 789</h3>
            <div className="mt-3 text-sm space-y-1">
              <p>Monday - Friday : 9:00 to 5:00</p>
              <p>Saturday : 9:00 to 3:00</p>
              <div className="flex items-center mt-2">
                <Mail size={16} className="text-green-500 mr-2" />
                <a href="mailto:demo@example.com" className="text-green-600 hover:underline">
                  demo@example.com
                </a>
              </div>
              <p className="mt-2">99 New Theme St. XY, USA 12345,</p>
              <p>Beside the Sun point land.</p>
              <button className="flex items-center text-green-600 hover:underline mt-2">
                Show on map
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 mt-6 md:mt-0 w-full md:w-3/4">
            {/* Sections */}
            {[
              {
                title: "Get to know Us",
                links: ["About Us", "Term & Policy", "Careers", "News & Blog", "Contact Us"]
              },
              {
                title: "Information",
                links: ["Help Center", "Feedback", "FAQs", "Size Guide", "Payments"]
              },
              {
                title: "Orders & Returns",
                links: ["Track Order", "Delivery", "Services", "Returns", "Exchange"]
              },
              {
                title: "Our Store",
                links: ["Affiliate", "Best Seller", "New Products", "On Sale", "Featured"]
              }
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-base font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="hover:text-green-600">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-xl font-bold text-blue-600">HealthMart</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {[
                  { icon: "Delivery icon", text: "Free delivery over $100" },
                  { icon: "Return icon", text: "Easy return policy" },
                  { icon: "Money back icon", text: "100% Money back" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center ml-0 md:ml-6">
                    <img src="/api/placeholder/24/24" alt={feature.icon} className="mr-2" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm text-gray-600">
              © 2025 HealthMart_Medicine 04 - WordPress Theme by Avanam
            </div>

            <div className="flex items-center space-x-4">
              {["facebook", "twitter", "instagram", "dribbble"].map((name, i) => (
                <a key={i} href="#" className="text-gray-600 hover:text-blue-600">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    {/* Placeholder icon (use lucide or SVG here) */}
                    <span className="text-xs uppercase">{name[0]}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 md:mt-0">
              <img src="/api/placeholder/200/30" alt="Payment methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
