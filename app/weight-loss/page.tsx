'use client';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function WeightLossPage() {
  const plans = [
    {
      title: "Premium Launch",
      features: [
        "Complete program setup",
        "All templates & protocols",
        "Staff training",
        "30-day support",
        "Two on-site days",
        "Priority access"
      ],
      type: "TURNKEY SOLUTION",
      color: "bg-[#4A4773]"
    },
    {
      title: "Essential Program",
      features: [
        "Program structure",
        "Complete protocols",
        "Templates & compliance",
        "One strategy session",
        "30 days email support"
      ],
      type: "GUIDED SETUP",
      color: "bg-[#7D7ABC]",
      featured: true
    },
    {
      title: "Hourly Consultation",
      features: [
        "Targeted support",
        "Program optimization",
        "Troubleshooting",
        "Flexible scheduling"
      ],
      type: "AS-NEEDED EXPERTISE",
      color: "bg-[#BDB8E3]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F0F5] via-white to-[#F0F0F5]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A4773] mb-4">
            Weight Loss Management Consulting
          </h1>
          <p className="text-xl text-gray-600">
            Serene Sequel Nursing Consulting Inc.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                hover:-translate-y-1 overflow-hidden
              `}
            >
              <div className={`${plan.color} text-white px-8 py-6`}>
                <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${plan.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div 
                  className={`
                    ${plan.color} text-white text-sm font-medium px-4 py-2 
                    rounded-lg inline-block
                  `}
                >
                  {plan.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pb-24">
          <Link
            href="#contact"
            className="inline-flex items-center bg-[#7D7ABC] text-white px-12 py-5 rounded-xl 
                     font-medium hover:bg-[#4A4773] transition-all duration-300 
                     shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Schedule your complimentary consultation today!
          </Link>
        </div>
      </div>
    </div>
  );
} 