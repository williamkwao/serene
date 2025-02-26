'use client';
import Navigation from './components/Navigation';
import Image from "next/image";
import Link from 'next/link';
import { 
  ScaleIcon, 
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  PlusIcon,
  ArrowPathIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  // Create floating animation for background elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const slowFloating = {
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const spinAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F0F5] via-white to-[#F0F0F5]">
      <Navigation />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-40 left-20 w-72 h-72 bg-[#7D7ABC]/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute top-60 right-40 w-96 h-96 bg-[#4A4773]/10 rounded-full blur-3xl"
          animate={slowFloating}
        />
        
        {/* Medical themed floating elements */}
        <motion.div 
          className="absolute top-60 right-1/4 text-[#4A4773]/20"
          animate={{
            y: [0, 40, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <DocumentTextIcon className="w-32 h-32" />
        </motion.div>

        <motion.div 
          className="absolute bottom-40 left-1/3 text-[#BDB8E3]/30"
          animate={{
            x: [-20, 20, -20],
            y: [0, -15, 0],
            rotate: [0, -180, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ClipboardDocumentCheckIcon className="w-20 h-20" />
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PlusIcon className="w-16 h-16 text-[#7D7ABC]/20" />
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 right-1/3"
          animate={spinAnimation}
        >
          <ArrowPathIcon className="w-28 h-28 text-[#4A4773]/10" />
        </motion.div>

        <motion.div 
          className="absolute bottom-32 left-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <HeartIcon className="w-24 h-24 text-[#BDB8E3]/20" />
        </motion.div>

        {/* DNA double helix inspired shape */}
        <motion.div className="absolute top-1/2 right-20 flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 rounded-full bg-[#7D7ABC]/20"
              animate={{
                x: [0, 20, 0],
                y: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header/Hero Section */}
        <header className="min-h-[calc(100vh-6rem)] flex items-center pt-24 md:pt-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center w-full py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A4773] mb-8 leading-[1.1] min-h-[180px]">
                <TypeAnimation
                  sequence={[
                    'Transform Your Medical Aesthetics Practice',
                    1000,
                  ]}
                  speed={50}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A4773]"
                  repeat={0}
                />
              </h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                Expert consulting services for medspas and aesthetic practices. 
                Elevate your business with industry-leading protocols and growth strategies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
              >
                <Link
                  href="/consultation"
                  className="inline-flex items-center bg-[#7D7ABC] text-white px-12 py-5 rounded-xl font-medium hover:bg-[#4A4773] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/purple-illustration.jpg"
                  alt="Medical Aesthetics Consulting"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 w-full relative z-10"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-32 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A4773] mb-6">
              Our Specialized Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive solutions tailored to elevate your aesthetic medicine practice and ensure compliance with industry standards.
            </p>
          </div>

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
                icon: ScaleIcon
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
            ].map((service) => (
              <div 
                key={service.title}
                className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 hover:bg-white transition-all duration-500 border border-[#BDB8E3]/20 hover:border-[#7D7ABC]/30 hover:shadow-[0_0_40px_rgba(125,122,188,0.1)] relative overflow-hidden"
              >
                {/* Card background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7D7ABC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 bg-[#7D7ABC]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-[#7D7ABC] group-hover:text-[#4A4773] transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4A4773] mb-4 group-hover:translate-x-1 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
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
