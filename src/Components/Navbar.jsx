const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-dark fixed-top" id="Navbar">
                <div id="nav-top-wrapper">
                        <div>
                            <i className="ri-menu-2-line bars-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation"></i>
                        </div>
                        <div>
                        <a className="navbar-brand ms-1" href="https://www.kfcpakistan.com/"><img src="/Images/kfc-logo.png" alt="" id="logo" /></a>
                        </div>
                    <div id="login-div">
                        <a target="blank" href="https://www.kfcpakistan.com/login"><button className="btn text-light" id="login-btn">LOGIN</button></a>
                        </div> 
                </div>
                <div id="nav-bottom-wrapper">
                    <div>
                        <button id="Nav-btn" className="btn text-light ms-1"><img src="/Images/nav-btn-1.png" alt="" width={25} /> <b>DELIVERY</b></button>
                    </div>
                    <div>
                        <button id="Nav-btn2" className="btn text-light"><img src="/Images/nav-btn-2.png" alt="" width={25} /> <b>PICKUP</b></button>
                    </div>
                </div>
                
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                        <a target="blank" href="https://www.kfcpakistan.com/login"><button className="btn text-light mt-1" id="login-btn">LOGIN</button></a>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <hr id="offcanvas-row" />
                            <a target="blank" href="https://www.kfcpakistan.com/store-locations"><li className="nav mt-2" id="offcanvas-text">
                                <img src="	https://www.kfcpakistan.com/static/media/Store-Locator.f6a5770e5b27f36c215d.jpg" alt="" width={25} className="me-2"/>STORE LOCATOR
                                </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/track-order"><li className="nav-item mt-2" id="offcanvas-text">
                                <img src="	https://www.kfcpakistan.com/static/media/Tracking-order.4b97000517b60dac1935.jpg" alt="" width={25} className="me-2" />TRACK ORDER
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/menu"><li className="nav-item mt-2" id="offcanvas-text">
                                <img src="https://www.kfcpakistan.com/static/media/Explore-menu.5a4a8ea8405b961694cb.jpg" alt="" width={25} className="me-2" />EXPLORE MENU
                            </li>
                            </a>
                            <hr id="offcanvas-row" style={{marginTop:'30px'}}/>
                            <a target="blank" href="https://www.kfcpakistan.com/about-us"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">About Us</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/feedBack"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">FeedBack</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/terms-condition"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">Terms & Conditions</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/privacy-policy"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">Privacy Policy</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/contact-Us"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">Contact Us</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/mitao-Bhook"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">Mitao Bhook</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/mitao-bhook-scholarship"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">Mitao Bhook - Scholarship</h6>
                            </li>
                            </a>
                            <a target="blank" href="https://www.kfcpakistan.com/careers-page"><li className="nav-item mt-2" id="offcanvas-text">
                                <h6 className="canvas-text">Careers</h6>
                            </li>
                            </a>
                            </ul>
                        </div>

                    </div>

            </nav>
        </>
    )
}
export default Navigation


   