import React from "react";

export default function Support() {
  return (
    <div className="container">
      <div className="text-center my-5 video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HexEjY9freo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="my-5">
        <h5>What We Are</h5>
        <p>
          নিউট্রিশন বি is a platform through which students studying nutrition
          science in various institutions can spread their knowledge of
          nutrition and play a leading role in promoting nutrition education in
          society.
        </p>

        <h5>What We Do</h5>
        <p>
          Good nutrition is essential for good health. However, the role of
          nutritional components in food intake often goes unnoticed. Many
          people are unaware of which nutrients are present in which foods and
          when the right amount of nutrition is not received, the body suffers.
          Nutrition Bee works to eliminate all such information and
          misconceptions related to nutrition and contribute to building a
          healthy and disease-free nation.
        </p>

        <h5 className="text-center">Feel Free to Call Us for Any Support</h5>
      </div>
    </div>
  );
}
