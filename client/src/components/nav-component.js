import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <div class="body">
      <header>
        <nav>
          <h1>YU-HSIANG HUANG</h1>
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/resume">履歷</Link>
            </li>
            <li>
              <Link to="/works">作品集</Link>
            </li>
            <li>
              <Link to="/contact">聯絡方式</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavComponent;
