"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Define the Product type
type Product = {
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

// Helper function to fetch product data
function getProductData(slug: string): Product | undefined {
  const posts: Product[] = [
    {
      slug: "The-North-Coat",
      name: "The North Coat",
      description: " The North Coat offers premium warmth and comfort, perfect for extreme cold weather. Crafted with high-quality materials, this coat is designed to keep you cozy while ensuring durability.",
      price: 120.0,
      image: "/pictures/coat.png",
    },
    {
      slug: "Gucci-Duffle-Bag",
      name: "Gucci Duffle Bag",
      description: "The Gucci Buffle Bag is an elegant statement piece for fashion-forward individuals. Made from luxurious leather, it features an eye-catching design with the iconic Gucci logo and a spacious interior.",
      price: 950.0,
      image: "/pictures/bag.png",
    },
    {
      slug: "RGB-Liquid-CPU-Cooler",
      name: "RGB Liquid CPU Cooler",
      description: "The RGB Liquid CPU Cooler delivers excellent cooling performance for high-performance gaming setups. Equipped with customizable RGB lighting, it adds a dynamic look to your system while efficiently managing heat.",
      price: 85.0,
      image: "/pictures/speakers.png",
    },
    {
      slug: "HAVIT-HV-G92-Gamepad",
      name: "HAVIT HV-G92 Gamepad",
      description:
        "The HV G92 Gamepad is designed for gamers who demand precision and comfort. Featuring ergonomic controls and responsive buttons, this controller is ideal for long gaming sessions.",
      price: 54.0,
      image: "/pictures/gamepad.png",
    },
    {
      slug: "AK-900-Wired-Keyboard",
      name: "AK-900 Wired Keyboard",
      description: "The Wired Keyboard is a reliable and responsive tool for both work and gaming. With a tactile typing experience and a durable build, it ensures accuracy with every keystroke.",
      price: 45.0,
      image: "/pictures/keyboard.png",
    },
    {
      slug: "ASUS-FHD-Gaming-Laptop",
      name: "ASUS-FHD-Gaming-Laptop",
      description: "The Gaming Laptop combines powerful performance with portability, designed for gamers on the go. Equipped with high-end processors, and a fast refresh rate display, it delivers a seamless gaming experience.",
      price: 360.0,
      image: "/pictures/laptop.png",
    },
    {
      slug: "Jr.-Zoom-Soccer-Cleats",
      name: "Jr.-Zoom-Soccer-Cleats",
      description: " Zoom-Soccer Cleats are designed for speed, agility, and comfort on the field. With a lightweight, durable construction and an advanced grip system, they provide superior traction for quick turns and powerful sprints.",
      price: 200.0,
      image: "/pictures/shoes.png",
    },
    {
      slug: "GP11-Shooter-USB-Gamepad",
      name: "GP11-Shooter-USB-Gamepad",
      description: "The Shooter USB Gamepad offers precise control and responsiveness for FPS gamers. Its ergonomic design fits comfortably in your hands, ensuring long-lasting comfort. With customizable buttons and a smooth USB connection.",
      price: 280.0,
      image: "/pictures/controller.png",
    },
    {
      slug: "Quilted-Satin-Jacket",
      name: "Quilted-Satin-Jacket",
      description: "The Satin Jacket is a stylish, versatile outerwear piece that brings sophistication and comfort. Its smooth satin fabric offers a sleek, glossy finish, making it ideal for both casual and semi-formal occasions.",
      price: 400.0,
      image: "/pictures/jacket.png",
    },
    {
      slug: "IPS-LCD-Gaming-Monitor",
      name: "IPS-LCD-Gaming-Monitor",
      description: "The IPS LCD Gaming Monitor is built for gamers who demand sharp visuals and accurate colors. With a high refresh rate and low response time, it provides smooth, lag-free gaming.",
      price: 560.0,
      image: "/pictures/LCD.png",
    },
    // Add more products here
  ];

  return posts.find((post) => post.slug === slug);
}

// Main Component
export default function ProductPost() {
  // Get slug using useParams
  const { slug } = useParams();

  // Ensure the slug is a string (in case it's an array)
  const productSlug = Array.isArray(slug) ? slug[0] : slug;

  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  

  useEffect(() => {
    if (productSlug) {
      const foundProduct = getProductData(productSlug);
      setProduct(foundProduct);
    }
  }, [productSlug]);

  if (!product) {
    return <div>Product not found!</div>;
  }
  

  // Function to handle quantity change
  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prevQuantity) => {
      if (type === "increment") {
        return prevQuantity + 1;
      } else {
        return prevQuantity > 1 ? prevQuantity - 1 : 1;
      }
    });
  };

  return (
    <div>
      <div className="w-full max-w-[1100px]">
        <div className="container mx-auto px-4 py-6">
          {/* Main Section */}
          <div className="sm:lg:flex flex-col lg:flex-row gap-28">
            {/* Main Image */}
            <div className="flex-1">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain rounded-md"
                width={500}
                height={500}
              />
            </div>

            {/* Right Section: Product Details */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm bg-[#DB4444] text-white px-2 py-1 rounded-md">
                  In Stock
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">5.0</span> | 22 reviews
              </p>
            </div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                ${(product.price * quantity).toFixed(2)}
              </div>
              <div className="text-sm text-gray-500 mb-4">Dictum/Cursus/Risus</div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="px-3 py-2 text-gray-700"
                  >
                    -
                  </button>
                  <input
                    id="quantityInput"
                    type="text"
                    className="w-12 dark:text-white text-center border-l border-r border-gray-300"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="px-3 py-2 text-gray-700"
                  >
                    +
                  </button>
                </div>
                <Link href="/cart">
                  <button className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-[#8a2020]">
                    Add to Cart
                  </button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 mb-4">
              <button className="flex items-center space-x-1 text-gray-500">
                <i className="fas fa-heart"></i>
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500">
                <i className="fas fa-exchange-alt"></i>
                <span>Compare</span>
              </button>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Category: <span className="font-medium">Gaming</span>
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Tag: <span className="font-medium">Our Shop</span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-2">Share:</p>
              <div className="flex space-x-4">
                <button className="text-gray-500">
                  <i className="fab fa-facebook-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-twitter-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-instagram text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-linkedin text-xl"></i>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}