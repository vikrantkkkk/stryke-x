import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Footer = () => {
  return (
    <footer className="bg-[#01041A] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <AnimateFromInside>
          <div>
            <img src="https://via.placeholder.com/100x24?text=StrykeX" alt="Logo" className="mb-4" />
            <p className="text-sm text-gray-300">A Unit of Stockwiz Group</p>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#algos" className="hover:underline">Algos</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <p className="text-sm">contact@strykex.com</p>
            <div className="flex gap-2 mt-2">
              <img src="https://via.placeholder.com/24x24?text=F" alt="Facebook" />
              <img src="https://via.placeholder.com/24x24?text=T" alt="Twitter" />
              <img src="https://via.placeholder.com/24x24?text=I" alt="Instagram" />
            </div>
          </div>
        </AnimateFromInside>
      </div>
      <p className="text-center text-sm text-gray-500 mt-6">© 2025 StrykeX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
