import React from "react";

const ShopMenu = () => (
  <div className="flex flex-col dropdownmenu">
    <div>
      <span>apparel</span>
      <ul className="flex flex-col gap-4">
        <li>unisex hoodies</li>
        <li>unisex zip hoodies</li>
        <li>unisex swetshirts</li>
        <li>unisex tees</li>
        <li>women's tanks</li>
        <li>unisex tanks</li>
      </ul>
    </div>
    <div>
      <span>home</span>
      <ul className="flex flex-col gap-4">
        <li>phone cases</li>
        <li>framed posters</li>
        <li>posters</li>
      </ul>
    </div>
  </div>
);

export default ShopMenu;
