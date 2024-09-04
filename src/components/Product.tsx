import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a description for Product 1.",
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/715O2s4SzyL._AC_US218_.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a description for Product 2.",
    price: "$39.99",
    image:
      "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/402431-smartphones-apple-iphone-12-10016496.png",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a description for Product 3.",
    price: "$49.99",
    image:
      "https://www.shutterstock.com/image-photo/wireless-earphones-earpods-isolated-on-260nw-2030446370.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is a description for Product 4.",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Product: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="flex justify-between items-center">
              <div className="mt-4 text-xl font-bold">{product.price}</div>
              <button
                className={`far fa-heart border rounded-full px-2 py-1 text-xl hover:bg-primary hover:text-white border-gray-500  text-primary mr-2 `}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
