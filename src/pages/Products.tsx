
import { useState, lazy, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Eye, Download, ArrowRight, Award, Leaf } from "lucide-react";

// Lazy loading component for images
const LazyImage = ({ src, alt, className, ...props }: { src: string; alt: string; className?: string; [key: string]: any }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        loading="lazy"
        {...props}
      />
      {isError && (
        <div className="absolute inset-0 bg-slate-100 rounded-lg flex items-center justify-center">
          <span className="text-slate-500 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "spreads", name: "Spreads & Pastes" },
    { id: "condiments", name: "Condiments" },
    { id: "oils", name: "Cooking Oils" },
  ];

  const products = [
    {
      id: 1,
      name: "Chocolate with Hazelnuts Spread",
      category: "spreads",
      price: "$4.99",
      rating: 4.8,
      image: "/assets/images/e7fc251a-b6c7-41a4-a305-d50e88bd9717.png",
      description: "Premium chocolate hazelnut spread made with finest ingredients for the perfect breakfast or snack",
      features: ["Rich Chocolate Flavor", "Real Hazelnuts", "No Artificial Colors", "Premium Quality"],
      benefits: "Perfect for breakfast, snacks, or dessert preparations",
      specs: {
        "Weight": "Available in multiple sizes",
        "Ingredients": "Chocolate, Hazelnuts, Sugar, Palm Oil",
        "Storage": "Store in cool, dry place",
        "Shelf Life": "24 months from production date"
      },
      nutritional: "High in energy, contains nuts, suitable for vegetarians"
    },
    {
      id: 2,
      name: "Moutarde de Dijon",
      category: "condiments",
      price: "$3.49",
      rating: 4.9,
      image: "/assets/images/c416b605-d45f-4d1c-9fa4-c6177e03b0fe.png",
      description: "Authentic French-style Dijon mustard with traditional recipe and smooth texture",
      features: ["Traditional Recipe", "Smooth Texture", "Two Size Options", "Premium Ingredients"],
      benefits: "Perfect complement for meats, sandwiches, and gourmet cooking",
      specs: {
        "Sizes": "370g and 850g available",
        "Origin": "Traditional French recipe",
        "Texture": "Smooth and creamy",
        "Usage": "Cooking, dipping, spreading"
      },
      nutritional: "Low calorie, gluten-free, adds flavor without excess sodium"
    },
    {
      id: 3,
      name: "Sunflower Oil with Vitamin A & D",
      category: "oils",
      price: "$8.99",
      rating: 4.7,
      image: "/assets/images/dcd2485f-f063-4161-92a6-e94b0b60a2a0.png",
      description: "Pure sunflower oil enriched with essential vitamins A & D for healthy cooking",
      features: ["Vitamin A & D Enriched", "Pure Sunflower Oil", "5L Family Size", "Heart Healthy"],
      benefits: "Supports healthy cooking with added nutritional benefits from vitamins",
      specs: {
        "Volume": "5 Liters",
        "Enrichment": "Vitamin A & D fortified",
        "Type": "100% Pure Sunflower Oil",
        "Usage": "Frying, cooking, baking"
      },
      nutritional: "Rich in vitamin E, low in saturated fat, cholesterol-free"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-yellow-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold">AlWalid Premium Products</h1>
            <p className="text-xl text-green-100">
              Discover our range of high-quality food products, crafted with care 
              and traditional recipes for your family's enjoyment.
            </p>
            <div className="flex items-center justify-center space-x-6 animate-scale-in">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-300" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-300" />
                <span>Natural Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 animate-fade-in">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <LazyImage
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-green-600 hover:bg-green-700 group">
                          <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-green-800">{product.name}</DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="animate-scale-in">
                            <Suspense fallback={
                              <div className="w-full h-80 bg-slate-200 animate-pulse rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            }>
                              <LazyImage
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-80 object-cover rounded-lg shadow-lg"
                              />
                            </Suspense>
                          </div>
                          
                          <div className="space-y-6 animate-fade-in">
                            <div>
                              <h4 className="text-lg font-semibold mb-2 text-green-800">Description</h4>
                              <p className="text-slate-600">{product.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold mb-2 text-green-800">Key Features</h4>
                              <ul className="grid grid-cols-2 gap-2">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    <span className="text-slate-600 text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold mb-2 text-green-800">Benefits</h4>
                              <p className="text-slate-600">{product.benefits}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-green-800">Product Specifications</h4>
                            <div className="space-y-3">
                              {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="border border-green-100 rounded-lg p-3 hover:bg-green-50 transition-colors">
                                  <div className="font-medium text-slate-900">{key}</div>
                                  <div className="text-slate-600 text-sm">{value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-green-800">Nutritional Information</h4>
                            <div className="border border-green-100 rounded-lg p-4 bg-green-50">
                              <p className="text-slate-600">{product.nutritional}</p>
                            </div>
                            
                            <div className="mt-6 space-y-3">
                              <Button className="w-full bg-green-600 hover:bg-green-700">
                                Contact for Wholesale
                              </Button>
                              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                                <Download className="mr-2 h-4 w-4" />
                                Download Product Sheet
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-yellow-200 rounded-full animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-white">
              Interested in Our Products?
            </h2>
            <p className="text-xl text-green-100">
              Contact us for wholesale opportunities, custom packaging, or to learn more 
              about our premium AlWalid product range.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-green-600 hover:text-green-700 hover-scale">
                <a href="/contact">
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600 hover-scale">
                <a href="/about">Learn About AlWalid</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
