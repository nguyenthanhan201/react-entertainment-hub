import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Footer.css";


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function Footer() {
    return (
        <>
          {/* <div className="notch"></div> */}
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" className="img1"/>
                </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" className="img1"/>
                </SwiperSlide>
            </Swiper>
            <FooterCantainer className="main-footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            {/* cot 1 */}
                            <div className="col-md-6 ">
                                {/* <img src={Logo} width="15%" alt="logo"/> */}
                                <h4><strong>About Us</strong></h4>
                                <ul className="list-unstyled">
                                    <li>Hệ thống của Trung tâm IT được xây dựng tỉ mỉ nhằm nâng cao tính tương tác giữa học viên và giáo viên.
                                        Nó cung cấp kiến thức chân thực và dễ dàng để tiếp thu kiến thức cũng như giúp giáo viên dễ dàng tiếp cận học sinh hơn.</li>
                                </ul>
                            </div>
                            {/* cot 2 */}
                            <div className="col-md-2">
                                <h4><strong>Products</strong></h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">React</a></li>
                                    <li><a href="/">JavaScript</a></li>
                                    <li><a href="/">Programming</a></li>
                                    <li><a href="/">Kenvin</a></li>
                                </ul>
                            </div>
                            {/* cot 3 */}
                            <div className="col-md-3">
                                <h4><strong>Contact</strong></h4>
                                <ul className="list-unstyled">
                                    <li><FaHome /><a href="/"> Tp.Ho Chi Minh City </a></li>
                                    <li><FaPhone /><a href="/"> 0939461842</a></li>
                                    <li><FaEnvelope /><a href="/"> ngoctam2303001@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="row ml-1">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <div className="button">
                                        <div className="icon"><i><FaFacebook /></i></div>
                                        <span>Facebook</span>
                                    </div>
                                    <div className="button">
                                        <div className="icon"><i><FaInstagram /></i></div>
                                        <span>Instagram</span>
                                    </div>
                                    <div className="button">
                                        <div className="icon"><i><FaYoutube /></i></div>
                                        <span>Youtube</span>
                                    </div>
                                    <div className="button">
                                        <div className="icon"><i><FaGithub /></i></div>
                                        <span>Github</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </FooterCantainer>
        </>
    );
}

export default Footer;

const FooterCantainer = styled.footer`

h4{
    transition: all .2s;
}

h4:hover{
    color:black;
    font-size:30px;
}

.container{
    background: #282c34;
}

.footer-middle{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius:15px;
    background: #282c34;
    padding-top: 3rem;
    color: #f8fff9;
    padding-bottom: 3rem;
}

img{
    height:70px;
}

ul li a{
    color: var(--mainGrey);
    text-decoration: none;
    transition: all .2s;
}
ul li a:hover{
    color:black;
    font-size:15px;
}

.wrapper .button{
    display:inline-block;
    height:50px;
    width:50px;
    float:left;
    margin: 0 5px;
    overflow:hidden;
    background: #fff;
    border-radius: 50px;
    cirsor:pointer;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease-out;
}

.wrapper .button:hover{
    width: 200px;
}

.wrapper .button .icon{
    display:inline-block;
    height:50px;
    width:50px;
    text-align:center;
    border-radius: 50px;
    box-sizing:border-box;
    line-height: 45px;
    color: black!important;
}

.wrapper .button:nth-child(1):hover .icon{
    background: #4267B2;
}
.wrapper .button:nth-child(2):hover .icon{
    background: #E1306C;
}
.wrapper .button:nth-child(3):hover .icon{
    background: #ff0000;
}
.wrapper .button:nth-child(4):hover .icon{
    background: #333;
}

.wrapper .button .icon i{
    font-size:25px;
    line-height:45px;
    transition: all 0.3s ease-out;
}

.wrapper .button:hover .icon i{
    color:#fff;
}

.wrapper .button span{
    font-size: 20px;
    font-weight:500;
    line-height:45px;
    margin-left:10px;
}

.wrapper .button:nth-child(1) span{
    color: #4267B2;
}
.wrapper .button:nth-child(2) span{
    color: #E1306C;
}
.wrapper .button:nth-child(3) span{
    color: #ff0000;
}
.wrapper .button:nth-child(4) span{
    color: #333;
}

`