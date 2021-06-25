import React, {Component,Fragment} from 'react';

class Footer extends Component {

  render() {
      return (
        <Fragment>
        <footer id="footer" className="section section-grey">
        <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                    <div className="footer-logo">
                    <a className="logo" href="#">
                    <img src="assets/img/logo.png" alt="" />
                    </a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                    <h3 className="footer-header">My Account</h3>
                    <ul className="list-links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">My Wishlist</a></li>
                    <li><a href="#">Compare</a></li>
                    <li><a href="#">Checkout</a></li>
                    <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </div>
            <div className="clearfix visible-sm visible-xs" />
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="footer">
                    <h3 className="footer-header">Customer Service</h3>
                    <ul className="list-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Shiping &amp; Return</a></li>
                        <li><a href="#">Shiping Guide</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="footer">
                    <h3 className="footer-header">Stay Connected</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    <form>
                        <div className="form-group">
                            <input className="input" placeholder="Enter Email Address" />
                        </div>
                        <button className="primary-btn">Join Newslatter</button>
                    </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <div className="footer-copyright">
                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        </Fragment>
      );
  }
}

export default Footer;