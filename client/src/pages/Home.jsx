
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const FEATURED_RESTAURANTS = [
  {
    id: 1,
    name: "Spice Kingdom",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: "30-40 mins",
    image: "🏪",
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.3,
    deliveryTime: "25-35 mins",
    image: "🍕",
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.6,
    deliveryTime: "35-45 mins",
    image: "🥢",
  },
  {
    id: 4,
    name: "Burger Haven",
    cuisine: "American",
    rating: 4.4,
    deliveryTime: "20-30 mins",
    image: "🍔",
  },
];

const POPULAR_DISHES = [
  {
    id: 1,
    name: "Butter Chicken",
    restaurant: "Spice Kingdom",
    price: 299,
    rating: 4.7,
    image: "🍛",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    restaurant: "Pizza Paradise",
    price: 349,
    rating: 4.5,
    image: "🍕",
  },
  {
    id: 3,
    name: "Hakka Noodles",
    restaurant: "Dragon Wok",
    price: 249,
    rating: 4.6,
    image: "🍜",
  },
  {
    id: 4,
    name: "Classic Burger",
    restaurant: "Burger Haven",
    price: 199,
    rating: 4.4,
    image: "🍔",
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    restaurant: "Spice Kingdom",
    price: 279,
    rating: 4.8,
    image: "🍖",
  },
  {
    id: 6,
    name: "Garlic Bread",
    restaurant: "Pizza Paradise",
    price: 99,
    rating: 4.3,
    image: "🥖",
  },
];

const WHY_US_FEATURES = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Get your food delivered in minutes",
  },
  {
    icon: "🔒",
    title: "Safe Payment",
    description: "Secure and encrypted transactions",
  },
  {
    icon: "🌟",
    title: "Quality Assured",
    description: "Only verified restaurants and vendors",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description: "We're always here to help you",
  },
];

const HERO_STATS = [
  { target: 500, suffix: "+", label: "Restaurants" },
  { target: 50, suffix: "K+", label: "Happy Customers" },
  { target: 24, suffix: "/7", label: "Support" },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeCuisine, setActiveCuisine] = useState("All");
  const [dishQuery, setDishQuery] = useState("");
  const [dishSort, setDishSort] = useState("rating");
  const [cartCount, setCartCount] = useState(0);
  const [justAdded, setJustAdded] = useState("");
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);

  const cuisines = useMemo(
    () => ["All", ...new Set(FEATURED_RESTAURANTS.map((item) => item.cuisine))],
    []
  );

  const filteredRestaurants = useMemo(() => {
    if (activeCuisine === "All") {
      return FEATURED_RESTAURANTS;
    }
    return FEATURED_RESTAURANTS.filter((item) => item.cuisine === activeCuisine);
  }, [activeCuisine]);

  const displayedDishes = useMemo(() => {
    const filtered = POPULAR_DISHES.filter((dish) => {
      const key = `${dish.name} ${dish.restaurant}`.toLowerCase();
      return key.includes(dishQuery.toLowerCase().trim());
    });

    if (dishSort === "price-low") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (dishSort === "price-high") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    if (dishSort === "name") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    return [...filtered].sort((a, b) => b.rating - a.rating);
  }, [dishQuery, dishSort]);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedStats(HERO_STATS.map((item) => Math.round(item.target * eased)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!justAdded) {
      return undefined;
    }

    const id = setTimeout(() => {
      setJustAdded("");
    }, 1500);

    return () => clearTimeout(id);
  }, [justAdded]);

  const handleAddToCart = (dishName) => {
    setCartCount((prev) => prev + 1);
    setJustAdded(`${dishName} added to cart`);
  };

  return (
    <div className="home-page">
      <div className="fixed top-20 right-4 z-30 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
        <span className="text-lg">🛒</span>
        <span className="font-semibold text-gray-800">{cartCount}</span>
      </div>

      {justAdded && (
        <div className="fixed top-36 right-4 z-30 toast-slide bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {justAdded}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative hero-aurora text-white py-20 overflow-hidden">
        <span className="float-icon absolute top-16 left-8 text-3xl opacity-70">🍕</span>
        <span className="float-icon absolute top-24 right-16 text-3xl opacity-70" style={{ animationDelay: "0.4s" }}>
          🍔
        </span>
        <span className="float-icon absolute bottom-16 left-16 text-3xl opacity-70" style={{ animationDelay: "0.8s" }}>
          🍜
        </span>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Left Content */}
            <div className="space-y-6 reveal-up" style={{ animationDelay: "80ms" }}>
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-lime-300 pulse-dot" />
                Live in your area
              </p>
              <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold leading-tight text-balance">
                Feed Your Craving, Anytime
              </h1>
              <p className="text-xs sm:text-md md:text-lg  lg:text-2xl xl:text-4xl text-orange-50">
                Discover delicious meals from the best restaurants in your area.
                Fast delivery, great quality, amazing taste!
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/order-now")}
                  className="btn-glow px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition duration-300 transform hover:scale-105"
                >
                  Order Now
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition duration-300 border-2 border-white"
                >
                  Contact Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {HERO_STATS.map((item, index) => (
                  <div key={item.label} className="rounded-lg bg-white/10 backdrop-blur-sm p-3">
                    <p className="text-3xl font-bold">
                      {animatedStats[index]}
                      {item.suffix}
                    </p>
                    <p className="text-orange-50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Restaurants
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our top-rated restaurants
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setActiveCuisine(cuisine)}
                  className={`px-4 py-2 rounded-full border transition duration-300 ${
                    activeCuisine === cuisine
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-white text-gray-700 border-gray-200 hover:border-orange-400"
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="card-3d reveal-up bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate("/order-now")}
              >
                <div className="h-40 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                  <span className="text-6xl dish-image-pop">{restaurant.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {restaurant.cuisine}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-semibold text-gray-800">
                        {restaurant.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {restaurant.deliveryTime}
                    </p>
                  </div>
                </div>
              </div>
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <input
                value={dishQuery}
                onChange={(event) => setDishQuery(event.target.value)}
                placeholder="Search dish or restaurant"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none"
              />
              <select
                value={dishSort}
                onChange={(event) => setDishSort(event.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none"
              >
                <option value="rating">Sort: Top Rated</option>
                <option value="price-low">Sort: Price Low to High</option>
                <option value="price-high">Sort: Price High to Low</option>
                <option value="name">Sort: Name A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="card-3d reveal-up bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                  <span className="text-8xl dish-image-pop">{dish.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {dish.restaurant}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-orange-600">
                        ₹{dish.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-semibold">
                          {dish.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(dish.name)}
                    className="w-full mt-3 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-300 font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!displayedDishes.length && (
            <div className="text-center mt-8 text-gray-600">
              No dishes found for your search.
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Cravings?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="reveal-up bg-white p-6 rounded-lg shadow-md text-center card-3d"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-orange-50 mb-8">
            Join thousands of satisfied customers and enjoy delicious food
            delivered to your doorstep
          </p>
          <button
            onClick={() => navigate("/order-now")}
            className="btn-glow px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition duration-300 transform hover:scale-105"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;