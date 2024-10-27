import React from 'react';
import NavBar from './NavBar';
import DestinationList from './DestinationList';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function Home() {
	
	return (
		<div className='Home'>
			<header className='header'>
				<NavBar />
			</header>
			<main>
			<div class="about_section" id="about">
      <div class="about_content">
        <h2 id='about-p'>About us</h2>
        <p id='para'>
		Welcome to WonderAdventures, where your travel dreams take flight!
          </p>
          <p id='para'>
		  We specialize in crafting personalized adventures that inspire and delight.

        </p>
		<p id='para'> Our passionate team of travel experts is dedicated to helping you explore hidden gems and iconic destinations alike.</p>
		<p id='para'>Whether you're seeking a relaxing beach getaway or an exhilarating mountain trek, we’re here to guide you every step of the way</p>
		<p id='para'>Join us in creating memories that last a lifetime!</p>
        
      </div>
	  <video id='imagebanner'
					autoPlay
					loop
					muted
					className='form-video'
					
				>
					<source
						src='/travel.mp4'
						type='video/mp4'
					/>
				</video>
    </div>

	<div class="about_section" id="about">
	<video id='imagebanner'
					autoPlay
					loop
					muted
					className='form-video'
					
				>
					<source
						src='/safari.mp4'
						type='video/mp4'
					/>
				</video>
      <div class="about_content">
		
        <h2 id='about-p'>Why Choose us?</h2>
		<ol>
        <li id='para'>
		We ensure you experience the best each destination has to offer.
          </li>
          <li id='para'>
		  We customize every detail to match your interests and preferences, ensuring an unforgettable journey.

        </li>
		<li id='para'> we handle all the logistics, allowing you to focus on what truly matters—enjoying your adventure!.</li>
		<li id='para'>With 24/7 customer support, you can travel with peace of mind knowing we're just a call away</li>
		<li id='para'>We don’t just create itineraries; we create memories that last a lifetime</li>
        </ol>
      </div>
	 
    </div>
	
				<h1 className='list'>Available Destinations</h1>
				<DestinationList />
				
			</main>
			
			 <footer>
      <div class="footerdetails">
        <a href="#" id="textlogo">WonderAdventures</a>
        <p className='footer-p'> &copy; WonderAdventures, 2024 All Rights Reserved</p>
        <ul>
          <li>
		  <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='facebook'>
								<FontAwesomeIcon icon={faFacebook} className='mr-2' />
							</a>
          </li>
          <li>
		  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='twitter'>
								<FontAwesomeIcon icon={faTwitter} className='mr-2' />
							</a>
          </li>
          <li>
		  <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='instagram'>
								<FontAwesomeIcon icon={faInstagram} className='mr-2' />
							</a>
          </li>
         
        </ul>
        <div class="imagelogo"><img src="data:image/png;base64,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" alt='logo' id="imagelogo"/></div>
      </div>
    </footer>
			
		</div>
	);
}

export default Home;