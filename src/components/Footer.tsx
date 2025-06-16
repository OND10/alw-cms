
import { Link } from "react-router-dom";
import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Wheat, Utensils } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-300 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-green-500 rounded-xl flex items-center justify-center relative">
                <Wheat className="h-6 w-6 text-white absolute" />
                <Utensils className="h-4 w-4 text-yellow-200 absolute top-1 right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">AlWalid</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Three generations of culinary excellence, bringing authentic flavors and premium food products 
              to families worldwide. From our kitchen to yours.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-green-200 hover:text-yellow-300 cursor-pointer transition-colors hover-scale" />
              <Twitter className="h-5 w-5 text-green-200 hover:text-yellow-300 cursor-pointer transition-colors hover-scale" />
              <Facebook className="h-5 w-5 text-green-200 hover:text-yellow-300 cursor-pointer transition-colors hover-scale" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-semibold text-yellow-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-green-100 hover:text-yellow-300 transition-colors hover-scale">About Us</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-yellow-300 transition-colors hover-scale">Products</Link></li>
              <li><Link to="/services" className="text-green-100 hover:text-yellow-300 transition-colors hover-scale">Services</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-yellow-300 transition-colors hover-scale">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold text-yellow-300">Our Specialties</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-green-100">Premium Spreads</span></li>
              <li><span className="text-green-100">Traditional Condiments</span></li>
              <li><span className="text-green-100">Quality Cooking Oils</span></li>
              <li><span className="text-green-100">International Distribution</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-semibold text-yellow-300">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 hover-scale">
                <MapPin className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">123 Food Industry Sana'a, Yemen</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <Phone className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">+967 779136337</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <Mail className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">info@alwalid.com</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <Globe className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">www.alwalid.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center text-sm text-green-200 animate-fade-in">
          <p>&copy; 2025 AlWalid. All rights reserved. | Privacy Policy | Terms of Service</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
