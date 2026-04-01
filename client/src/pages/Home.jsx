import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [dishQuery, setDishQuery] = useState("");
  const [likedDishes, setLikedDishes] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const featuredRestaurants = [
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
    {
      id: 5,
      name: "Sushi Port",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "30-40 mins",
      image: "🍣",
    },
    {
      id: 6,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.2,
      deliveryTime: "25-35 mins",
      image: "🌮",
    },
    {
      id: 7,
      name: "Green Bowl",
      cuisine: "Healthy",
      rating: 4.6,
      deliveryTime: "18-28 mins",
      image: "🥗",
    },
    {
      id: 8,
      name: "Morning Brew Cafe",
      cuisine: "Cafe",
      rating: 4.5,
      deliveryTime: "15-25 mins",
      image: "☕",
    },
  ];

  const popularDishes = [
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
    {
      id: 7,
      name: "California Roll",
      restaurant: "Sushi Port",
      price: 399,
      rating: 4.7,
      image: "🍣",
    },
    {
      id: 8,
      name: "Chicken Taco",
      restaurant: "Taco Fiesta",
      price: 179,
      rating: 4.4,
      image: "🌮",
    },
    {
      id: 9,
      name: "Quinoa Power Bowl",
      restaurant: "Green Bowl",
      price: 289,
      rating: 4.8,
      image: "🥗",
    },
    {
      id: 10,
      name: "Cappuccino",
      restaurant: "Morning Brew Cafe",
      price: 149,
      rating: 4.5,
      image: "☕",
    },
    {
      id: 11,
      name: "Paneer Tikka Wrap",
      restaurant: "Spice Kingdom",
      price: 219,
      rating: 4.6,
      image: "🌯",
    },
    {
      id: 12,
      name: "Choco Lava Cake",
      restaurant: "Pizza Paradise",
      price: 169,
      rating: 4.7,
      image: "🍰",
    },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "Aarav S.",
      location: "Downtown",
      message: "Delivery was super quick and the food arrived hot.",
      rating: 5,
    },
    {
      id: 2,
      name: "Neha R.",
      location: "City Center",
      message: "Great offers and smooth checkout experience every time.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Kabir M.",
      location: "Riverside",
      message: "Love the variety of restaurants and easy tracking.",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Priya K.",
      location: "West End",
      message: "Amazing customer support and reliable delivery partners.",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Rahul D.",
      location: "Old Town",
      message: "Best app for late-night cravings with great discounts.",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Meera P.",
      location: "Lake View",
      message: "Neat UI, quick ordering, and quality food options.",
      rating: 4.9,
    },
  ];

  const cuisines = useMemo(
    () => ["All", ...new Set(featuredRestaurants.map((item) => item.cuisine))],
    [featuredRestaurants]
  );

  const filteredRestaurants = useMemo(() => {
    if (selectedCuisine === "All") return featuredRestaurants;
    return featuredRestaurants.filter(
      (restaurant) => restaurant.cuisine === selectedCuisine
    );
  }, [selectedCuisine, featuredRestaurants]);

  const filteredDishes = useMemo(() => {
    const query = dishQuery.trim().toLowerCase();
    const selectedCuisineRestaurants = featuredRestaurants
      .filter((restaurant) => restaurant.cuisine === selectedCuisine)
      .map((restaurant) => restaurant.name);

    return popularDishes.filter((dish) => {
      const matchesCuisine =
        selectedCuisine === "All" ||
        selectedCuisineRestaurants.includes(dish.restaurant);
      const matchesQuery =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.restaurant.toLowerCase().includes(query);
      return matchesCuisine && matchesQuery;
    });
  }, [dishQuery, featuredRestaurants, popularDishes, selectedCuisine]);

  const averageDishPrice = useMemo(() => {
    const total = popularDishes.reduce((sum, dish) => sum + dish.price, 0);
    return Math.round(total / popularDishes.length);
  }, [popularDishes]);

  const averageRating = useMemo(() => {
    const allRatings = [...featuredRestaurants, ...popularDishes].map(
      (item) => item.rating
    );
    const total = allRatings.reduce((sum, rating) => sum + rating, 0);
    return (total / allRatings.length).toFixed(1);
  }, [featuredRestaurants, popularDishes]);

  const quickestDelivery = useMemo(() => {
    const quickest = featuredRestaurants.reduce((min, restaurant) => {
      const minTime = Number.parseInt(restaurant.deliveryTime.split("-")[0], 10);
      return minTime < min ? minTime : min;
    }, Number.POSITIVE_INFINITY);

    return `${quickest} mins`;
  }, [featuredRestaurants]);

  const handleToggleLike = (dishId) => {
    setLikedDishes((prev) =>
      prev.includes(dishId)
        ? prev.filter((id) => id !== dishId)
        : [...prev, dishId]
    );
  };

  const handleAddToCart = (dishName) => {
    setToastMessage(`${dishName} added to cart`);
    setTimeout(() => setToastMessage(""), 1800);
  };

  return (
    <div className="home-page">
      {toastMessage ? (
        <div className="fixed top-20 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg toast-slide">
          {toastMessage}
        </div>
      ) : null}

      {/* Hero Section */}
      <section className="relative hero-aurora text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            {/* Left Content */}
            <div className="space-y-6 reveal-up">
              <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold leading-tight">
                Feed Your Craving, Anytime
              </h1>
              <p className="text-xs sm:text-md md:text-lg  lg:text-2xl xl:text-4xl text-orange-50">
                Discover delicious meals from the best restaurants in your area.
                Fast delivery, great quality, amazing taste!
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/order-now")}
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition duration-300 transform hover:scale-105 btn-glow"
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
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-orange-50">Restaurants</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-orange-50">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-orange-50">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Data Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Platform Insights
            </h2>
            <p className="text-gray-600 text-lg">
              Real numbers that show what users love about Cravings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center card-3d reveal-up">
              <p className="text-sm text-gray-600 mb-1">Active Cuisines</p>
              <p className="text-3xl font-bold text-orange-600">{cuisines.length - 1}</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center card-3d reveal-up" style={{ animationDelay: "0.08s" }}>
              <p className="text-sm text-gray-600 mb-1">Avg Dish Price</p>
              <p className="text-3xl font-bold text-blue-600">₹{averageDishPrice}</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center card-3d reveal-up" style={{ animationDelay: "0.16s" }}>
              <p className="text-sm text-gray-600 mb-1">Avg User Rating</p>
              <p className="text-3xl font-bold text-green-600">{averageRating} ⭐</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center card-3d reveal-up" style={{ animationDelay: "0.24s" }}>
              <p className="text-sm text-gray-600 mb-1">Fastest Delivery</p>
              <p className="text-3xl font-bold text-purple-600">{quickestDelivery}</p>
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

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-4 py-2 rounded-full border transition duration-300 ${
                    selectedCuisine === cuisine
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer transform hover:scale-105 card-3d reveal-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="h-40 bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                  <span className="text-6xl float-icon">{restaurant.image}</span>
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

          {filteredRestaurants.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              No restaurants found for this cuisine yet.
            </p>
          ) : null}
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

            <div className="max-w-md mx-auto mt-6">
              <input
                type="text"
                value={dishQuery}
                onChange={(e) => setDishQuery(e.target.value)}
                placeholder="Search dish or restaurant"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer card-3d reveal-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="h-48 bg-linear-to-br from-orange-300 to-orange-400 flex items-center justify-center relative">
                  <button
                    onClick={() => handleToggleLike(dish.id)}
                    className="absolute top-3 right-3 bg-white/80 rounded-full px-2 py-1 text-lg"
                    aria-label="Toggle favorite"
                  >
                    {likedDishes.includes(dish.id) ? "❤️" : "🤍"}
                  </button>
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

          {filteredDishes.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              No dishes match your search. Try another keyword.
            </p>
          ) : null}
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
            {[
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
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center card-3d reveal-up"
                style={{ animationDelay: `${index * 0.08}s` }}
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

      {/* Customer Voices Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by food lovers across the city
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((review, index) => (
              <article
                key={review.id}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6 card-3d reveal-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <p className="text-yellow-500 text-lg mb-3">{"⭐".repeat(Math.floor(review.rating))}</p>
                <p className="text-gray-700 mb-4">"{review.message}"</p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p>{review.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-orange-500 to-orange-600 text-white">
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
            className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition duration-300 transform hover:scale-105 btn-glow"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;