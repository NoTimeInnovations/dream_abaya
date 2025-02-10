import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About Dream Abaya - Premium Islamic Clothing Brand" },
    { 
      name: "description", 
      content: "Discover the story behind Dream Abaya, a premium Islamic clothing brand committed to providing high-quality, affordable modest fashion. Our journey from traditional craftsmanship to modern elegance." 
    },
    { name: "keywords", content: "Dream Abaya, Islamic clothing, modest fashion, affordable abayas, premium fabric, traditional craftsmanship" }
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/p1.jpg"
            alt="Dream Abaya Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-[#cea36a]">Story</span>
          </h1>
        </div>
      </div>

      {/* Our Beginning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#242424]">Our Beginning</h2>
              <p className="text-gray-600 leading-relaxed">
                Dream Abaya was born from a vision to revolutionize modest fashion in 2020. 
                We recognized a gap in the market for high-quality, affordable Islamic clothing 
                that doesn't compromise on style or comfort. Our journey began with a simple 
                belief: every woman deserves access to premium modest wear that makes her feel 
                confident and beautiful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Starting with a small collection of hand-picked imported fabrics, we quickly 
                gained recognition for our attention to detail and commitment to quality. 
                Our dedication to craftsmanship and affordable luxury has made us a trusted 
                name in Islamic fashion.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/images/p2.jpg"
                alt="Premium Abaya Craftsmanship"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-[#242424] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="/images/Gowns1.jpg"
                alt="Luxury Islamic Fashion"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#cea36a]">Our Commitment</h2>
              <p className="leading-relaxed">
                At Dream Abaya, we source only the finest imported fabrics, ensuring 
                each piece meets our exacting standards for quality and comfort. Our 
                team of skilled artisans combines traditional techniques with modern 
                design elements to create pieces that are both timeless and contemporary.
              </p>
              <p className="leading-relaxed">
                We believe that modest fashion should be accessible to everyone. This 
                belief drives our commitment to maintaining affordable prices without 
                compromising on quality. Each abaya, gown, and accessory in our collection 
                is crafted with attention to detail and a deep respect for Islamic values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#242424]">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Looking ahead, Dream Abaya envisions becoming the leading global destination 
                for premium Islamic fashion. We're constantly innovating and expanding our 
                collection to meet the evolving needs of our diverse community. From classic 
                abayas to contemporary gowns, each piece is designed to empower women in 
                their journey of modest fashion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment extends beyond fashion - we're building a community that 
                celebrates modest wear and Islamic values. Through our designs, we aim to 
                bridge traditional Islamic clothing with contemporary fashion, creating 
                pieces that resonate with women across generations.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/images/Gown2.jpg"
                alt="Modern Islamic Fashion"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#242424] mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#cea36a] mb-4">Quality</h3>
              <p className="text-gray-600">
                Premium imported fabrics and exceptional craftsmanship in every piece
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#cea36a] mb-4">Affordability</h3>
              <p className="text-gray-600">
                Luxury modest wear at accessible prices for every woman
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#cea36a] mb-4">Innovation</h3>
              <p className="text-gray-600">
                Blending traditional values with contemporary design
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 