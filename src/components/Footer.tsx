import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="rr-footer-2-main p-relative fix px-4">

                {/* Footer Area */}
                <div className="rr-footer-2-area pt-85 py-3 p-relative fix">
                    <div className="container-fluid">
                        <div className="rr-footer-2-border">
                            <div className="row gx-30">

                                {/* Column 1 */}
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
                                    <div className="rr-footer-2-widget footer-cols-1">

                                        <div className="rr-footer-2-logo pb-20">
                                            <a href="#">
                                                <img
                                                    src="./images/logo/logo_all_happy_events.png"
                                                    className="Footer_logo"
                                                    alt="logo"
                                                />
                                            </a>
                                        </div>

                                        <div className="rr-footer-2-widget-content mb-25">
                                            <p>
                                                Your trusted partner for matrimony services and event planning, offering seamless coordination, personalized support, and memorable experiences for every celebration.
                                            </p>
                                        </div>

                                        <div className="rr-footer-2-social d-flex align-items-center">
                                            <span>Follow Us :</span>

                                            <a href="#"><i className="fa fa-facebook" /></a>
                                            <a href="#"><i className="fa fa-linkedin" /></a>
                                            <a href="#"><i className="fa fa-twitter" /></a>
                                            <a href="#"><i className="fa fa-instagram" /></a>
                                        </div>

                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                                    <div className="rr-footer-2-widget footer-cols-2">
                                        <h4 className="rr-footer-2-title">Information</h4>

                                        <ul className="p-0 footerinfo">
                                            <li className="footinfo"><a href="/venues">Venues</a></li>
                                            <li className="footinfo"><a href="/vendors">Vendors</a></li>
                                            <li className="footinfo"><a href="/photos">Photos</a></li>
                                            <li className="footinfo"><a href="/real-weddings">Real Weddings</a></li>
                                            <li className="footinfo"><a href="/blogs">Blog</a></li>
                                        </ul>

                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                                    <div className="rr-footer-2-widget footer-cols-1">

                                        <h4 className="rr-footer-2-title">Contact</h4>

                                        <div className="rr-footer-2-widget-content mb-25">
                                            <p>Would you have any enquiries.Please feel free to contuct us</p>

                                            <div className="rr-footer-2-widget-content-item">
                                                <i className="fa-regular fa-envelope"></i>
                                                <a href="mailto:allhappyevents@gmail.com" className="p-2">
                                                    allhappyevents@gmail.com
                                                </a>
                                            </div>

                                            <div className="rr-footer-2-widget-content-item">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <a href="tel:+919876543210" className="p-2">
                                                    +91 987 654 3210
                                                </a>
                                            </div>

                                            <div className="rr-footer-2-widget-content-item">
                                                <i className="fa-solid fa-map"></i>
                                                <a href="#" className="p-2">
                                                    <span>Hyderabad - India</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="rr-copyright-2-area p-relative">
                    <div className="container rr-copyright-2-broder rr-copyright-2-space">
                        <div className="row text-center">
                            <div className="col-12">
                                <p>
                                    © 2025 <a href="#" className="footlow">All Happy Events</a> All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;