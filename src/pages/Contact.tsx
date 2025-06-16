
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Main Production Facility",
      country: "Primary Location",
      address: "123 AlWalid Industrial Zone\nFood Production District",
      phone: "+967 779136337",
      email: "production@alwalid.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      city: "European Distribution",
      country: "European Hub", 
      address: "456 Trade Center\nEuropean Market District",
      phone: "+44 20 1234 5678",
      email: "europe@alwalid.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT"
    },
    {
      city: "Middle East Office",
      country: "Regional Hub",
      address: "789 Business District\nDubai, UAE",
      phone: "+971 4 123 4567",
      email: "middleeast@alwalid.com",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM GST"
    }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our customer service team",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our food experts",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a product consultation",
      action: "Schedule",
      available: "Book anytime"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-600 to-yellow-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-green-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold">Contact AlWalid</h1>
            <p className="text-xl text-green-100">
              Ready to bring premium AlWalid products to your market? Let's discuss 
              wholesale opportunities and how we can serve your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{method.description}</p>
                  <p className="text-green-600 text-sm font-medium mb-3">{method.available}</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wholesale">Wholesale Purchasing</SelectItem>
                          <SelectItem value="distribution">Distribution Partnership</SelectItem>
                          <SelectItem value="private-label">Private Label Services</SelectItem>
                          <SelectItem value="export">Export Opportunities</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={5}
                        className="border-green-200 focus:border-green-500"
                        placeholder="Tell us about your business needs and how we can help..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 hover-scale">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We're here to help you bring AlWalid's premium products to your customers. 
                  Contact us for wholesale opportunities, distribution partnerships, or any questions 
                  about our food products.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">sales@alwalid.com</p>
                    <p className="text-slate-600">info@alwalid.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+967 779136337</p>
                    <p className="text-slate-600">Mon-Fri 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Locations</h2>
            <p className="text-xl text-slate-600">
              Find an AlWalid office near you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{office.city}</h3>
                  <p className="text-green-600 font-medium mb-4">{office.country}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">{office.email}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">{office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-yellow-200 rounded-full animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">Ready to Partner with AlWalid?</h2>
            <p className="text-xl text-green-100">
              Join our growing network of distributors and retailers bringing premium AlWalid products 
              to customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-green-600 hover:text-green-700 hover-scale">
                <a href="#contact-form">
                  Start Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600 hover-scale">
                <a href="/products">View Our Products</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
