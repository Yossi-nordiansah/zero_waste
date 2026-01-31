import Navbar from "./_components/section/customer-page/Navbar";
import Hero from "./_components/section/customer-page/home/Hero";
import CategorySection from "./_components/section/customer-page/home/CategorySection";
import BrandSection from "./_components/section/customer-page/home/BrandSection";
import FeaturedProducts from "./_components/section/customer-page/home/FeaturedProducts";
import SizeInformation from "./_components/section/customer-page/home/SizeInformation";
import DiscountSection from "./_components/section/customer-page/home/DiscountSection";
import RatingSection from "./_components/section/customer-page/home/RatingSection";
import LivechatSection from "./_components/section/customer-page/home/LivechatSection";
import Footer from "./_components/section/customer-page/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySection />
      <BrandSection />
      <FeaturedProducts />
      <SizeInformation />
      <DiscountSection />
      <RatingSection />
      <LivechatSection />
      <Footer />
    </div>
  );
}
