import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <body className="home-body">
        <div>
          <p className="body-first-text">
            You got the travel plans, we got the travel vans.
          </p>
          <p className="body-second-text">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
        </div>
        <button className="body-button">Find your van</button>
      </body>
      <Footer />
    </div>
  );
}
