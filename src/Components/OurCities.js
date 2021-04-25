import React from 'react';
import img from '../imagesAdd/lisbon-3.jpg';
import img1 from '../imagesAdd/san.jpg';
import img2 from '../imagesAdd/london.jpg';
import img3 from '../imagesAdd/berlin.jpg';
import cus1 from '../imagesAdd/customer-1.jpg';
import cus2 from '../imagesAdd/customer-2.jpg';
import cus3 from '../imagesAdd/customer-3.jpg';

class OurCities extends React.Component{
    render(){
        return (
            <div>
                <section className="section-cities" id="cities">
                <div className="row">
                  <h2>We're currently in these cities</h2>
                </div>
                <div className="row js--wp-3">
                
                    <div className="col span-1-of-4 box">
                    <img src={img} alt="Lisbon"/> 
                      <h3>Lisbon</h3>
                      <div className="city-feature">
                        <i className="ion-ios-person icon-small"></i>
                        1600+ happy eaters
                      </div>
                      <div className="city-feature">
                        <i className="ion-ios-star icon-small"></i>
                        60+ top chefs
                      </div>
                      <div className="city-feature">
                        <i className="ion-social-twitter icon-small"></i>
                        <a href="/">@omnifood_lx</a>
                      </div>
                      
                    </div>
                    <div className="col span-1-of-4 box">
                    <img src={img1} alt="San Francisco"/>
                     <h3>San Francisco</h3>
                     <div className="city-feature">
                        <i className="ion-ios-person icon-small"></i>
                        3700+ happy eaters
                     </div>
                     <div className="city-feature">
                        <i className="ion-ios-star icon-small"></i>
                        160+ top chefs
                     </div>
                     <div className="city-feature">
                        <i className="ion-social-twitter icon-small"></i>
                        <a href="/">@omnifood_sf</a>
                     </div>
                     
                     
                
                    </div>
                    <div className="col span-1-of-4 box">
                    <img src={img3} alt="Berlin"/>
                    <h3>Berlin</h3>
                      <div className="city-feature">
                        <i className="ion-ios-person icon-small"></i>
                        2300+ happy eaters
                      </div>
                      <div className="city-feature">
                        <i className="ion-ios-star icon-small"></i>
                        110+ top chefs
                      </div>
                      <div className="city-feature">
                        <i className="ion-social-twitter icon-small"></i>
                        <a href="/">@omnifood_berlin</a>
                      </div>
                      
                    </div>
                <div className="col span-1-of-4 box">
                <img src={img2} alt="London"/>
                    <h3>London</h3>
                    <div className="city-feature">
                        <i className="ion-ios-person icon-small"></i>
                        1200+ happy eaters
                    </div>
                    <div className="city-feature">
                        <i className="ion-ios-star icon-small"></i>
                        50+ top chefs
                    </div>
                    <div className="city-feature">
                        <i className="ion-social-twitter icon-small"></i>
                        <a href="/">@omnifood_london</a>
                    </div>
                    
                </div>
            </div>
            
                </section>
                <div>
            <section className="section-testimonials">
            <div className="row">
                <h2>Our customers can't live without us</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-3">
                    <blockquote>
                        Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite><img src={cus1} alt="Customer 1"/>Alberto Duncan</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                       Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                        <cite><img src={cus2} alt="Customer 2"/>Joana Silva</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                    <cite><img src={cus3} alt="Customer 3"/>Milton Chapman</cite>
                    </blockquote>
                </div>
            </div>
        </section>
        
            
        </div>




                </div>



            
        )
}
}

export default OurCities;