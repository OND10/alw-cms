
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Wheat, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "Consulting", href: "/services#consulting" },
    { name: "Digital Solutions", href: "/services#digital" },
    { name: "International Trade", href: "/services#trade" },
    { name: "Project Management", href: "/services#management" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 via-yellow-500 to-green-700 rounded-xl flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Wheat className="h-6 w-6 text-white absolute rotate-12" />
              <Utensils className="h-4 w-4 text-yellow-200 absolute top-1 right-1 rotate-45" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-xl"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">AlWalid</span>
              <span className="text-xs text-slate-500 -mt-1">Premium Food Products</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive("/") ? "text-green-600" : "text-slate-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive("/about") ? "text-green-600" : "text-slate-700"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive("/products") ? "text-green-600" : "text-slate-700"
              }`}
            >
              Products
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors hover:text-green-600 ${
                isActive("/services") ? "text-green-600" : "text-slate-700"
              }`}>
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href} className="w-full px-4 py-2 hover:bg-slate-50">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive("/contact") ? "text-green-600" : "text-slate-700"
              }`}
            >
              Contact
            </Link>
            
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-slate-700 hover:text-green-600 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-700 hover:text-green-600 transition-colors">About Us</Link>
              <Link to="/products" className="text-slate-700 hover:text-green-600 transition-colors">Products</Link>
              <Link to="/services" className="text-slate-700 hover:text-green-600 transition-colors">Services</Link>
              <Link to="/contact" className="text-slate-700 hover:text-green-600 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
