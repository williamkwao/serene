'use client';
import { useState, Suspense } from 'react';
import Navigation from '../components/Navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import { sendConsultationEmail } from '../actions/email';
import Link from 'next/link';

function ConsultationFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showSuccess = searchParams.get('success') === 'true';
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceInterest: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-[#BDB8E3]/30 focus:outline-none focus:ring-2 focus:ring-[#7D7ABC] focus:border-transparent text-[#4A4773]";

  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Business Details" },
    { number: 3, title: "Additional Info" }
  ];

  // Validation functions
  const validateStep1 = () => {
    return formData.fullName.trim() !== '' && 
           formData.email.trim() !== '';
  };

  const validateStep2 = () => {
    return formData.serviceInterest !== '';
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await sendConsultationEmail(formData);
      
      if (result.error) {
        setError(result.error);
        return;
      }

      router.push('/consultation?success=true');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F0F5] via-white to-[#F0F0F5]">
        <Navigation />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-24">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(125,122,188,0.08)] text-center">
            <div className="w-16 h-16 bg-[#7D7ABC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#7D7ABC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#4A4773] mb-4">
              Thank You!
            </h1>
            <p className="text-gray-600 mb-8">
              Your consultation request has been received. We&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-[#7D7ABC] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#4A4773] transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F0F5] via-white to-[#F0F0F5]">
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-24">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(125,122,188,0.08)]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A4773] mb-4 text-center">
            Schedule a Consultation
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Please fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>

          {/* Stepper */}
          <div className="flex justify-between items-center mb-12 relative">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center relative z-10">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  transition-colors duration-300
                  ${step >= s.number ? 'bg-[#7D7ABC] text-white' : 'bg-[#BDB8E3]/20 text-[#4A4773]'}
                `}>
                  {s.number}
                </div>
                <div className="text-sm mt-2 font-medium text-[#4A4773]">{s.title}</div>
              </div>
            ))}
            {/* Progress line */}
            <div className="absolute top-5 left-0 h-[2px] bg-[#BDB8E3]/20 w-full -z-10" />
            <div 
              className="absolute top-5 left-0 h-[2px] bg-[#7D7ABC] transition-all duration-300 -z-10"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault(); // Prevent form submission
              if (step === 3) {
                handleSubmit(e);
              }
            }} 
            className="space-y-6"
          >
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#4A4773] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className={inputClasses}
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4A4773] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#4A4773] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={inputClasses}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-[#4A4773] mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className={inputClasses}
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-[#4A4773] mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="serviceInterest"
                    required
                    className={`${inputClasses} placeholder-gray-400`}
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
                  >
                    <option value="" className="text-gray-400">Select a service</option>
                    <option value="weight-loss">Weight Loss Management</option>
                    <option value="iv-therapy">IV Hydration Therapy</option>
                    <option value="good-faith">Good Faith Exams</option>
                    <option value="protocol">Protocol Writing</option>
                    <option value="assessment">Business Assessment</option>
                    <option value="training">Staff Training</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A4773] mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={inputClasses}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-3 rounded-xl font-medium text-[#7D7ABC] hover:bg-[#7D7ABC]/10 transition-all duration-300"
                >
                  Back
                </button>
              )}
              <div className={step > 1 ? '' : 'ml-auto'}>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNext();
                    }}
                    disabled={step === 1 ? !validateStep1() : !validateStep2()}
                    className={`
                      px-12 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5
                      ${(step === 1 && validateStep1()) || (step === 2 && validateStep2())
                        ? 'bg-[#7D7ABC] text-white hover:bg-[#4A4773]'
                        : 'bg-[#BDB8E3]/50 text-white cursor-not-allowed'}
                    `}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className={`
                      bg-[#7D7ABC] text-white px-12 py-4 rounded-xl font-medium 
                      transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5
                      ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4A4773]'}
                    `}
                  >
                    {loading ? 'Sending...' : 'Submit Request'}
                  </button>
                )}
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-red-500 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConsultationForm() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-[#F0F0F5] via-white to-[#F0F0F5]">
        <Navigation />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-24">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(125,122,188,0.08)]">
            <div className="animate-pulse">
              <div className="h-8 bg-[#BDB8E3]/20 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-[#BDB8E3]/20 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <ConsultationFormContent />
    </Suspense>
  );
} 