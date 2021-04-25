import React from 'react';
import DoneIcon from '@material-ui/icons/Done';

class SignUp extends React.Component {
    render(){
        return (
         <div>
           <section className="section-plans js--section-plans" id="plans">
            <div className="row">
                <h2>Start eating healthy today</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-3">
                    <div className="plan-box js--wp-4">
                        <div>
                            <h3>Premium</h3>
                            <p className="plan-price">$399 <span>/ month</span></p>
                            <p className="plan-price-meal">That's only 13.30$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><DoneIcon className="icon-small"/>1 meal every day</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Order 24/7</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Access to newest creations</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="btn btn-full">Sign up now</a>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Pro</h3>
                            <p className="plan-price">$149 <span>/ month</span></p>
                            <p className="plan-price-meal">That's only 14.90$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>1 meal 10 days/month</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Order 24/7</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Access to newest creations</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Starter</h3>
                            <p className="plan-price">19$ <span>/ meal</span></p>
                            <p className="plan-price-meal">&nbsp;</p>
                        </div>
                        <div>
                            <ul>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>1 meal</li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Order from 8 am to 12 pm</li>
                                <li><DoneIcon className="ion-ios-close-empty icon-small"/></li>
                                <li><DoneIcon className="ion-ios-checkmark-empty icon-small"/>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         </div>
    )
}
}

export default SignUp ;