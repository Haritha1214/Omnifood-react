import React from 'react';
import {BrowserRouter,Switch,NavLink,Route} from 'react-router-dom';
import SignUp from './SignUp';
import FoodDelivery from './FoodDelivery';
import HowItWorks from './HowItWorks';
import OurCities from './OurCities';


import img from '../imagesAdd/logo.png';
import img1 from '../imagesAdd/logo-white.png';



class NavList extends React.Component {
    render(){
        return(
        
        <div>
            <BrowserRouter>
        
            <ul className="main-nav js--main-nav">
                <li><NavLink to="/">NavList</NavLink></li>
                <li><NavLink to="/food_delivery">Food delivery</NavLink></li>
                <li><NavLink to="/working">How it works</NavLink></li>
                <li><NavLink to="/cities">Our cities</NavLink></li>
                <li><NavLink to="/Sign_Up">Sign up</NavLink></li>
            </ul>
            <Switch>
                <Route path='/' exact component={NavList}/>
                <Route path='/Sign_Up'  component={SignUp}/>
                <Route path='/food_delivery'  component={FoodDelivery}/>
                <Route path='/working'  component={HowItWorks}/>
                <Route path='/cities'  component={OurCities}/>
            </Switch> 
           
            </BrowserRouter>



            <div className="hero-teext-box">    
            <section id="back_home">
                       
                <img src={img1} alt="Omnifood logo" className="logo"/>
                <img src={img} alt="Omnifood logo" className="logo-black"/>
         
            <header>
                <h1>Goodbye junk food.<br/>Hello super healthy meals</h1>
                <a className="btn btn-full js--scroll-to-plans" href="/">I'm hungry</a>
                <a className="btn btn-ghost js--scroll-to-start" href="/">Show me more</a>
            </header>
            </section>
            </div>
           
           
              
           
         </div>
        
    
        )
    }
};

export default NavList;
