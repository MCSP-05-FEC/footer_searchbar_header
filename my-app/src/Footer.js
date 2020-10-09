import React from 'react';
import {Dropdown} from 'react-bootstrap';


const Footer = (props) => {
    

    
        return (

            <div id = 'footer'>
            <div id ='container'>
                <Dropdown>
                <Dropdown.Toggle variant="success" id= 'footer-button'>
                    Help
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >Help</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Shipping Delivery</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Returns</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1">Track Orders</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1">Size Charts</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-5">Feedback</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-5">Accessibility</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-5">See All Help</Dropdown.Item>
                    <Dropdown.Divider />
                </Dropdown.Menu>
            </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant = 'success' id = 'footer-button'>
                        Stores
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >Stores</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Find a Store</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Clinic</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Optical</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Pharmacy</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Photo Center</Dropdown.Item>
                        <Dropdown.Divider />
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant = 'success' id = 'footer-button'>
                        Apps
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu >
                        <Dropdown.Item >Apps</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Find a Store</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Find a Store</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Find a Store</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Find a Store</Dropdown.Item>
                        <Dropdown.Divider />
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant = 'success' id = 'footer-button'>
                        Social
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu >
                        <Dropdown.Item >Social</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Pinterest</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Facebook</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Instagram</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Twitter</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>YouTube</Dropdown.Item>
                        <Dropdown.Divider />
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown>
                    <Dropdown.Toggle variant = 'success' id = 'footer-button'>
                        More
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu >
                        <Dropdown.Item >More</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>RedCard</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Emails</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Careers</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Advertise With Us</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Subscriptions</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Bullseye Shop</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>News & Blog</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Corporate Responsibility</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Security and Fraud</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Investor Relations</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Pressroom</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Affirmations</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Suppliers</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Teams Member Services</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#/action-1'>Dermstore.com</Dropdown.Item>
                        <Dropdown.Divider />
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <hr id = 'line'/>

                <div id = 'fcontainer'>
                    <b>The latest on our store health and saftey plans</b>
                </div>
                    
                <div id = 'footerList'>
                        <p href='#/action-1'>Recall</p>
                        <p href='#/action-1'>Terms</p>
                        <p href='#/action-1'>Intrest-Based Acts</p>
                        <p href=''>CA Privacy Rights</p>
                        <p href=''>CA Supply Chain Act</p>
                        <p href=''>Privacy</p>
                        <p href=''><b>Do Not Sell My Info - CA Resient Only</b></p>
                        <p href=''>& @ 2020 Target Brands, Inc.</p>
                    </div>
            
            <img src ={"https://www.visitdevonport.com.au/wp-content/uploads/2019/07/Target.png"} id = 'lastImg' alt='logo1'></img>
            </div>
        )
    




}

export default Footer;