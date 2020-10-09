import React,{Component} from 'react';
import {Dropdown} from 'react-bootstrap';



export default class Header extends Component {
    constructor(props) {
    super (props);
    
            this.state = {
                
                inputValue: '',
                isVisible: false
            } 
    }

// the button handler 
    inputValue(e) {
        this.setState({inputValue:e.target.value});
    }
    enter(e) {
        console.log(this.state.inputValue);
        
        fetch('/names/'+this.state.inputValue)
        .then(res => {return res.json()})
        .then(data => {
            console.log(data[0].list);
            // return data;
        })

    }


    //make the categories hyperlinks(with no link)
    //attach a drop down menu on scroll



    render (){
        return (
            <div id= 'header'>

                <img src = {"https://www.visitdevonport.com.au/wp-content/uploads/2019/07/Target.png"} id = 'headPic' alt = 'logo'></img>

                <Dropdown>
                        <Dropdown.Toggle variant="success" id="header-button">
                                Categories
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
            
                                <Dropdown.Item eventKey="1">Main Menu</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Grocery</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Household Essentials</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Halloween</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Woman</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Men</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Young Adult</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Kids</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Baby</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Shoes</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Home</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Furniture</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Kitchen & Dining</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Patio & Garden</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Toys</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Electronics</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Video Games</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Movies, Music & Books</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Sports & Outdoors</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Beauty</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Personal Care</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Health</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Pets</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Luggage</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">School & Office Supplies</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Party Supplies</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Christmas</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Gift Cards</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Gift Ideas</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-5">Clearance</Dropdown.Item>
                                <Dropdown.Divider />
                            </Dropdown.Menu>
                    </Dropdown>
                <Dropdown>

                <Dropdown.Toggle variant="success" id="header-button">
                    Deals
                </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Clearance</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-2">Weekly Ad</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-3">Top Deals</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">RedCard Exclusives</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-5">Target Circle Offers</Dropdown.Item>
                        <Dropdown.Divider />
                    </Dropdown.Menu>
            </Dropdown>
                <Dropdown>
    

                    <Dropdown.Toggle variant="success" id="header-button">
                        Whats New
                    </Dropdown.Toggle>

                            <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">#Target Style</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-2">New in Beauty</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">New in Woman's</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4">Home New Arrivals</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-5">Kids' New Arrivals</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-5">Home Fall Trends & Inspo</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-5">Collector's Spot</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-5">Target Finds</Dropdown.Item>
                                    <Dropdown.Divider />

                            </Dropdown.Menu>
                </Dropdown>
                <Dropdown>

                     <Dropdown.Toggle variant="success" id="header-button">
                         Pickup & Delivery
                    </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Order Pickup</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Same Day Delivery</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Drive Up</Dropdown.Item>
                            </Dropdown.Menu>
                </Dropdown>
                <input id='searchbar' type = 'text' className = 'searchbar' placeholder = 'Search' onChange = {(e) => { this.inputValue(e) }}></input>
                <button id = 'button' onClick = {(e) => {this.enter(e.target.value)}}>Click</button>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="header-button">
                    Sign in
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Sign in</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Create account</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Orders</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1">O Circle</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1">Gift Cards</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">RedCard</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-5">Buy it Again</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-5">My Store</Dropdown.Item>
                    <Dropdown.Divider />
                </Dropdown.Menu>
            </Dropdown>
            </div>
        )
    }

}
            
            
