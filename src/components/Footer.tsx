export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-600 py-6 bg-black/20 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">About Us</h3>
            <p className="text-sm text-gray-300 content">
              ZAZA COMMUNITY delivers the latest updates in technology, business, and culture
              with a unique perspective on today's rapidly changing world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 content">
              <li><a href="#" className="text-[#00ffff] hover:underline text-sm">Home</a></li>
              <li><a href="#" className="text-[#00ffff] hover:underline text-sm">News Archive</a></li>
              <li><a href="#" className="text-[#00ffff] hover:underline text-sm">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h3>
            <ul className="space-y-2 content">
              <li><a href="#" className="text-[#00ffff] hover:underline text-sm">Twitter</a></li>
              <li><a href="#" className="text-[#00ffff] hover:underline text-sm">Facebook</a></li>
              <li><a href="#" className="text-[#00ffff] hover:underline text-sm">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-300 content">© {currentYear} ZAZA COMMUNITY. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-[#00ffff] hover:underline text-sm content">Privacy Policy</a>
            <a href="#" className="text-[#00ffff] hover:underline text-sm content">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 