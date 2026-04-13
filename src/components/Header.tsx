import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="fixed-top header-anim">
            <nav className="navbar navbar-expand-lg bdr-nav w-100 px-3">

                {/* LEFT: LOGO */}
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="/">
                        <img
                            src="./images/logo/aLl_happy_events_final.png"
                            className="header_logo my-2"
                            alt="logo"
                        />
                    </a>
                </div>

                {/* CENTER: NAV ITEMS */}
                {/* <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse"> */}
                <div id="navbarCollapse" className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav nav-center">

                        {/* VENUES */}
                        <li className="nav-item dropdown mega-parent">
                            <a className="nav-link dropdown-toggle-mob" href="#">
                                Venues <i className="fa fa-chevron-down"></i>
                            </a>

                            <div className="mega-menu venues-mega fix-mega">
                                <div className="mega-left venues-grid">

                                    <div className="mega-col">
                                        <h4>By Type</h4>
                                        <Link to="/venues-list">Banquet Halls</Link>
                                        <Link to="/venues-list">Marriage Garden / Lawns</Link>
                                        <Link to="/venues-list">Event Resorts</Link>
                                        <Link to="/venues-list">Small Function / Party Halls</Link>
                                        <Link to="/venues-list">Destination Event Venues</Link>
                                        <Link to="/venues-list">Kalyana Mandapams</Link>
                                        <Link to="/venues-list">4 Star & Above Hotels</Link>
                                        <Link to="/venues-list">Event Farmhouses</Link>
                                        <Link to="/venues-list">View all Venues</Link>
                                    </div>

                                    <div className="mega-col">
                                        <h4>By City</h4>
                                        <Link to="/venues-list">Hyderabad</Link>
                                        <Link to="/venues-list">Vijayawada</Link>
                                        <Link to="/venues-list">Tirupati</Link>
                                        <Link to="/venues-list">Rajahmundry</Link>
                                        <Link to="/venues-list">Vizag</Link>
                                        <Link to="/venues-list">Warangal</Link>
                                    </div>

                                    <div className="mega-col">
                                        <h4>Popular Picks</h4>
                                        <Link to="/venues-list">Luxury 5-Star Venues</Link>
                                        <Link to="/venues-list">Beach Event Venues</Link>
                                        <Link to="/venues-list">Fort / Palace Venues</Link>
                                        <Link to="/venues-list">Poolside Venues</Link>
                                        <Link to="/venues-list">Budget-Friendly Venues</Link>
                                        <Link to="/venues-list">Intimate Venues</Link>
                                        <Link to="/venues-list">Hill-station Venues</Link>
                                        <Link to="/venues-list">Outdoor Venues</Link>
                                    </div>

                                </div>
                            </div>
                        </li>

                        {/* VENDORS */}
                        <li className="nav-item dropdown mega-parent">
                            <a className="nav-link dropdown-toggle-mob" href="#">
                                Vendors <i className="fa fa-chevron-down"></i>
                            </a>

                            <div className="mega-menu vendors-mega fix-mega">

                                <div className="mega-col">
                                    <a href="Vendors_list.html" className="mb-2">All Event Vendors</a>
                                    <h4>Photographers</h4>
                                    <a href="Vendors_list.html">Photographers</a>
                                    <a href="Vendors_list.html">Videographers</a>

                                    <h4>Makeup</h4>
                                    <a href="Vendors_list.html">Bridal Makeup Artists</a>
                                    <a href="Vendors_list.html">Family Makeup</a>

                                    <h4>Planning & Decor</h4>
                                    <a href="Vendors_list.html">Event Planners</a>
                                    <a href="Vendors_list.html">Decorators</a>

                                    <h4>Virtual Planning</h4>
                                    <a href="Vendors_list.html">Virtual planning</a>

                                    <h4>Mehndi</h4>
                                    <a href="Vendors_list.html">Mehendi Artists</a>

                                </div>

                                <div className="mega-col">
                                    <h4>Entertainment</h4>
                                    <a href="Vendors_list.html">Band baaja's</a>
                                    <a href="Vendors_list.html">Anchors</a>
                                    <a href="Vendors_list.html">Singers</a>
                                    <a href="Vendors_list.html">Live Music</a>
                                    <a href="Vendors_list.html">Musicians</a>
                                    <a href="Vendors_list.html">Entrainers</a>

                                    <h4>Invites & Gifts</h4>
                                    <a href="Vendors_list.html">Invitations</a>
                                    <a href="Vendors_list.html">Favors</a>
                                    <a href="Vendors_list.html">Trousseau Packers</a>
                                    <a href="Vendors_list.html">Mehndi Favors</a>
                                    <a href="Vendors_list.html">View All Invites & Gifts</a>
                                    <a href="Vendors_list.html">Invitation Gifts</a>

                                    <h4>Pandits</h4>
                                    <a href="Vendors_list.html">Wedding Pandits</a>

                                </div>

                                <div className="mega-col">
                                    <h4>Pre Event Shoot</h4>
                                    <a href="Vendors_list.html">Pre Event Shoot Locations</a>
                                    <a href="Vendors_list.html">Pre Event Photographers</a>

                                    <h4>Bridal Wear</h4>
                                    <a href="Vendors_list.html">Bridal Lehengas</a>
                                    <a href="Vendors_list.html">Kanjeevaram / Silk Sarees</a>
                                    <a href="Vendors_list.html">Cocktail Gowns</a>
                                    <a href="Vendors_list.html">Trousseau Sarees</a>
                                    <a href="Vendors_list.html">Bridal Lehenga on Rent</a>
                                    <a href="Vendors_list.html">View All Bridal Wear</a>

                                    <h4>Groom Wear</h4>
                                    <a href="Vendors_list.html">Sherwani</a>
                                    <a href="Vendors_list.html">Event Suits / Tuxes</a>
                                    <a href="Vendors_list.html">Sherwani On Rent</a>
                                    <a href="Vendors_list.html">View All Groom Wear</a>
                                </div>

                                <div className="mega-col">
                                    <h4>Jewellery & Accessories</h4>
                                    <a href="Vendors_list.html">Jewellery</a>
                                    <a href="Vendors_list.html">Flower Jewellery</a>
                                    <a href="Vendors_list.html">Bridal Jewellery on Rent</a>
                                    <a href="Vendors_list.html">Accessories</a>
                                    <a href="Vendors_list.html">View All Jewellery & Accessories</a>

                                    <h4>Food</h4>
                                    <a href="Vendors_list.html">Catering Services</a>
                                    <a href="Vendors_list.html">Cake</a>
                                    <a href="Vendors_list.html">Chaat & Food Stalls</a>
                                    <a href="Vendors_list.html">Bartenders</a>
                                    <a href="Vendors_list.html">View All Food</a>

                                    <h4>Bridal Grooming</h4>
                                    <a href="Vendors_list.html">Beauty and Wellness</a>
                                </div>

                            </div>
                        </li>

                        {/* REAL WEDDINGS  */}
                        <li className="nav-item dropdown mega-parent">
                            <a className="nav-link dropdown-toggle-mob" href="#" data-toggle="dropdown">
                                Real Weddings <i className="fa fa-chevron-down"></i>
                            </a>

                            <div className="mega-menu real-wedding-mega">
                                <div className="mega-col">
                                    <h4>By City</h4>
                                    <Link to="/real-weddings">Hyderabad</Link>
                                    <Link to="/real-weddings">Vijayawada</Link>
                                    <Link to="/real-weddings">Tirupati</Link>
                                    <Link to="/real-weddings">Rajahmundry</Link>
                                    <Link to="/real-weddings">Vizag</Link>
                                    <Link to="/real-weddings">Warangal</Link>
                                </div>


                                <div className="mega-col">
                                    <h4>By Culture</h4>
                                    <Link to="/real-weddings">Maharashtrian</Link>
                                    <Link to="/real-weddings">Punjabi / Sikh</Link>
                                    <Link to="/real-weddings">Bengali</Link>
                                    <Link to="/real-weddings">Gujarati</Link>
                                    <Link to="/real-weddings">Marwari</Link>
                                    <Link to="/real-weddings">Telugu</Link>
                                    <Link to="/real-weddings">Others</Link>
                                </div>

                                <div className="mega-col">
                                    <h4>By Theme</h4>
                                    <Link to="/real-weddings">Destination</Link>
                                    <Link to="/real-weddings">Grand & Luxurious</Link>
                                    <Link to="/real-weddings">Pocket Friendly Stunners</Link>
                                    <Link to="/real-weddings">Intimate & Minimalist</Link>
                                    <Link to="/real-weddings">Modern & Stylish</Link>
                                    <Link to="/real-weddings">International</Link>
                                    <Link to="/real-weddings">Others</Link>
                                </div>
                            </div>
                        </li>

                        {/* BLOG (MEGA MENU – 3 COLUMNS PROPERLY ALIGNED) */}
                        <li className="nav-item dropdown mega-parent">
                            <a className="nav-link dropdown-toggle-mob" href="#" data-toggle="dropdown">
                                Blog <i className="fa fa-chevron-down"></i>
                            </a>

                            <div className="mega-menu blog-mega fix-mega">

                                <div className="blog-grid">

                                    <div className="mega-col">
                                        <h4>Browse by Category</h4>
                                        <a href="blogs_list.html">Bridal Makeup</a>
                                        <a href="blogs_list.html">Honeymoon Travel</a>
                                        <a href="blogs_list.html">Event Songs and Videos</a>
                                        <a href="blogs_list.html">Bridal Hairstyles</a>
                                        <a href="blogs_list.html">Event Decor Ideas</a>
                                        <a href="blogs_list.html">Bridal Style Advice</a>
                                        <a href="blogs_list.html">Event Gifts and Favors</a>
                                        <a href="blogs_list.html">Budget Events</a>
                                        <a href="blogs_list.html">More</a>
                                    </div>

                                    <div className="mega-col">
                                        <h4>Popular Sections</h4>
                                        <a href="blogs_list.html">South Indian wedding</a>
                                        <a href="blogs_list.html">Real Brides Reveal</a>
                                        <a href="blogs_list.html">Bridal Buys</a>
                                        <a href="blogs_list.html">Real Wedding</a>
                                        <a href="blogs_list.html">Mehendi Ideas</a>
                                        <a href="blogs_list.html">Indian Wedding Ideas</a>
                                    </div>

                                    <div className="mega-col">
                                        <h4>Most Searched Blogs</h4>
                                        <a href="blogs_list.html">Event Songs</a>
                                        <a href="blogs_list.html">Best Bridal Entry Songs</a>
                                        <a href="blogs_list.html">Chandni Chowk Lehengas</a>
                                        <a href="blogs_list.html">Best Bridal Hairstyles</a>
                                        <a href="blogs_list.html">Bridal Mehendi Designs</a>
                                        <a href="blogs_list.html">Best Groom Entry Songs</a>
                                        <a href="blogs_list.html">Wittiest Event Hashtags</a>
                                        <a href="blogs_list.html">2025 Marriage Dates</a>
                                        <a href="blogs_list.html">Latest Sabyasachi Lehengas</a>
                                        <a href="blogs_list.html">Bridal Blouse Designs</a>
                                    </div>

                                </div>

                            </div>
                        </li>

                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="d-flex align-items-center ml-auto gx-2 loginsearch">

                    {/* TOGGLE (MOBILE)  */}
                    {/* <button className="navbar-toggler x collapsed p-3" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button> */}

                    <button className={`navbar-toggler x p-3 ${isOpen ? "" : "collapsed"}`} type="button" onClick={toggleNavbar}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>


                    <div className="rr-header-right d-flex align-items-center justify-content-end p-relative mr-30">


                        <div className="rr-header-icon-card d-none d-xl-block p-relative">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.16667 1L1 3.8V13.6C1 13.9713 1.15218 14.3274 1.42307 14.5899C1.69395 14.8525 2.06135 15 2.44444 15H12.5556C12.9386 15 13.306 14.8525 13.5769 14.5899C13.8478 14.3274 14 13.9713 14 13.6V3.8L11.8333 1H3.16667Z"
                                    stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 3.79999H14" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M10.3889 6.60001C10.3889 7.34261 10.0845 8.0548 9.54273 8.57991C9.00095 9.10501 8.26615 9.40001 7.49997 9.40001C6.73379 9.40001 5.99899 9.10501 5.45722 8.57991C4.91545 8.0548 4.61108 7.34261 4.61108 6.60001"
                                    stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>0</span>
                        </div>

                        <div className="rr-header-contat d-none d-md-block ml-35">
                            {/* <a className="rr-btn" href="#" role="button" data-toggle="modal" data-target="#login_form">
                                <span>Login<i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                            </a> */}
                            <LoginModal />
                        </div>

                    </div>



                </div>

            </nav>
        </header>
    );
};

export default Header;