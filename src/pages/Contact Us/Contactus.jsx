import React, { useEffect } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contactus = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    
    <>
      <Navbar />
      <div class="container">
        <span class="big-circle"></span>
        <img src="https://i.ibb.co/gwVzJmY/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Contact Details</h3>
            <p class="text">
              Contact us via given link or send a message, We will react out as soon as possible
            </p>

            <div class="info">
              <div class="information">
                <img src="https://i.ibb.co/yWGJqx4/location.png" class="icon" alt="" />
                <p>Madhyapur Thimi, 44600</p>
              </div>
              <div class="information">
                <img src="https://i.ibb.co/PwZ8Rtq/email.png" class="icon" alt="" />
                <p>Samyamshr@gmail.com</p>
              </div>
              <div class="information">
                <img src="https://i.ibb.co/sshdmGq/phone.png" class="icon" alt="" />
                <p>+977-9841956958</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100063719195098">
                  <img src="https://i.ibb.co/XyVLRfQ/Facebook.png" alt="" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063719195098">
                  <img src="https://i.ibb.co/kg3J5WD/YouTube.png" alt="" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063719195098">
                  <img src="https://i.ibb.co/6PzLY0j/Twitter.png" alt="" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063719195098">
                  <img src="https://i.ibb.co/wY8mBYC/TikTok.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="https://getform.io/f/eapdjpoa" method='post' autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input type="text" name="name" class="input" />
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div class="input-container">
                <input type="email" name="email" class="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div class="input-container">
                <input type="tel" name="phone" class="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div class="input-container textarea">
                <textarea name="message" class="input"></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contactus;
