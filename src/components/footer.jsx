import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Correct import

const Footer = () => {
  return (
    <footer className="bg-[#262924] text-white p-4 mt-6">
      <p className="font-raleway">
        <FontAwesomeIcon className="mr-4 " icon={faGithub} /> Github Repo.
      </p>
    </footer>
  );
};

export default Footer;
