import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { CategoriesSection } from "./CategoriesSection";
import { FeaturedProduct } from "./FeaturedProduct";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { MainNavigation } from "./MainNavigation";
import products from "./Product";
import ProductsSection from "./ProductsSection";
import ProductItem from "./TestimonialItem";
import TestimonialItem, { ProductItemProps } from "./TestimonialItem";
import { TopBar } from "./TopBar";
import "./index.scss";
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
const productData: ProductItemProps[] = [
    {
      title: "Kudos Shatavari Ayurveda-Brahmi Women's Wellness",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/21-300x300.jpg",
      rating: 5,
      originalPrice: "4.60",
      salePrice: "4",
    },
    {
      title: "Vicks VapoRub Cold & Cough Relief Balm 25 ml",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/16-300x300.jpg",
      rating: 5,
      salePrice: "1.30",
    },
    {
      title: "MamyPoko Extra Absorb Pants (L) 62 count",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/14-300x300.jpg",
      rating: 5,
      salePrice: "10",
    },
    {
      title: "Pharmeasy Lumbar Sacro Support Belt-Pain Relief",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/20-300x300.jpg",
      rating: 4,
      originalPrice: "20",
      salePrice: "18",
    },
    {
      title: "Softovac Bowel Regulator 250gm Pack Of 1",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/17-300x300.jpg",
      rating: 5,
      salePrice: "13",
    },
    {
      title: "Zandu Balm For Headache, Backache & Cold 25 ml",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/15-300x300.jpg",
      rating: 5,
      salePrice: "3",
    },
    {
      title: "Newnik Fingertip Pulse Oximeter with Audio",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/19-300x300.jpg",
      rating: 4,
      originalPrice: "19",
      salePrice: "17",
    },
    {
      title: "Frido Ultimate Pro Copper Mask Nose Clip",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/18-300x300.jpg",
      rating: 5,
      originalPrice: "10",
      salePrice: "8",
    },
    {
      title: "Bella Baby Happy Diapers Large, 48 Count",
      image: "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2023/10/13-300x300.jpg",
      rating: 4,
      salePrice: "8–20",
    },
  ];
  

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      <MainNavigation />
      <HeroSection />
      <CategoriesSection/>
          <div className="category-item-wrap">

          </div>
      <ProductsSection title="Best Sellers" products={products} />
      <FeaturesSection />
      <ProductsSection title="Popular Categories" products={products} showViewMore={true} />
      <FeaturedProduct />
      <h3 className="elementor-heading-title">Don’t Miss Our Discounts!</h3>
      <div className="testimonial-item-wrap">
      {productData.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>
      <Footer />





    </div>
  );
};

export default HealthMartApp;