import React from "react";
import NavBar from "./NavBar";
import DestinationList from "./DestinationList";
import FormComponent from "./Form";
import '../App.css';

function Home() {
  return (
    < div className="Home">
    
      <header className="header">
       
        <NavBar />
      </header>
      <main>
        <FormComponent/> 
        <h1 className="list">Existing Destinations</h1>  
        <DestinationList />
      </main>
      <footer className="bg-gray-200 py-footer-padding text-center">
        <div className="social-media">
          <ul className="list-none p-0 flex justify-center space-x-4">
            <li>
              <a
                href="https://www.facebook.com"
                target="-blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-facebook"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="-blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-twitter"
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com"
                target="-blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-instagram"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
