'use client';
import Navigation from './components/Navigation';
import Image from "next/image";
import Link from 'next/link';
import { 
  ScaleIcon, 
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#F0F0F5] via-white to-[#F0F0F5]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header/Hero Section */}
        <header className="pt-32 pb-24 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-[#4A4773] mb-8 leading-[1.1]">
                Transform Your Medical Aesthetics Practice
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Expert consulting services for medspas and aesthetic practices. 
                Elevate your business with industry-leading protocols and growth strategies.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center bg-[#7D7ABC] text-white px-12 py-5 rounded-xl font-medium hover:bg-[#4A4773] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="mt-12 lg:mt-0 block">
              <Image
                src="/purple-illustration.jpg"
                alt="Medical Aesthetics Consulting"
                width={600}
                height={400}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full"
                priority
              />
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section className="py-24" id="services">
          <h2 className="text-4xl font-bold text-center mb-20 text-[#4A4773]">
            Our Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weight Loss Management",
                description: "Comprehensive programs and protocols for sustainable results",
                icon: ScaleIcon
              },
              {
                title: "IV Hydration Therapy",
                description: "Setup and optimization of IV therapy services",
                icon: BeakerIcon
              },
              {
                title: "Good Faith Exams",
                description: "Compliance and best practices implementation",
                icon: ClipboardDocumentCheckIcon
              },
              {
                title: "Protocol Writing",
                description: "Custom medical protocols tailored to your practice",
                icon: DocumentTextIcon
              },
              {
                title: "Business Assessment",
                description: "In-depth analysis and growth strategy development",
                icon: ChartBarIcon
              },
              {
                title: "Staff Training",
                description: "Professional development and skill enhancement",
                icon: UserGroupIcon
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_4px_20px_rgba(125,122,188,0.08)] hover:shadow-[0_4px_25px_rgba(125,122,188,0.15)] transition-all duration-300 border border-[#BDB8E3]/20 hover:-translate-y-1">
                <div className="mb-8">
                  <service.icon className="h-12 w-12 text-[#7D7ABC] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#4A4773]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Weight Loss Management Section */}
        <section className="py-24 bg-white/80 backdrop-blur-lg rounded-3xl my-24 px-8 md:px-16 shadow-[0_4px_20px_rgba(125,122,188,0.08)]" id="weight-loss">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4A4773] mb-4">
              Weight Loss Management Consulting
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, index) => (
              <div 
                key={index}
                className={`
                  bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                  hover:-translate-y-1 overflow-hidden flex flex-col
                `}
              >
                <div className={`${plan.color} text-white px-8 py-6`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${plan.color} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div 
                    className={`
                      text-sm font-medium mt-8
                      ${plan.color === 'bg-[#BDB8E3]' 
                        ? 'text-[#4A4773]'
                        : plan.color.replace('bg-', 'text-')
                      }
                    `}
                  >
                    {plan.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white/80 backdrop-blur-lg rounded-3xl my-24 px-16 shadow-[0_4px_20px_rgba(125,122,188,0.08)]">
          <h2 className="text-4xl font-bold text-center mb-20 text-[#4A4773]">
            Why Choose Serene Sequel
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#7D7ABC] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">10+</div>
              <p className="text-gray-600 text-lg">Years of Industry Experience</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#7D7ABC] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">20+</div>
              <p className="text-gray-600 text-lg">States Served</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#7D7ABC] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-gray-600 text-lg">Compliance Rate</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24" id="contact">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#4A4773]">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Schedule a free consultation to discuss how we can help grow your business.
            </p>
            <p className="text-2xl text-[#7D7ABC] font-medium mb-12">
              hello@serenesequel.com
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center bg-[#7D7ABC] text-white px-12 py-5 rounded-xl font-medium hover:bg-[#4A4773] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us Today
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
