import React, { useState } from "react";
import { ProductCard, Banner, About } from "@/components/index"; // Import the Banner component
import products from "products";
import AboutImg from '../public/peace-lily-plant-pot.jpg'
export default function Home() {
  const [disabled, setDisabled] = useState(false);
 

  return (
    <div>
      {/* Include the Banner component */}
      <Banner
        images={[
          "https://images.unsplash.com/photo-1543459176-4426b37223ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          "https://img.freepik.com/free-photo/cozy-hobby-growing-house-indoor-plants-cactus_185193-108553.jpg",
          "https://img.freepik.com/premium-photo/closeup-shot-green-jade-houseplant-flowerpot-isolated-white-background_665346-43137.jpg",
        ]} // Replace with your image URLs
        text="Welcome to our website"
        buttonText="Learn More"
      />
      <About
        imageSrc={AboutImg}
        title="About Us"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a arcu pharetra, fringilla ante non, vestibulum lorem. Duis eleifend gravida nisl, quis vestibulum urna vestibulum id. Nunc quis turpis a lacus condimentum dapibus id vitae augue. Praesent sed ultrices turpis, nec faucibus purus. Nullam malesuada varius cursus. Nunc molestie vel massa eget vestibulum. Phasellus ipsum nisl, commodo vel dui quis, vestibulum aliquam sapien. Nulla sit amet turpis at justo suscipit pellentesque. Donec quis bibendum dui. Phasellus ac mi ut ipsum convallis lacinia. Duis ut lectus consequat, dignissim orci eu, semper purus. Morbi non neque id felis consectetur sodales. Maecenas accumsan congue enim, et auctor tortor faucibus sed. Donec pellentesque ligula massa, in pharetra nisl fermentum ut. Integer porta malesuada tortor, nec laoreet quam porta nec.

        Nunc id elit sed nisi scelerisque semper. Etiam ac sem ac elit blandit interdum. In pellentesque turpis non tortor vestibulum, a lacinia justo sodales. Fusce mollis purus lorem. Ut sit amet cursus urna. Nunc lacinia magna quis augue euismod eleifend ut eget eros. Aliquam suscipit commodo dapibus."
        buttonText="Learn More"
      />
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
        <div className="text-3xl text-center pb-12">
          <span>Our Products</span>
          <div className="mt-3 w-10 bg-black text-black h-1 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              disabled={disabled}
              onClickAdd={() => setDisabled(true)}
              onAddEnded={() => setDisabled(false)}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
