// insertMenuForAllRestaurants.js
import mongoose from 'mongoose';
import User from './src/models/userModel.js';   // Manager schema
import Menu from './src/models/menuSchema.js';  // Menu schema

// Copy your full DummyMenu array here
export const DummyMenu = [
  {
    itemName: "Paneer Tikka",
    cuisine: "North Indian",
    servingSize: "6 pieces",
    preparationTime: "18 mins",
    type: "veg",
    description: "Grilled paneer with spices.",
    price: "260",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg" ,publicID:""}],
  },
  {
    itemName: "Chicken Tikka",
    cuisine: "Mughlai",
    servingSize: "6 pieces",
    preparationTime: "20 mins",
    type: "non-veg",
    description: "Smoky marinated chicken.",
    price: "320",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Veg Spring Rolls",
    cuisine: "Chinese",
    servingSize: "5 rolls",
    preparationTime: "12 mins",
    type: "veg",
    description: "Crispy rolls with veggies.",
    price: "180",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Paneer Butter Masala",
    cuisine: "North Indian",
    servingSize: "Serves 2",
    preparationTime: "20 mins",
    type: "veg",
    description: "Creamy tomato gravy paneer.",
    price: "320",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Dal Makhani",
    cuisine: "Punjabi",
    servingSize: "Serves 2",
    preparationTime: "25 mins",
    type: "veg",
    description: "Slow cooked black lentils.",
    price: "240",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Veg Kolhapuri",
    cuisine: "Maharashtrian",
    servingSize: "Serves 2",
    preparationTime: "22 mins",
    type: "veg",
    description: "Spicy mixed vegetable curry.",
    price: "280",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Butter Chicken",
    cuisine: "North Indian",
    servingSize: "Serves 2",
    preparationTime: "25 mins",
    type: "non-veg",
    description: "Rich creamy chicken curry.",
    price: "360",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Chicken Curry",
    cuisine: "Indian",
    servingSize: "Serves 2",
    preparationTime: "30 mins",
    type: "non-veg",
    description: "Traditional spicy curry.",
    price: "300",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Mutton Rogan Josh",
    cuisine: "Kashmiri",
    servingSize: "Serves 2",
    preparationTime: "35 mins",
    type: "non-veg",
    description: "Aromatic mutton gravy.",
    price: "420",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Veg Biryani",
    cuisine: "Hyderabadi",
    servingSize: "1 plate",
    preparationTime: "25 mins",
    type: "veg",
    description: "Fragrant vegetable biryani.",
    price: "220",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Chicken Biryani",
    cuisine: "Hyderabadi",
    servingSize: "1 plate",
    preparationTime: "30 mins",
    type: "non-veg",
    description: "Classic chicken biryani.",
    price: "280",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Veg Fried Rice",
    cuisine: "Chinese",
    servingSize: "1 bowl",
    preparationTime: "12 mins",
    type: "veg",
    description: "Stir fried rice.",
    price: "150",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Hakka Noodles",
    cuisine: "Chinese",
    servingSize: "1 plate",
    preparationTime: "12 mins",
    type: "veg",
    description: "Classic noodles.",
    price: "160",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Masala Dosa",
    cuisine: "South Indian",
    servingSize: "1 plate",
    preparationTime: "15 mins",
    type: "veg",
    description: "Crispy dosa with potato.",
    price: "120",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Idli Sambar",
    cuisine: "South Indian",
    servingSize: "4 pieces",
    preparationTime: "10 mins",
    type: "veg",
    description: "Soft idli with sambar.",
    price: "100",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Butter Naan",
    cuisine: "Indian Bread",
    servingSize: "1 piece",
    preparationTime: "5 mins",
    type: "veg",
    description: "Soft butter naan.",
    price: "60",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Tandoori Roti",
    cuisine: "Indian Bread",
    servingSize: "1 piece",
    preparationTime: "5 mins",
    type: "veg",
    description: "Whole wheat roti.",
    price: "40",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Gulab Jamun",
    cuisine: "Dessert",
    servingSize: "2 pieces",
    preparationTime: "5 mins",
    type: "veg",
    description: "Sweet milk dumplings.",
    price: "90",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Rasmalai",
    cuisine: "Dessert",
    servingSize: "2 pieces",
    preparationTime: "5 mins",
    type: "veg",
    description: "Soft cheese dessert.",
    price: "120",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Sweet Lassi",
    cuisine: "Beverage",
    servingSize: "300 ml",
    preparationTime: "3 mins",
    type: "veg",
    description: "Refreshing yogurt drink.",
    price: "80",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "Masala Chai",
    cuisine: "Beverage",
    servingSize: "1 cup",
    preparationTime: "5 mins",
    type: "veg",
    description: "Indian spiced tea.",
    price: "30",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },

  {
    itemName: "Veg Burger",
    cuisine: "Fast Food",
    servingSize: "1 piece",
    preparationTime: "10 mins",
    type: "veg",
    description: "Grilled veggie burger.",
    price: "150",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
  {
    itemName: "French Fries",
    cuisine: "Fast Food",
    servingSize: "Medium",
    preparationTime: "8 mins",
    type: "veg",
    description: "Crispy fries.",
    price: "120",
    availability: "available",
    images: [{ url: "https://i.pinimg.com/736x/b1/c5/96/b1c5966c316d50040c38e4d149315990.jpg",publicID:"" }],
  },
];

const ATLAS_URI = 'mongodb+srv://prakrititiwari0102:prakritiNcvB352BVCKYbhdfjf@cluster0.29s5vxz.mongodb.net/CravingsDB';

async function insertMenuForAllRestaurants() {
  try {
    await mongoose.connect(ATLAS_URI);
    console.log('Connected to Atlas');

    // Fetch all managers (restaurants) – exclude those with restaurantName "N/A"
    const restaurants = await User.find({ 
      role: 'manager', 
      restaurantName: { $ne: 'N/A' } 
    }).select('_id restaurantName');
    
    console.log(`Found ${restaurants.length} restaurants: ${restaurants.map(r => r.restaurantName).join(', ')}`);

    // Optional: Clear existing menus (if you want a fresh start)
    await Menu.deleteMany({});
    console.log('Cleared existing menus');

    let totalInserted = 0;
    for (const restaurant of restaurants) {
      // Attach restaurant ID to each menu item
      const menuWithRestaurant = DummyMenu.map(item => ({
        ...item,
        resturantID: restaurant._id
      }));
      
      const result = await Menu.insertMany(menuWithRestaurant);
      totalInserted += result.length;
      console.log(`Inserted ${result.length} items for ${restaurant.restaurantName}`);
    }

    console.log(`✅ Total menu items inserted: ${totalInserted}`);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

insertMenuForAllRestaurants();