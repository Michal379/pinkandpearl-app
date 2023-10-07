import React from 'react';
import backgroundImage from './images/tt.jpeg';

const Testimonials = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column', // Ensure child elements stack vertically
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center', // Center-align text
  };

  const textStyles = {
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#007bff', // Button background color
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s', // Transition for hover effect
  };

  const buttonHoverStyle = {
    backgroundColor: '#c79939', // Hover color
  };


  const reviewData = [
    {
      name: 'vivian mugoya',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVDyX6AifDFrfbrRkaKKZN6IhJl1Rjmftddz5wK_oWLLIFv=w60-h60-p-rp-mo-ba3-br100',
      rating: 5,
      reviewText: 'Exceptional services. Warm and kind ladies. Clean waxing rooms. Immaculate bathrooms. Pocket friendly. Great location. The owner really thought things through. Consider coming early though coz it can get quite busy in the afternoons. Otherwise everything is perfect. Give them all your monies.',
      reviewLink: 'https://www.google.com/maps/contrib/106719335585307492309/reviews/@-0.6489705,36.1142948,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
    },
    {
      name: 'Edel Denise',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXPYqow8XeIzoxMR1v2mcuFXdkP9uIwUvN13wdfpQvmn2o=w60-h60-p-rp-mo-br100',
      reviewLink: 'https://www.google.com/maps/contrib/116409633260878111748/reviews/@-1.2527368,36.7638528,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'Switched waxers and I decided to try them... for the first time I had a painless waxing session. The line was long though so its better to go early. Definitely my new waxing spot.',
    },
    {
      name: 'Elizabeth Wachira',
      avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKZ9EyvND1eQo504wfywr8gCprwjdAG-_Dj3SrOExg7=w60-h60-p-rp-mo-br100',
      reviewLink: 'https://www.google.com/maps/contrib/100979742291071467365/reviews/@-1.2451994,36.7788087,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'Thank you so much pinkandpearl for handling me so well n professionally.I really enjoyed my Brazilian wax n the tumeric mask.The girl who served me was so gentle and  kind.I am definitely coming back n bringing in more',
    },
    {
      name: 'Dorris Muthoni',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVlPeTEmn4nxat1A6OCQeJcqmXJDKYi8gQoO3LUb5uZWw=w60-h60-p-rp-mo-br100',
      reviewLink: 'https://www.google.com/maps/contrib/114244555401464165894/reviews/@-1.2853413,36.8178711,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'I really loved the place,you guys are so gentle I would 100% recommend  and youve owned yourself a regular client.',
    },
    {
      name: 'susan sargina',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWetZWld4Fp0L2entCxbgjJrpu71FT-VbAmhbH518Lyu2w=w60-h60-p-rp-mo-br100',
      reviewLink: 'https://www.google.com/maps/contrib/112087114951444431125/reviews/@-1.2859399,36.817438,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'Good customer service, bought an hp laptop last week and so far so good.',
    },
    {
      name: 'Allan Karani',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXwY1rKbERWcFSk7y1qNtTBqotG3wipkz8DPvTFsj22sw=w60-h60-p-rp-mo-br100',
      reviewLink: 'https://www.google.com/maps/contrib/115586886598664822528/reviews/@-1.2296268,36.7626388,11z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'For any Laptop related purchases, accessories, repair services, and inquiries at large, visit Kurunzi Tech Media. Transparency, customer-friendly prices, and quality are guaranteed. 🔥💯',
    },
    {
      name: 'Purity Muthoni',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUHGXtAF9uMIE_6q82rBYyD16jDFs9a3ftP5432l3HHRL0=w60-h60-p-rp-mo-br100',
      reviewLink: 'https://www.google.com/maps/contrib/102337018987037654545/reviews/@-2.3540675,36.0763175,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'Was great working with these professionals. Customer support at 💯.',
    },
    {
      name: 'Ahmed Mwenda',
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUkuTCXXwCCwa0BIDjs5y3hV44bioOQA8rtk5TDPEW-vRs=w60-h60-p-rp-mo-ba3-br100',
      reviewUrl: 'https://www.google.com/maps/contrib/109934431422374581123/reviews/@-0.0515013,36.4576791,8z?hl=en-US&entry=ttu',
      rating: 5,
      reviewText: 'Excellent customer service. Dedicated to meeting customer needs. Got what I wanted after viewing several products. I highly recommend them to anyone seeking computer tech services.',
    },
  ];

  return (
    <section className="reviews" style={containerStyle}>
      <div className="container">
        <h2 style={textStyles}>Google Reviews</h2>
        <div className="row">
          {reviewData.map((review, index) => (
            <div className="col-md-6" key={index}>
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
                    <span key={i} className="star">&#9733;</span>
                  ))}
                </div>
                <p className="review-text" style={textStyles}>
                  {review.reviewText}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="center-content">
          <h4>
            <a
              href="https://www.google.com/search?q=kurunzi+tech&oq=kurunzi+tech&aqs=chrome.0.35i39i650j46i175i199i512j69i64j0i22i30j69i60l3.4120j0j7&sourceid=chrome&ie=UTF-8#lrd=0x182f114f158d9f63:0x53093ba43f7c6a25,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              style={textStyles}
            >
              See All Reviews
            </a>
          </h4>
          <a
            href="https://www.google.com/search?q=kurunzi+tech&oq=kurunzi+tech&aqs=chrome.0.35i39i650j46i175i199i512j69i64j0i22i30j69i60l3.4120j0j7&sourceid=chrome&ie=UTF-8#lrd=0x182f114f158d9f63:0x53093ba43f7c6a25,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, ...buttonHoverStyle }} // Merge styles for hover effect
          >
            WRITE A REVIEW ON GOOGLE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

