import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const cards = () => (
    <div class="blog-card">
    <div class="meta">
      <div class="photo"></div>
      <ul class="details">
        <li class="author"><a href="#">Hamilton</a></li>
        <li class="date">Nov. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Broadway</a></li>
            <li><a href="#">Musical</a></li>
            <li><a href="#">Chicago</a></li>
            <li><a href="#">CIBC</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Hamilton</h1>
      <h2>7pm - CIBC Theatre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Learn More</a>
      </p>
    </div>
  </div>
);

export default cards;
