import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 border-t border-neutral-800 text-sm text-neutral-400">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4 md:px-8">
        <p>2025 spotifyClone — All rights reserved.</p>

        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
