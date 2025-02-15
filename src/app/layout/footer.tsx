export default function FooterPage() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div id="footer" className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Header</h3>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-1">
              <li>Careers</li>
              <li>Investors</li>
              <li>Press</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-1">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Compliance</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          @2025 Agentia World. Powered by Panaversity. All rights reserved.
        </div>
      </footer>
    );
  }
  