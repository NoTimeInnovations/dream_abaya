import { useState } from "react";
import { products, categories } from "~/data/products";

export default function OurProducts() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const filteredProducts = products.filter((product) => {
    if (!selectedCategory) return true;
    if (!selectedSubcategory) return product.category.toLowerCase() === selectedCategory.toLowerCase();
    return (
      product.category.toLowerCase() === selectedCategory.toLowerCase() &&
      product.subcategory?.toLowerCase() === selectedSubcategory.toLowerCase()
    );
  });

  const selectedCategoryData = categories.find(
    (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#242424]">
          Our Products
        </h2>

        <div className="mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => {
                setSelectedCategory("");
                setSelectedSubcategory("");
              }}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === ""
                  ? "bg-[#242424] text-white"
                  : "bg-white text-[#242424] hover:bg-gray-100"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setSelectedSubcategory("");
                }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory.toLowerCase() === category.name.toLowerCase()
                    ? "bg-[#242424] text-white"
                    : "bg-white text-[#242424] hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Subcategory Tabs */}
          {(selectedCategoryData?.subcategories ?? []).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedSubcategory("")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedSubcategory === ""
                    ? "bg-[#cea36a] text-white"
                    : "bg-white text-[#cea36a] hover:bg-gray-100"
                }`}
              >
                All {selectedCategory}
              </button>
              {(selectedCategoryData?.subcategories ?? []).map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedSubcategory.toLowerCase() === subcategory.toLowerCase()
                      ? "bg-[#cea36a] text-white"
                      : "bg-white text-[#cea36a] hover:bg-gray-100"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.src = "/images/abaya_placeholder.png";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#242424] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#cea36a] font-bold">
                    ${product.price}
                  </span>
                  <button className="bg-[#242424] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 