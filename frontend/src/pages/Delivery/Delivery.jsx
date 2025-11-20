import "./Delivery.css";

import React from "react";

const Delivery = () => {
  return (
    <div className="delivery">
      <h1>Delivery Information</h1>
      <p className="updated">Last updated: November 2025</p>
      <p>
        At Tomato Food Delivery, we are committed to ensuring your food reaches
        you fresh, hot, and on time.
      </p>{" "}
      <br />
      <h2>Delivery Areas</h2>
      <p>
        We offer delivery services in the following locations: [List your
        delivery zones or cities here]. We are constantly expanding to serve you
        better.
      </p>{" "}
      <br />
      <h2>Delivery Times</h2>
      <p>
        Our typical delivery time ranges between 30 to 60 minutes, depending on
        the restaurant, your location, and order volume. We strive to notify you
        promptly of any delays.
      </p>{" "}
      <br />
      <h2>Order Tracking</h2>
      <p>
        Once your order is confirmed, you can track its status live through our
        website or mobile app. Stay updated with real-time notifications until
        your food arrives.
      </p>{" "}
      <br />
      <h2>Delivery Charges</h2>
      <p>
        Delivery fees vary based on distance and order value. Details are
        provided before checkout so you can review before placing your order.
      </p>{" "}
      <br />
      <h2>Special Instructions</h2>
      <p>
        You can add special delivery or food preparation requests during
        checkout. Our delivery partners will do their best to accommodate your
        needs.
      </p>{" "}
      <br />
      <h2>Contact for Delivery Issues</h2>
      <p>
        For any inquiries or concerns regarding your delivery, please contact
        our support team at{" "}
        <a href="mailto:zubairgani003@gmail.com">zubairgani003@gmail.com</a> or
        call us directly.
      </p>
    </div>
  );
};

export default Delivery;
