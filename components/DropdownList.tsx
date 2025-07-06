"use client";

import Image from "next/image";
import React, { useState } from "react";

const DropdownList = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setisOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="menu"
              width={14}
              height={14}
            />
            Most recent
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
            width={20}
            height={20}
          />
        </div>{" "}
        {isOpen && (
          <ul className="dropdown">
            {["Most recent", "Most liked"].map((option) => (
              <li key={option} className="list-item">{option}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownList;
