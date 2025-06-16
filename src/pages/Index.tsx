
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, TrendingUp, Zap, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with premium food products"
    },
    {
      icon: Users,
      title: "Family Business",
      description: "Three generations of food industry expertise and tradition"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified processes ensuring the highest food safety standards"
    },
    {
      icon: TrendingUp,
      title: "Growing Brand",
      description: "Expanding presence in international markets"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "15+", label: "Countries" },
    { number: "50+", label: "Product Lines" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-600 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-green-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 bg-yellow-200 rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Welcome to
              <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                {" "}AlWalid
              </span>
            </h1>
            
            <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed animate-scale-in">
              Premium food products crafted with tradition and quality. 
              From our family kitchen to yours, taste the authentic flavors that have delighted generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 text-lg px-8 py-6 hover-scale">
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-green-900 text-lg px-8 py-6 hover-scale">
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose AlWalid
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three generations of culinary expertise delivering authentic flavors and premium quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our range of authentic, high-quality food products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover-scale animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Spreads & Pastes</h3>
                <p className="text-slate-600 mb-4">
                  Rich chocolate hazelnut spreads made with premium ingredients for the perfect taste.
                </p>
                <Link to="/products" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  View Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover-scale animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Condiments</h3>
                <p className="text-slate-600 mb-4">
                  Traditional Dijon mustard and premium condiments to enhance your culinary experience.
                </p>
                <Link to="/products" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  View Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover-scale animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cooking Oils</h3>
                <p className="text-slate-600 mb-4">
                  Pure sunflower oil enriched with vitamins for healthy and delicious cooking.
                </p>
                <Link to="/products" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  View Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 hover-scale">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-28 h-28 bg-yellow-200 rounded-full animate-bounce"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">
              Ready to Taste the AlWalid Difference?
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of families who trust AlWalid for authentic flavors and premium quality. 
              Contact us to learn more about our products and wholesale opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-green-600 hover:text-green-700 hover-scale">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600 hover-scale">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
