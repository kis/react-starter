import React from 'react';
import '../Home/styles/landing-page.css';

export default function PacksPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="menu">
          <ul>
            <li>Moving to</li>
            <li>Type</li>
            <li>Size</li>
            <li>From</li>
            <li>Date</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="days">
          <div className="week">
            <div>
              <div>M</div>
              <div>30</div>
              <div>JAN</div>
            </div>
            <div>
              <div>T</div>
              <div>31</div>
              <div>JAN</div>
            </div>
            <div>
              <div>W</div>
              <div>1</div>
              <div>FEB</div>
            </div>
            <div>
              <div>T</div>
              <div>2</div>
              <div>FEB</div>
            </div>
            <div>
              <div>F</div>
              <div>3</div>
              <div>FEB</div>
            </div>
            <div>
              <div>S</div>
              <div>4</div>
              <div>FEB</div>
            </div>
            <div>
              <div>S</div>
              <div>5</div>
              <div>FEB</div>
            </div>
          </div>
        </div>
        <div className="packs">
          <div className="pack-item">
            <div className="item-header">
              <div className="pic"></div>
              <div>
                <div>PARTIAL PACK</div>
                <div>4 Movers</div>
                <div>3 Hours</div>
              </div>
              <div>
                <div>Best Price</div>
                <div>$1231</div>
                <div>*$150 for each additional hour</div>
              </div>
            </div>
            <div className="item-features">
              <div>included add boxes & tapes</div>
              <div>we will do all packing</div>
              <div>quit pad wrape to all your furniture</div>
            </div>
          </div>
          <div className="pack-item">
            <div className="item-header">
              <div className="pic"></div>
              <div>
                <div>FULL PACK</div>
                <div>6 Movers</div>
                <div>4 Hours</div>
              </div>
              <div>
                <div></div>
                <div>$2499</div>
                <div>*$150 for each additional hour</div>
              </div>
            </div>
            <div className="item-features">
              <div>included add boxes & tapes</div>
              <div>we will do all packing</div>
              <div>quit pad wrape to all your furniture</div>
            </div>
          </div>
          <div className="pack-item">
            <div className="item-header">
              <div className="pic"></div>
              <div>
                <div>I'LL PACK MYSELF</div>
                <div>2 Movers</div>
                <div>2 Hours</div>
              </div>
              <div>
                <div></div>
                <div>$1231</div>
                <div>*$150 for each additional hour</div>
              </div>
            </div>
          </div>
          <div className="pack-item">
            <div className="item-header">
              <div className="pic"></div>
              <div>
                <div>CUSTOMIZE</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
