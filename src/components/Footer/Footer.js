import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="form__footer">
            <div className="wrap-logo">
                <img className="logo-amz" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"></img>
            </div>
            <div className="about-us">
                <h1>About Us</h1>
                <p>Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.</p>
                <a href="https://www.facebook.com/amazon"><i class="fab fa-facebook fa-3x"></i></a>
                <a className="logo-ins" href="https://www.instagram.com/amazon"></a>
            </div>
        </div>
    )
}

export default Footer
