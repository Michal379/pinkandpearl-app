import React from "react";
import backgroundImage from "../images/test.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top", // Center image at the top
    display: "flex",
    flexDirection: "column", // Ensure child elements stack vertically
    justifyContent: "center", // Center everything vertically
    alignItems: "center", // Center everything horizontally
    color: "#fff",
    filter: "brightness(0.7)",
  };

  const textStyles = { 
    color: "black",
    fontSize: "20px",
    textDecoration: "none",
  };

  const buttonStyle = {
    backgroundColor: "#007bff", // Button background color
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.3s", // Transition for hover effect
  };

  const buttonHoverStyle = {
    backgroundColor: "#c79939", // Hover color
  };

  const sliderSettings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  const starStyle = {
    color: "yellow", 
  };

  const reviewData = [
    {
      name: "vivian mugoya",
      avatarUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjVDyX6AifDFrfbrRkaKKZN6IhJl1Rjmftddz5wK_oWLLIFv=w60-h60-p-rp-mo-ba3-br100",
      rating: 5,
      reviewText:
        "Exceptional services. Warm and kind ladies. Clean waxing rooms. Immaculate bathrooms. Pocket friendly. Great location. The owner really thought things through. Consider coming early though coz it can get quite busy in the afternoons. Otherwise everything is perfect. Give them all your monies.",
      reviewLink:
        "https://www.google.com/maps/contrib/106719335585307492309/reviews/@-0.6489705,36.1142948,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu",
    },
    {
      name: "Edel Denise",
      avatarUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjWL5HHAe9F0FypLuWr8n3xL5GTEG1leq0HmeyKtGRwZra0C=w60-h60-p-rp-mo-ba4-br100",
      reviewLink:
        "https://www.google.com/maps/contrib/116409633260878111748/reviews/@-1.2527368,36.7638528,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu",
      rating: 5,
      reviewText:
        "Switched waxers and I decided to try them... for the first time I had a painless waxing session. The line was long though so its better to go early. Definitely my new waxing spot.",
    },
    {
      name: "Elizabeth Wachira",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocKZ9EyvND1eQo504wfywr8gCprwjdAG-_Dj3SrOExg7=w60-h60-p-rp-mo-br100",
      reviewLink:
        "https://www.google.com/maps/contrib/100979742291071467365/reviews/@-1.2451994,36.7788087,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu",
      rating: 5,
      reviewText:
        "Thank you so much pinkandpearl for handling me so well n professionally.I really enjoyed my Brazilian wax n the tumeric mask.The girl who served me was so gentle and  kind.I am definitely coming back n bringing in more",
    },
    {
      name: "Dorris Muthoni",
      avatarUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjVlPeTEmn4nxat1A6OCQeJcqmXJDKYi8gQoO3LUb5uZWw=w60-h60-p-rp-mo-br100",
      reviewLink:
        "https://www.google.com/maps/contrib/114244555401464165894/reviews/@-1.2853413,36.8178711,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu",
      rating: 5,
      reviewText:
        "I really loved the place,you guys are so gentle I would 100% recommend  and youve owned yourself a regular client.",
    }
  ];

  return (
    <section className="reviews" style={containerStyle}>
      <h2 style={textStyles}>Google Reviews</h2>
      <div className="container">
        <Slider {...sliderSettings}>
        <div className="row">
          {reviewData.map((review, index) => (
            <div className="col-md-12" key={index}>
              <div className="review">
                <div className="review-info">
                  <img src={review.avatarUrl} alt={`Reviewer ${index + 1}`} />
                  <div className="reviewer-details">
                    <h4>
                      <a
                        className="review-name"
                        href={review.reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {review.name}
                      </a>
                    </h4>
                    <p style={textStyles}>{review.date}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="star" style={starStyle}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="review-text" style={textStyles}>
                  {review.reviewText}
                </p>
              </div>
            </div>
          ))}
        </div> 
        </Slider>       
      </div>
      <div className="center-content">
          <h4>
            <a
              href="https://www.google.com/search?q=pinkandpearlwaxingbar&oq=pinkandpearlwaxingbar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg8IARAuGA0YrwEYxwEYgAQyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg80gEIODQxOWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x182f117173d9a8f7:0x80601aef4f20c9ee,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              style={textStyles}
            >
              See All Reviews
            </a>
          </h4>
          <a
            href="https://www.google.com/search?q=pinkandpearlwaxingbar&oq=pinkandpearlwaxingbar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg8IARAuGA0YrwEYxwEYgAQyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg80gEIODQxOWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x182f117173d9a8f7:0x80601aef4f20c9ee,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, ...buttonHoverStyle }} // Merge styles for hover effect
          >
            WRITE A REVIEW ON GOOGLE
          </a>
        </div>
    </section>
  );
};

export default Testimonials;
