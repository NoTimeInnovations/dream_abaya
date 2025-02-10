import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-abaya.jpg"
          alt="Elegant Abaya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Discover Your{" "}
            <span className="text-[#cea36a]">Perfect Abaya</span>
          </h1>
          <p className="text-xl mb-8">
            Elegance meets comfort in our exclusive collection
          </p>
          <Link
            to="/products"
            className="bg-[#cea36a] text-white px-8 py-3 rounded-md hover:bg-opacity-90"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
} 