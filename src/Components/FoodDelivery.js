import React from 'react';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


import img1 from '../imagesAdd/1.jpg';
import img2 from '../imagesAdd/2.jpg';
import img3 from '../imagesAdd/3.jpg';
import img4 from '../imagesAdd/4.jpg';
import img5 from '../imagesAdd/5.jpg';
import img6 from '../imagesAdd/6.jpg';
import img7 from '../imagesAdd/7.jpg';
import img8 from '../imagesAdd/8.jpg';

class FoodDelivery extends React.Component {
    render() {
     return (
        <div>
            <section className="section-features js--section-features" id="features">
            <div className="row">
                <h2>Get food fast &mdash; not fast food</h2>
                <p className="long-copy">
                    Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
                </p>
            </div>
            
            <div className="row js--wp-1">
                <div className="col span-1-of-4 box">
                    <AllInclusiveIcon className="icon-big"/>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <AccessAlarmIcon className="icon-big"/>
                    <h3>Ready in 20 minutes</h3>
                    <p>
                        You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-ios-nutrition-outline icon-big"></i>
                    <h3>100% organic</h3>
                    <p>
                        All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <ShoppingCartIcon className="icon-big"/>
                    <h3>Order anything</h3>
                    <p>
                        We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                    </p>
                </div>
            </div>   
            <section className="section-meals">
        <ul className="meals-showcase clearfix">
            <li>
                <figure className="meal-photo">
                    <img src={img1} alt="Korean bibimbap with egg and vegetables"/>
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={img2} alt="Simple italian pizza with cherry tomatoes"/>
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={img3} alt="Chicken breast steak with vegetables"/>
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={img4} alt="Autumn pumpkin soup"/>
                </figure>
            </li>
        </ul>
        <ul className="meals-showcase clearfix">
            <li>
                <figure className="meal-photo">
                    <img src={img5} alt="Paleo beef steak with vegetables"/>
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={img6} alt="Healthy baguette with egg and vegetables"/>
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={img7} alt="Burger with cheddar and bacon"/>
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={img8} alt="Granola with cherries and strawberries"/>
                </figure>
            </li>
        </ul>
    </section>
        </section>
        </div>
        
     );
    };
}

export default FoodDelivery;