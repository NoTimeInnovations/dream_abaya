import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import OurProducts from "~/components/OurProducts";

export const meta: MetaFunction = () => {
  return [
    { title: "Dream Abaya" },
    { name: "description", content: "Discover Your Perfect Abaya" },
  ];
};

export default function Index() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#cea36a]">
              Elegance Redefined in Every Stitch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Discover Your Perfect Abaya
            </p>
            <button 
              onClick={scrollToProducts}
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Explore Collection
            </button>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="relative h-[500px] w-full">
              <img
                src="/images/p1.jpg"
                alt="Abaya Design"
                className="absolute top-0 right-0 w-3/4 h-4/5 object-contain rounded-lg shadow-lg z-10"
              />
              <img
                src="/images/p2.jpg"
                alt="Abaya Showcase"
                className="absolute bottom-0 left-0 w-2/3 h-3/4 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <OurProducts />
    </div>
  );
}
