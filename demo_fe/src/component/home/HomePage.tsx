import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { BottomBanner } from "./BottomBanner";
import BrandLogos from "./BrandLogos";
import { CategoriesSection } from "./CategoriesSection";
import CustomerTestimonials from "./CustomerTestimonials";
import { FeaturedProduct } from "./FeaturedProduct";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { MainNavigation } from "./MainNavigation";
import products from "./Product";
import ProductsSection from "./ProductsSection";
import TestimonialItem from "./TestimonialItem";
import { TopBar } from "./TopBar";
import { TopRatedProducts } from "./TopRatedProducts";

// Main App Component
const HealthMartApp = () => {
  const testimonials = [
    {
      quote: "Absolutely natural items with friendly staff, good service, nice selection, and always stocked!",
      name: "Patricia Miller",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "Everything I need for wellness in one place. Friendly support and fast delivery!",
      name: "Abbie Peters",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "Great service and amazing quality products. I feel healthier already.",
      name: "Harold Shaw",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "This store has a wonderful selection. I always find something new to try.",
      name: "Sophie Bennett",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "I love how easy it is to navigate and order. Highly recommended.",
      name: "David Lin",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "Impressed with the quick shipping and personal customer care.",
      name: "Emily Rhodes",
      image: "/api/placeholder/64/64"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      <MainNavigation />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection title="Best Sellers" products={products} />
      <FeaturesSection />
      <ProductsSection title="Popular Categories" products={products} showViewMore={true} />
      <BottomBanner />
      <FeaturedProduct />
      <TopRatedProducts />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialItem key={i} quote={t.quote} name={t.name} image={t.image} />
        ))}
      </div>
      <CustomerTestimonials />
      <BrandLogos />
      <Footer />





    </div>
  );
};

export default HealthMartApp;