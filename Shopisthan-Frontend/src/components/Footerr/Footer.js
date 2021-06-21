import React from 'react';
import "./style.css";
import { Link } from "react-router-dom"

const Footer = (props) =>{
    return(
      <footer className="footer">
           <div className="footer-compo">
              <div>
                  <ul className="InfinityFooter-footerLinks-4ab">
                    <li>
                        <Link className="InfinityFooter-footerLink-2xU e2e-FooterInfinity-link-terms">
                        Terms and Condition
                        </Link>
                    </li>
                    <li>
                        <Link className="InfinityFooter-footerLink-2xU e2e-FooterInfinity-link-terms">
                        Privacy and Policy
                        </Link>
                    </li>
                    <li>
                        <Link className="InfinityFooter-footerLink-2xU e2e-FooterInfinity-link-terms">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link className="InfinityFooter-footerLink-2xU e2e-FooterInfinity-link-terms">
                        Blogs
                        </Link>
                    </li>
                    <li>
                        <Link className="InfinityFooter-footerLink-2xU e2e-FooterInfinity-link-terms">
                        Seller
                        </Link>
                    </li>
                    <li>
                        <Link className="InfinityFooter-footerLink-2xU e2e-FooterInfinity-link-terms">
                        Downlaod App
                        </Link>
                    </li>
                  </ul>
              </div>
           </div>
      </footer>
    )
}

export default Footer;