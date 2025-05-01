import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3v2h-2c-.552 0-1.053.225-1.414.586S13 6.448 13 7v3c0 .552.448 1 1 1h2.719l-.5 2h-2.219c-.552 0-1 .448-1 1v7h-2v-7c0-.552-.448-1-1-1H8v-2h2c.552 0 1-.448 1-1V7c0-1.105.447-2.103 1.172-2.828S14.723 3 15.828 3H17z" />
        </svg>
      )
    },
    {
      name: 'X',
      href: '#',
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 23 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.969 10.157l8.738-10.157h-2.071l-7.587 8.819-6.06-8.819H.001l9.164 13.336-9.164 10.651h2.071l8.012-9.313 6.4 9.313h6.989l-9.503-13.831z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1C5.343 1 3.842 1.673 2.757 2.757S1 5.343 1 7v10c0 1.657.673 3.158 1.757 4.243S5.343 23 7 23h10c1.657 0 3.158-.673 4.243-1.757S23 18.657 23 17V7c0-1.657-.673-3.158-1.757-4.243S18.657 1 17 1H7zm0 2h10c1.105 0 2.103.447 2.828 1.172S21 5.895 21 7v10c0 1.105-.447 2.103-1.172 2.828S18.105 21 17 21H7c-1.105 0-2.103-.447-2.828-1.172S3 18.105 3 17V7c0-1.105.447-2.103 1.172-2.828S5.895 3 7 3zm9.5 4.5a1 1 0 110 2 1 1 0 010-2zm-5.5 2c1.908 0 3.5 1.592 3.5 3.5s-1.592 3.5-3.5 3.5-3.5-1.592-3.5-3.5 1.592-3.5 3.5-3.5z" />
        </svg>
      )
    },
    {
      name: 'Pinterest',
      href: '#',
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM8 14.93a6.93 6.93 0 01-2.053-.31c.281-.458.706-1.216.862-1.816.084-.325.431-1.647.431-1.647.225.431.888.797 1.587.797 2.091 0 3.597-1.922 3.597-4.313 0-2.291-1.869-4.003-4.272-4.003-2.991 0-4.578 2.009-4.578 4.194 0 1.016.541 2.281 1.406 2.684.131.063.2.034.231-.094.022-.097.141-.566.194-.787.016-.069.009-.131-.047-.2-.287-.347-.516-.988-.516-1.581 0-1.528 1.156-3.009 3.128-3.009 1.703 0 2.894 1.159 2.894 2.819 0 1.875-.947 3.175-2.178 3.175-.681 0-1.191-.563-1.025-1.253.197-.825.575-1.713.575-2.306 0-.531-.284-.975-.878-.975-.697 0-1.253.719-1.253 1.684 0 .612.206 1.028.206 1.028s-.688 2.903-.813 3.444c-.141.6-.084 1.441-.025 1.988A6.942 6.942 0 018 14.93z" />
        </svg>
      )
    }
  ];
  
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
                  { icon: "Delivery icon", text: "Free delivery over $100" ,img: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/03/footer-icon01.svg"},
                  { icon: "Return icon", text: "Easy return policy" , img:"https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/03/footer-icon02.svg" },
                  { icon: "Money back icon", text: "100% Money back" ,img : "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/footer-icon03-1.svg"}
                ].map((feature, i) => (
                  <div key={i} className="flex items-center ml-0 md:ml-6">
                    <img style={{height:"35px", width:"40px"}} src={feature.img} alt={feature.icon} className="mr-2" />
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
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  {link.svg}
                </div>
              </a>
            ))}
           </div>

            <div className="mt-4 md:mt-0">
              <img src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/pay.png" alt="Payment methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
