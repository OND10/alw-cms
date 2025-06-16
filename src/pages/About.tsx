
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Users, Award, Target, MapPin, Building, ArrowRight, Heart, Leaf, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We maintain the highest standards in every product we create, ensuring exceptional taste and safety."
    },
    {
      icon: Users,
      title: "Family Heritage",
      description: "Three generations of culinary expertise passed down through our family business."
    },
    {
      icon: Award,
      title: "Premium Excellence",
      description: "Certified processes and premium ingredients ensuring the finest food products."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing authentic flavors to families worldwide with international distribution."
    }
  ];

  const offices = [
    {
      city: "Production Facility",
      country: "Main Location",
      address: "123 AlWalid Industrial Zone\nFood Production District",
      phone: "+967 779136337"
    },
    {
      city: "European Office",
      country: "Distribution Hub",
      address: "456 Trade Center\nEuropean Market",
      phone: "+44 20 1234 5678"
    },
    {
      city: "Middle East Office",
      country: "Regional Hub",
      address: "789 Business District\nDubai, UAE",
      phone: "+971 4 123 4567"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Still Begining",
      description: "We try to extend worldwide"
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
            <h1 className="text-5xl font-bold">About AlWalid</h1>
            <p className="text-xl text-green-100">
              Three generations of culinary tradition, bringing authentic flavors and premium quality 
              from our family kitchen to yours.
            </p>
            <div className="flex items-center justify-center space-x-6 animate-scale-in">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-yellow-300" />
                <span>Family Tradition</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-300" />
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-300" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To craft premium food products that bring families together, using traditional recipes 
                  and the finest ingredients to create authentic flavors that span generations.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be the world's most trusted family food brand, preserving culinary traditions 
                  while innovating for the future of food excellence.
                </p>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-green-600 to-yellow-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose AlWalid?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>25+ years of food industry expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium quality in 15+ countries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ delicious product lines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>99% customer satisfaction rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide our family business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">
              Key milestones in the AlWalid story
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-none shadow-lg hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-green-600 mb-2">{item.year}</div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Locations</h2>
            <p className="text-xl text-slate-600">
              Serving customers worldwide from our key facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-slate-900">{office.city}</h3>
                  </div>
                  <p className="text-slate-600 font-medium mb-3">{office.country}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400">📞</span>
                      <span>{office.phone}</span>
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
            <h2 className="text-4xl font-bold">Ready to Taste the AlWalid Difference?</h2>
            <p className="text-xl text-green-100">
              Join thousands of families who trust AlWalid for authentic flavors and premium quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-green-600 hover:text-green-700 hover-scale">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600 hover-scale">
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
