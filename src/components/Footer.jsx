import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className="truck-logo"></div>
        <div className="contact-us">
            <div className="head">Contact Us</div>
            <div className="address">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434 </div>
            <div className="mail-id">example2020@gmail.com</div>
            <div className="phone">(904) 443-0343 </div>
        </div>
        <div className="more">
            <div className="more-head">More</div>
            <div className="about">About Us</div>
            <div className="product">Products</div>
            <div className="career">Career</div>
            <div className="contact">Contact Us</div>
        </div>
        <div className="social-links">
            <div className="social-head">Social Links</div>
            <div className="links">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="copyright">© 2022 Food Truck Example</div>
        </div>

    </section>
    </>
  )
}

export default Footer