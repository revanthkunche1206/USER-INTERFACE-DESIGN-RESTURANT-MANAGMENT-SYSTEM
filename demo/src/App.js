
import './App.css';

import time from './assets/images/time.png';
import location from './assets/images/location.png';
import email from './assets/images/email.png';
import call from './assets/images/call.png';
import badge1 from './assets/images/badge1.png';
import badge2bg from './assets/images/badge2bg.png';
import badge2 from './assets/images/badge2.png';
import bannerabout from './assets/images/bannerabout.jpg';
// import chef1 from './assets/images/chef1.jpg';
// import chef2 from './assets/images/chef2.webp';
// import chef3 from './assets/images/chef3.jpg';
import communityevent from './assets/images/communityevent.jpeg';
import deliverybannerbg from './assets/images/deliverybannerbg.png';
import deliveryboy from './assets/images/deliveryboy.svg';
import hybdumbiryani from './assets/images/hybdumbiryani.JPG';
import FamilyGatherings1 from './assets/images/FamilyGatherings1.jpg';
import featuresicon1 from './assets/images/featuresicon1.png';
import featuresicon2 from './assets/images/featuresicon2.png';
import featuresicon3 from './assets/images/featuresicon3.png';
import featuresicon4 from './assets/images/featuresicon4.png';
// import footerbg from './assets/images/footerbg.jpg';
// import footerformbg from './assets/images/footerformbg.png';
// import footerformpattern from './assets/images/footerformpattern.svg';
// import formpattern from './assets/images/formpattern.png';
import GettyImages from './assets/images/GettyImages.jpg';
// import heroicon from './assets/images/heroicon.png';
import heroslider1 from './assets/images/heroslider1.jpg';
import heroslider2 from './assets/images/heroslider2.jpg';
import heroslider3 from './assets/images/heroslider3.jpg';
import imgondec from './assets/images/imgondec.avif';
import imgpattern from './assets/images/imgpattern.svg';
import logo1 from './assets/images/logo1.svg';
import menu1 from './assets/images/menu1.jpg';
import menu2 from './assets/images/menu2.webp';
import menu3 from './assets/images/menu3.jpg';
import menu4 from './assets/images/menu4.jpg';
import menu5 from './assets/images/menu5.jpg';
import menu6 from './assets/images/menu6.webp';
import menu7 from './assets/images/menu7.webp';
import menu8 from './assets/images/menu8.jpeg';
// import reservationbg from './assets/images/reservationbg.jpg';
// import reservationform from './assets/images/reservationform.webp';
// import reservationformbg from './assets/images/reservationformbg.jpg';
import separator from './assets/images/separator.svg';
// import service1 from './assets/images/service1.jpg';
// import service2 from './assets/images/service2.jpg';
// import service3 from './assets/images/service3.jpg';
// import shape1 from './assets/images/shape1.png';
// import shape2 from './assets/images/shape2.png';
// import shape3 from './assets/images/shape3.png';
// import shape4 from './assets/images/shape4.png';
// import shape5 from './assets/images/shape5.png';
// import shape6 from './assets/images/shape6.png';
import shape7 from './assets/images/shape7.png';
import shape8 from './assets/images/shape8.png';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <div>
    <div id="home" className="home-main">
      <div className="topbar-bar">
        <div className="topbar-main">
          <div className="topbar-item-bar">
            <div className="icon-bar-loction">
              <img src={location} alt="logo" className="logo-bar-location" />
            </div>
            <span className="span-bar">
              Restaurant St, Delicious City
            </span>
          </div>
          <div className="separator-bar" />
          <div className="topbar-1234">
            <div className="topbar-item-bar-2 item-2-bar">
              <div className="icon-bar-loction">
                <img src={time} alt="logo" className="logo-bar-location" />
              </div>
              <div className="M-BAR">
                <span className="span-bar">Daily : 8.00 am to 10.00 pm</span>
              </div>
            </div>
            <div className="num-bar">
              <a href="tel:+11234567890" className="topbar-item-bar-3 link-bar">
                <div className="icon-bar-loction">
                  <img src={call} alt="logo" className="logo-bar-location" />
                </div>
                <span className="span-bar">+91 9505581103</span>
              </a>
            </div>
          </div>
          <div className="separator-bar" />
          <div className="email-bar">
            <a href="mailto:booking@restaurant.com" className="topbar-item-bar-4 link-bar">
              <div className="icon-bar-loction">
                <img src={email} alt="logo" className="logo-bar-location" />
              </div>
              <span className="span-bar">booking@restaurant.com</span>
            </a>
          </div>
        </div>
      </div> 
      <hr className="line-bw-navtop" />   
      <div className="nav-bar">
        <img className="nav-logo" src={logo1} width={160} height={50} alt=""/>
        <div className="nav-list-main">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline">Menu</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">About us</a>
            </li>
            <li className="navbar-item">
              <a href="#chefs" className="navbar-link hover-underline">Our Chefs</a>
            </li>
            <li className="navbar-item">
              <a href="#table-booking" className="navbar-link hover-underline">Contact</a>
            </li>
            <li className="navbar-item">
              <a href="#event" className="navbar-link hover-underline">Events</a>
            </li>
            <li className="navbar-item">
              <a href="#delivery" className="navbar-link hover-underline">Online Delivery</a>
            </li>
          </ul>
        </div>
        <div className="navbar-button">
          <button id="find-table" className="find-table">FIND THE TABLE</button>
        </div>
      </div>
      <div id="carouselCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={heroslider1} className="d-block w-100" alt="hero_slider_1" />
            <div className="carousel-caption">
              <p className="carousel-subtitle">Tradational &amp; Hygine</p>
              <img className="separator-carousel" src={separator} alt="" />
              <h1 className="carousel-label">For the love of <br />delicious food</h1>
              <p> Come with family &amp; feel the joy of mouthwatering food.</p>
              <button className="view-menu">VIEW ALL MENU</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={heroslider2} className="d-block w-100" alt="hero_slider_2" />
            <div className="carousel-caption">
              <p className="carousel-subtitle">delightful experience</p>
              <img className="separator-carousel" src={separator} alt="" />
              <h1 className="carousel-label"> Flavors Inspired by <br />the Seasons</h1>
              <p>Come with family &amp; feel the joy of mouthwatering food.</p>
              <button className="view-menu">VIEW ALL MENU</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={heroslider3} className="d-block w-100" alt="hero_slider_3" />
            <div className="carousel-caption">
              <p className="carousel-subtitle">amazing &amp; delicious</p>
              <img className="separator-carousel" src={separator} alt="" />
              <h1 className="carousel-label">Where every flavor <br /> tells a story</h1>
              <p> Come with family &amp; feel the joy of mouthwatering food.</p>
              <button className="view-menu">VIEW ALL MENU</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div id="about" className="about_us">
      <div className="content">
        <div className="title_1">
          <br />
          <p>Our Journey......</p>
          <img className="separator" src={separator} alt="" /> 
        </div>
        <div className="title_2">
          <h1>Every Flavour Tells a Story..!</h1>
        </div>
        <div className="cont">
          <p>
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
            industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
            it to make a type specimen book It has survived not only five centuries, but also the leap into.
          </p>
        </div>
        <div className="contact-label">Book Through Call: </div>
        <a href="tel:+919550811750" className="contact-number">+91 9550811750</a>
        <button id="readmore" className="read-more">READ MORE</button>
      </div>
      <div className="banner">
        <br />
        <br />
        <img src={bannerabout} width="600px" height="600px" alt="" />
        <div className="img-banner">
          <img className="dec-img" src={imgpattern} alt="" />
          <img className="img-on-dec" src={imgondec} alt=""/>
        </div>
      </div>
      <div className="logo">
        <br />
        <br />
        <img src={badge2} alt="" />
        <img className="since-logo" src={badge2bg} alt="" />
      </div>    
    </div>
    <div id="menu" className="menucard">
      <p pt-5>.</p>
      <p className="sub_title pt-5">FOR YOUR SPECIAL SELECTION</p>
      <img className="separator-menu" src={separator} alt=""/>
      <p className="title">Delicious Menu</p>
      <div className="whole-menu">
        <div className="row">
          <div className="col item">
            <img className="item-img" src={menu1} alt=""/>
            <p className="item-name">ALOO KURMA</p>
            <p className="dots">........</p>
            <p className="price">$3.59</p>
            <div className="ingredients">
              <p>Alus,Onions,Tomatoes,Corriander leaf,Green Chilli.</p>
            </div>
          </div>
          <div className="col item">
            <img className="item-img" src={menu2} alt="" />
            <p className="item-name">PALAK PANNER</p>
            <p className="dots">........</p>
            <p className="price">$4.05</p>
            <div className="ingredients">
              <p>Paneer,Spinach leaf ,Cooking oil,Butter,Masala</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col item">
            <img className="item-img" src={menu3} alt=""/>
            <p className="item-name">POTLAM BRIYANI</p>
            <p className="dots">.........</p>
            <p className="price">$4.58</p>
            <div className="ingredients">
              <p>Chiken,Basmathi rice,Briyani Masala,Onions,Egg.</p>
            </div>
          </div>
          <div className="col item">
            <img className="item-img" src={menu4} alt="" />
            <p className="item-name">RUMALI ROTI</p>
            <p className="dots">.........</p>
            <p className="price">$2.46</p>
            <div className="ingredients">
              <p>Wheat flour(atta), flour(maida),Cooking oil</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col item">
            <img className="item-img" src={menu5} alt=""/>
            <p className="item-name">VEG MANCHURIA</p>
            <p className="dots">.........</p>
            <p className="price">$3.62</p>
            <div className="ingredients">
              <p>Wheat flour(atta), flour(maida),Cabbage,Carrots,<br />Koriander leafs,Tomato sauce,Soya sauce</p>
            </div>
          </div>
          <div className="col item">
            <img className="item-img" src={menu6} alt=""/>
            <p className="item-name">CHIKEN POLLYPOP</p>
            <p className="dots">.........</p>
            <p className="price">$4.54</p>
            <div className="ingredients">
              <p>Chikken,Koriander leafs,Tomato sauce,Soya sauce,<br />Onions,Wheat flour(atta), flour(maida)</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col item">
            <img className="item-img" src={menu7} alt="" />
            <p className="item-name">FISH CURRY</p>
            <p className="dots">.........</p>
            <p className="price">$5.02</p>
            <div className="ingredients">
              <p>Fish,Koriander leafs,Tomatos,Onions,Ginjer-garlic <br />paste,Curry leafs,Green Chilli</p>
            </div>
          </div>
          <div className="col item">
            <img className="item-img" src={menu8} alt=""/>
            <p className="item-name">BAGARA RICE</p>
            <p className="dots">.........</p>
            <p className="price">$1.58</p>
            <div className="ingredients">
              <p>Basmathi rice,Basmathi rice,Briyani Masala,Onions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="special" className="special-bg">
      <div className="special-dish">
        <div className="special-dish-content">
          <img className="badge" src={badge1} alt="badge" />
          <p className="specialdish-subtitle">Special Dish</p>
          <img className="separator-specialdish" src={separator} alt=""/>
          <p className="specialdish-title">Hyderabadi <span className="dum-title">Dum</span> <br /> Biryani</p>
          <p className="specialdish-text">
            Hyderabadi Dum Biryani: A culinary masterpiece from Hyderabad, where tender meat and fragrant rice are slow-cooked 
            with aromatic spices, creating an unforgettable taste sensation.
          </p>
          <div className="dish-price">
            <del className="del body-3">$40.00</del>
            <span className="span body-1">$20.00</span>
          </div>
          <button className="view-menu">VIEW ALL MENU</button>
        </div>
        <img className="specialdish-cover" src={hybdumbiryani} alt="special dish" />
      </div>
    </section>
    <div id="delivery" className="delivery">
      <div className="delivery-content">
        <p className="delivery-subtitle pt-5">Delivery</p>
        <img className="separator-delivery" src={separator} alt="" />
        <h2 className="delivery-title pt-5">
          A Moments Of Delivered On <span className="delivery-title-span">Right Time</span> &amp; Place
        </h2>
        <p className="delivery-text pt-5">
          Savor the epitome of gastronomic delight, meticulously crafted and expertly timed, 
          seamlessly arriving at your chosen destination,
          ensuring every moment is savored in culinary bliss.
        </p>
        <button className="order"><a href="Order now/ordernow.html">ORDER NOW</a></button>
      </div>
      <img className="delivery-img" src={deliveryboy} alt="delivery boy" />
      <img src={deliverybannerbg} alt="clouds" className="cloud-img" />
    </div>
    <div id="event" className="event-main">
      <div className="event bg-black-10">
        <div className="event-content">
          <p className="event-subtitle pt-5">Recent Updates</p>
          <img className="separator-event" src={separator} alt="" />
          <h2 className="event-title pt-5 mt-5">Upcoming Event</h2>
          <div className="row pt-5">
            <div className="col event-img">
              <div className="card-banner img-holder" style={{width: 350, height: 450}}>
                <img src={FamilyGatherings1} width={350} height={450} className="img-cover has-before hover:shine" alt="" />
                <time className="publish-date label-2" dateTime="2022-09-15">15/09/2024</time>
              </div>
              <div className="card-content">
                <p className="text-center-1">Family Gathering</p>
                <h3 className="title-text-center-1">
                  Enjoy moments of togetherness and joy at our upcoming gathering.
                </h3>
              </div>
            </div>
            <div className="col event-img">
              <div className="card-banner img-holder" style={{width: 350, height: 450}}>
                <img src={communityevent} width={350} height={450} className="img-cover has-before hover:shine" alt=""/>
                <time className="publish-date label-2" dateTime="2022-09-08">08/09/2024</time>
              </div>
              <div className="card-content">
                <p className="text-center-2">Community Event</p>
                <h3 className="title-text-center-2">  
                  Experience the thrill and excitement at our community event.
                </h3>
              </div>
            </div>
            <div className="col event-img">
              <div className="card-banner img-holder" style={{width: 350, height: 450}}>
                <img src={GettyImages} width={350} height={450} className="img-cover has-before hover:shine" alt="" />
                <time className="publish-date label-2" dateTime="2022-09-03">03/09/2024</time>
              </div>
              <div className="card-content">
                <p className="text-center-3">Valentine's Day Celebration</p>
                <h3 className="title-text-center-3">
                  Celebrate love and companionship at our special Valentine's Day gathering.
                </h3>
              </div>
            </div>
          </div>
          <br />
          <button className="more-events">EXPLORE MORE EVENTS</button>
        </div>
      </div>
    </div>
    <div id="table-booking" className="reservation-main pt-5">
      <div className="container">
        <main>
          <div className="reservation-form">
            <h2 className="reservation-headline">Online Reservation</h2>
            <p className="reservation-formtext pt-2">
              Booking request <a href="tel:+91 9505543527" className="link">+91-9505543527</a>
              or fill out the order form
            </p>
            <form action="#" method="POST" className="formreservation">
              <input type="text" id="name" name="name" placeholder="Your Name" className="input-field" required />
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="input-field" required /><br /><br />
              <input type="time" id="time" name="time" placeholder="Time" className="inputfield" required />
              <input type="email" id="email" name="email" placeholder="E-Mail" className="inputfield" required />
              <input type="number" id="guests" name="guests" min={1} placeholder="No. of Persons" className="inputfield" required />
              <input type="text" placeholder="message" className="input-message" />
              <button className="submit">Book a Table</button>
            </form>
          </div>
        </main>
        <aside>
          <div className="reservation-content">
            <h2 className="contact-headline">Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Restaurant St, City, Country</p>
            <p className="contact-lable">Booking Request</p>
            <a href="tel:+91 9505543527" className="contact-number" style={{textAlign: 'center'}}>Number:+919505543527</a>
            <p className="contact-lable">Location</p>
            <address className="address">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            <p className="contact-lable">Lunch Time</p>
            <p className="lunch-time">
              Monday to Sunday <br />
              11.00 am - 2.30pm
            </p>
            <p className="contact-lable">Dinner Time</p>
            <p className="dinner-time">
              Monday to Sunday <br />
              05.00 pm - 10.00pm
            </p>
          </div>
        </aside>          
      </div>
    </div>
    <div id="chefs" className="our-chefs">
      <header className="chef-head">
        <h1>Meet Our Talented Chefs</h1>
      </header>
      <main className="chef-main">
        <div className="chef1" >
          <div className="overlay" />
          <h2>Deepika padukoni<span className="designation">Head Chef</span></h2>
        </div>
        <div className="chef2">
          <div className="overlay" />
          <h2>Robert Downy jr.<span className="designation">Sous Chef</span></h2>
        </div>
        <div className="chef3">
          <div className="overlay" />
          <h2>Michael Johnson<span className="designation">Pastry Chef</span></h2>
        </div>
      </main> 
    </div>
    <div id="strength" className="our-strength pt-5">
      <section className="section-1-our features text-center-our" aria-label="features">
        <div className="container-1-our">
          <img src={shape7} width={208} height={178} loading="lazy" alt="shape" className="shape-our shape-12-our" />
          <p className="section-subtitle-our label-2-our">Why Choose Us</p>
          <img className="separator-FEATURES" src={separator} alt="" />
          <h2 className="headline-1 section-title-our pt-5 mt-2">Our Strength</h2>
          <ul className="grid-list-our pt-5">
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon-our">
                  <img src={featuresicon1} width={100} height={80} loading="lazy" alt="icon" />
                </div>
                <h3 className="title--our card-title-our">Hygienic Food</h3>
                <p className="label-1-our card-text-our">Strict quality control ensures certified ingredients and allergen management.</p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon-our">
                  <img src={featuresicon2} width={100} height={80} loading="lazy" alt="icon" />
                </div>
                <h3 className="title--our card-title-our">Fresh Environment</h3>
                <p className="label-1-our card-text-our">Well-ventilated spaces with natural light and sustainable practices.</p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon-our">
                  <img src={featuresicon3} width={100} height={80} loading="lazy" alt="icon" />
                </div>
                <h3 className="title--our card-title-our">Skilled Chefs</h3>
                <p className="label-1-our card-text-our">Innovative cooking with local ingredients, ongoing training, and dietary accommodation.</p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon-our">
                  <img src={featuresicon4} width={100} height={80} loading="lazy" alt="icon" />
                </div>
                <h3 className="title--our card-title-our">Event &amp; Party</h3>
                <p className="label-1-our card-text-our">Custom menus, seamless coordination, themed ambiance, and personalized service.</p>
              </div>
            </li>
          </ul>
          <img src={shape8} width={120} height={115} loading="lazy" alt="shape" className="shape-our shape-21-our" />
        </div>
      </section>
    </div>
  </div>
    
    </>
  );
}

export default App;
