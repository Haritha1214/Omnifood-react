import React from 'react';
import NavList from './NavList';
import SignUp from './SignUp';
import FoodDelivery from './FoodDelivery';
import HowItWorks from './HowItWorks';
import OurCities from './OurCities';
import Footer from './Footer';






const App = () => {
    return (
        <div>
            
            <NavList/>
            <FoodDelivery/>
            <HowItWorks/>
            <OurCities/>
            <SignUp/>  
            <Footer/> 
            
        </div>
    );
};

export default App;