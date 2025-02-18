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
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#FFE8E0] via-white to-[#FFE8E0]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header/Hero Section */}
        <header className="pt-32 pb-24 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Transform Your Medical Aesthetics Practice
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Expert consulting services for medspas and aesthetic practices. 
                Elevate your business with industry-leading protocols and growth strategies.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center bg-[#40A99B] text-white px-12 py-5 rounded-xl font-medium hover:bg-[#368F83] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/landing.png"
                alt="Medical Aesthetics Consulting"
                width={600}
                height={400}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                priority
              />
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section className="py-24" id="services">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
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
              <div key={index} className="group bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100/50 hover:-translate-y-1">
                <div className="mb-8">
                  <service.icon className="h-12 w-12 text-[#40A99B] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white/80 backdrop-blur-lg rounded-3xl my-24 px-16 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
            Why Choose Serene Sequel
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#40A99B] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">10+</div>
              <p className="text-gray-600 text-lg">Years of Industry Experience</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#40A99B] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">100+</div>
              <p className="text-gray-600 text-lg">Satisfied Clients</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#40A99B] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
              <p className="text-gray-600 text-lg">Client Retention Rate</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24" id="contact">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Schedule a free consultation to discuss how we can help grow your business.
            </p>
            <p className="text-2xl text-[#40A99B] font-medium mb-12">
              hello@serenesequel.com
            </p>
            <Link
              href="mailto:contact@serenesequel.com"
              className="inline-flex items-center bg-[#40A99B] text-white px-12 py-5 rounded-xl font-medium hover:bg-[#368F83] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us Today
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-gray-100">
          <p className="text-gray-500">
            © 2024 Serene Sequel Nursing Consulting Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
