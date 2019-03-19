import React from 'react';
import { Link } from 'react-router-dom';
import './styles/landing-page.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="container">
          <div className="mainblock">
            <div className="content">
              <h1>Discover</h1>
              <span>Find</span>
              <Link to="/packs" className="letsgobtn">
                LET'S GO!
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
