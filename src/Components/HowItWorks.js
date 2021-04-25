import { LinkedCameraTwoTone } from '@material-ui/icons';
import React from 'react';
import img from '../imagesAdd/android.png';
import img2 from '../imagesAdd/app.svg';
import img3 from '../imagesAdd/iPhone.png';


class HowItWorks extends React.Component {
    render(){
     return (
        <div>
            <section className="section-steps" id="works">
            <div className="row">
                <h2>How it works &mdash; Simple as 1, 2, 3</h2>
            </div>
            <section className="row">
                <div className="col span-1-of-2 steps-box">
                    <img src={img3} alt="Omnifood app on iPhone" className="app-screen js--wp-2 animated fadeInUp"/>
                </div>
                <div div className="col span-1-of-2 steps-box">
                    <div className="works-step clearfix">
                        <div>1</div>
                        <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                    </div>
                    <div className="works-step clearfix">
                        <div>2</div>
                        <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                    </div>
                    <div className="works-step clearfix">
                        <div>3</div>
                        <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                    </div>
                    <div>
                    <a href="/" className="btn-app"></a><img src={img2} alt="App Store Button"/>
                    <a href="/" className="btn-app"></a><img src={img} alt="Play Store Button"/>
                    </div>
                    
                <div/>
            </div>
        </section>
        </section>
        </div>
        
    
         )    }
    
};

export default HowItWorks;