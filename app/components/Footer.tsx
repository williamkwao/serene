import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#7D7ABC] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-white font-semibold text-xl mb-4">
              Serene Sequel
            </h3>
            <p className="text-white/80 max-w-md">
              Expert consulting services for medspas and aesthetic practices. 
              Elevate your business with industry-leading protocols and growth strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#weight-loss" className="text-white/80 hover:text-white transition-colors">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-white/80 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@serenesequel.com" className="text-white/80 hover:text-white transition-colors">
                  hello@serenesequel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/80">
            © {new Date().getFullYear()} Serene Sequel Nursing Consulting Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 