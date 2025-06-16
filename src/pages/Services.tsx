
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Settings, 
  BarChart3, 
  CheckCircle2,
  Truck,
  Award,
  Heart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "International Distribution",
      description: "Global supply chain management and distribution to reach markets worldwide",
      features: ["Multi-country logistics", "Quality preservation", "Regulatory compliance", "Market expansion"],
      price: "Custom Quote",
      popular: false
    },
    {
      icon: Award,
      title: "Premium Product Development",
      description: "Custom food product development with traditional recipes and modern techniques",
      features: ["Recipe development", "Quality testing", "Packaging design", "Market research"],
      price: "Contact Us",
      popular: true
    },
    {
      icon: Truck,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management for food products",
      features: ["Inventory management", "Cold chain logistics", "Quality control", "Timely delivery"],
      price: "Custom Quote",
      popular: false
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality control and food safety certification services",
      features: ["HACCP compliance", "ISO certification", "Quality testing", "Safety protocols"],
      price: "Included",
      popular: false
    },
    {
      icon: Users,
      title: "Brand Partnership",
      description: "White-label manufacturing and co-packing services for food brands",
      features: ["Custom formulations", "Private labeling", "Packaging solutions", "Brand development"],
      price: "Partnership",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Food industry insights and market research for strategic decisions",
      features: ["Market analysis", "Consumer insights", "Trend forecasting", "Competitive research"],
      price: "Consulting",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "25+ Years Experience",
      description: "Decades of expertise in food production and international markets"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers in 15+ countries with reliable supply chains"
    },
    {
      icon: Heart,
      title: "Family Values",
      description: "Traditional family business approach with modern capabilities"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified processes ensuring the highest food safety standards"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your needs and develop a customized solution strategy"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Detailed project planning with timelines and quality milestones"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert execution using our proven processes and quality controls"
    },
    {
      step: "04",
      title: "Delivery",
      description: "On-time delivery with ongoing support and quality assurance"
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
            <h1 className="text-5xl font-bold">AlWalid Services</h1>
            <p className="text-xl text-green-100">
              Comprehensive food industry solutions from production to global distribution, 
              backed by three generations of culinary expertise.
            </p>
            <div className="flex items-center justify-center space-x-6 animate-scale-in">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-yellow-300" />
                <span>Global Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-green-300" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              End-to-end solutions for food businesses looking to scale and succeed globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 relative hover-scale animate-fade-in ${
                  service.popular ? 'ring-2 ring-green-500' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold text-green-600">{service.price}</span>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600">
              How we deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose AlWalid</h2>
            <p className="text-xl text-slate-600">
              The advantages of partnering with a family business that cares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold">Ready to Grow Your Food Business?</h2>
            <p className="text-xl text-green-100">
              Partner with AlWalid to access our expertise, global network, and proven track record 
              of helping food businesses succeed worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-green-600 hover:text-green-700 hover-scale">
                <Link to="/contact">
                  Start Your Project
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

export default Services;
