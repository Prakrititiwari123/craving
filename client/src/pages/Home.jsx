import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const featuredRestaurants = [
    {
      id: 1,
      name: "Spice Kingdom",
      cuisine: "Indian",
      rating: 4.5,
      reviewCount: 1240,
      deliveryTime: "30-40 mins",
      deliveryFee: "Free",
      minOrder: 199,
      image: "🏪",
      categories: ["Indian", "North Indian", "Biryani"],
      distance: "1.2 km",
      isOpen: true,
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian",
      rating: 4.3,
      reviewCount: 892,
      deliveryTime: "25-35 mins",
      deliveryFee: "₹30",
      minOrder: 249,
      image: "🍕",
      categories: ["Italian", "Pizza", "Fast Food"],
      distance: "0.8 km",
      isOpen: true,
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.6,
      reviewCount: 2103,
      deliveryTime: "35-45 mins",
      deliveryFee: "₹25",
      minOrder: 299,
      image: "🥢",
      categories: ["Chinese", "Asian", "Noodles"],
      distance: "1.5 km",
      isOpen: true,
    },
    {
      id: 4,
      name: "Burger Haven",
      cuisine: "American",
      rating: 4.4,
      reviewCount: 1567,
      deliveryTime: "20-30 mins",
      deliveryFee: "Free",
      minOrder: 149,
      image: "🍔",
      categories: ["American", "Burgers", "Fast Food"],
      distance: "0.5 km",
      isOpen: false,
    },
    {
      id: 5,
      name: "Sushi Master",
      cuisine: "Japanese",
      rating: 4.8,
      reviewCount: 734,
      deliveryTime: "40-50 mins",
      deliveryFee: "₹40",
      minOrder: 399,
      image: "🍣",
      categories: ["Japanese", "Sushi", "Asian"],
      distance: "2.1 km",
      isOpen: true,
    },
    {
      id: 6,
      name: "Mediterranean Grill",
      cuisine: "Mediterranean",
      rating: 4.7,
      reviewCount: 567,
      deliveryTime: "35-45 mins",
      deliveryFee: "₹35",
      minOrder: 349,
      image: "🥙",
      categories: ["Mediterranean", "Healthy", "Grill"],
      distance: "1.8 km",
      isOpen: true,
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Spice Kingdom",
      price: 299,
      rating: 4.7,
      reviewCount: 342,
      image: "🍛",
      isVeg: false,
      isBestseller: true,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      price: 349,
      rating: 4.5,
      reviewCount: 567,
      image: "🍕",
      isVeg: true,
      isBestseller: true,
    },
    {
      id: 3,
      name: "Hakka Noodles",
      restaurant: "Dragon Wok",
      price: 249,
      rating: 4.6,
      reviewCount: 289,
      image: "🍜",
      isVeg: true,
      isBestseller: false,
    },
    {
      id: 4,
      name: "Classic Burger",
      restaurant: "Burger Haven",
      price: 199,
      rating: 4.4,
      reviewCount: 423,
      image: "🍔",
      isVeg: false,
      isBestseller: true,
    },
    {
      id: 5,
      name: "Tandoori Chicken",
      restaurant: "Spice Kingdom",
      price: 279,
      rating: 4.8,
      reviewCount: 456,
      image: "🍖",
      isVeg: false,
      isBestseller: true,
    },
    {
      id: 6,
      name: "Garlic Bread",
      restaurant: "Pizza Paradise",
      price: 99,
      rating: 4.3,
      reviewCount: 178,
      image: "🥖",
      isVeg: true,
      isBestseller: false,
    },
    {
      id: 7,
      name: "California Roll",
      restaurant: "Sushi Master",
      price: 449,
      rating: 4.9,
      reviewCount: 234,
      image: "🍣",
      isVeg: false,
      isBestseller: true,
    },
    {
      id: 8,
      name: "Falafel Wrap",
      restaurant: "Mediterranean Grill",
      price: 279,
      rating: 4.7,
      reviewCount: 167,
      image: "🌯",
      isVeg: true,
      isBestseller: false,
    },
  ];

  const handleAddToCart = (dish) => {
    // You can implement cart logic here
    console.log(`Added ${dish.name} to cart`);
    // Show a toast notification (you'll need to add a toast library)
    alert(`Added ${dish.name} to cart!`);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "bg-green-500";
    if (rating >= 4.0) return "bg-green-400";
    if (rating >= 3.5) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const filteredRestaurants = searchQuery.trim() === "" ? [] : featuredRestaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.categories.some((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredDishes = searchQuery.trim() === "" ? [] : popularDishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dish.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };

  return (
    <>
      {/* Hero Section with Search */}
      <section className="relative bg-linear-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Feed Your Craving, <span className="text-orange-200">Anytime</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 max-w-3xl mx-auto">
              Discover delicious meals from the best restaurants in your area.
              Fast delivery, great quality, amazing taste!
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-8">
              <div className="flex gap-2 bg-white rounded-full p-2 shadow-lg">
                <input
                  type="text"
                  placeholder="Search for restaurants or dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                  className="flex-1 px-6 py-3 text-gray-800 rounded-full focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300 font-semibold"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button
                onClick={() => navigate("/order-now")}
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Order Now 🚀
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition duration-300 border-2 border-white"
              >
                Contact Us 📞
              </button>
            </div>

            {/* Stats with Icons */}
            <div className="grid grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-orange-50 flex items-center justify-center gap-1">
                  🏪 Restaurants
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">50K+</p>
                <p className="text-orange-50 flex items-center justify-center gap-1">
                  😊 Happy Customers
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">24/7</p>
                <p className="text-orange-50 flex items-center justify-center gap-1">
                  🕐 Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {showSearchResults && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-600">
                  Found {filteredRestaurants.length} restaurants and {filteredDishes.length} dishes
                </p>
              </div>
              <button
                onClick={clearSearch}
                className="px-6 py-2 text-gray-600 hover:text-orange-600 font-semibold transition duration-300"
              >
                Clear Search ✕
              </button>
            </div>

            {filteredRestaurants.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Matching Restaurants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-orange-200"
                      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                    >
                      <div className="relative h-48 bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                        <span className="text-7xl">{restaurant.image}</span>
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700">
                          {restaurant.distance}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800">
                            {restaurant.name}
                          </h3>
                          <div className={`px-2 py-1 rounded-full text-white text-sm ${getRatingColor(restaurant.rating)}`}>
                            ⭐ {restaurant.rating}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {restaurant.cuisine}
                        </p>
                        <p className="text-sm text-gray-500">
                          ⏱️ {restaurant.deliveryTime} • {restaurant.deliveryFee} delivery
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredDishes.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Matching Dishes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredDishes.map((dish) => (
                    <div
                      key={dish.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group border border-orange-200"
                    >
                      <div className="relative h-56 bg-linear-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                        <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                          {dish.image}
                        </span>
                        {dish.isBestseller && (
                          <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            🔥 Bestseller
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                          ⭐ {dish.rating}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {dish.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {dish.restaurant}
                        </p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-2xl font-bold text-orange-600">
                            ₹{dish.price}
                          </span>
                        </div>
                        <button
                          onClick={() => handleAddToCart(dish)}
                          className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
                        >
                          🛒 Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredRestaurants.length === 0 && filteredDishes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-2xl text-gray-500 mb-4">😕 No results found</p>
                <p className="text-gray-600 mb-8">Try searching with different keywords</p>
                <button
                  onClick={clearSearch}
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold transition duration-300"
                >
                  Browse All Items
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured Restaurants Section */}
      {!showSearchResults && (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Restaurants
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our top-rated restaurants near you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                <div className="relative h-48 bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                  <span className="text-7xl">{restaurant.image}</span>
                  {!restaurant.isOpen && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Temporarily Closed
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700">
                    {restaurant.distance}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {restaurant.name}
                    </h3>
                    <div className={`px-2 py-1 rounded-full text-white text-sm ${getRatingColor(restaurant.rating)}`}>
                      ⭐ {restaurant.rating}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {restaurant.cuisine} • {restaurant.reviewCount}+ reviews
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {restaurant.categories.slice(0, 2).map((cat, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>⏱️ {restaurant.deliveryTime}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-600">{restaurant.deliveryFee}</span>
                      <span className="text-xs"> delivery</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Min. order ₹{restaurant.minOrder}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/order-now")}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
            >
              View All Restaurants →
            </button>
          </div>
        </div>
      </section>
      )}

      {/* Category Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {["all", "Indian", "Italian", "Chinese", "American", "Japanese", "Mediterranean"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                }`}
              >
                {category === "all" ? "All Cuisines" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Dishes
            </h2>
            <p className="text-gray-600 text-lg">
              Most loved meals by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                <div className="relative h-56 bg-linear-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {dish.image}
                  </span>
                  {dish.isBestseller && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      🔥 Bestseller
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    ⭐ {dish.rating}
                    <span className="text-gray-500">({dish.reviewCount})</span>
                  </div>
                  <div className={`absolute bottom-3 left-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    dish.isVeg ? "bg-green-500" : "bg-red-500"
                  } text-white`}>
                    {dish.isVeg ? "V" : "N"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {dish.restaurant}
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-orange-600">
                      ₹{dish.price}
                    </span>
                    <span className="text-sm text-green-600 font-semibold">
                      Save ₹{Math.floor(dish.price * 0.1)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(dish)}
                    className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Cravings?
            </h2>
            <p className="text-gray-600 text-lg">
              We're committed to providing the best food delivery experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                description: "Get your food delivered in 30 minutes or less",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: "🔒",
                title: "Safe Payment",
                description: "Secure and encrypted transactions",
                color: "from-green-400 to-green-600",
              },
              {
                icon: "🌟",
                title: "Quality Assured",
                description: "Only verified restaurants and vendors",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: "💬",
                title: "24/7 Support",
                description: "We're always here to help you",
                color: "from-purple-400 to-purple-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-block p-4 rounded-full bg-linear-to-r ${feature.color} mb-4`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of satisfied food lovers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Sharma",
                rating: 5,
                comment: "Amazing food delivery service! The food arrived hot and fresh. Highly recommended!",
                image: "👨",
                date: "2 days ago",
              },
              {
                name: "Priya Patel",
                rating: 5,
                comment: "Best food delivery app in town. Wide variety of restaurants and quick delivery.",
                image: "👩",
                date: "5 days ago",
              },
              {
                name: "Amit Kumar",
                rating: 4,
                comment: "Great experience overall. The tracking feature is very useful. Will order again!",
                image: "👨",
                date: "1 week ago",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.image}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">"{testimonial.comment}"</p>
                <p className="text-xs text-gray-400">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-linear-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Exclusive Offers!
          </h2>
          <p className="text-lg text-orange-50 mb-8">
            Subscribe to our newsletter and get 20% off on your first order
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition duration-300">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-orange-200 mt-4">
            No spam, unsubscribe anytime
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Satisfy Your Cravings?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of satisfied customers and enjoy delicious food
            delivered to your doorstep in minutes
          </p>
          <button
            onClick={() => navigate("/order-now")}
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Order Now 🚀
          </button>
        </div>
      </section>
     
    </>
  );
};

export default Home;