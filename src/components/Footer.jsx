import React from "react";
import { socialMediaLinks } from "./Data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        {socialMediaLinks.map((link) => {
          const { name, url, id } = link;
          return (
            <li key={id}>
              {name === "Linkedin" ? (
                <a href={url}>
                  <FaLinkedinIn />
                </a>
              ) : name === "Github" ? (
                <a href={url}>
                  <FaGithub />
                </a>
              ) : (
                <a href={url}>{url}</a>
              )}
            </li>
          );
        })}
      </ul>
      <div className="footer-date">
        Bashed together by Benjamin Seed{" "}
        <span className="date">{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
