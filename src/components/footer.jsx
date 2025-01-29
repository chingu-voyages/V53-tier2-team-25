import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#262924] text-white p-4">
      <Link to="https://github.com/chingu-voyages/V53-tier2-team-25">
        <p className="font-raleway">
          <FontAwesomeIcon className="mr-4 " icon={faGithub} /> Github Repo.
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
