// import { useEffect, useRef, useState } from "react";

import { useEffect, useRef, useState } from "react";

type CategoryItem = {
  name: string;
  children?: string[];
};

const menuItems: CategoryItem[] = [
  { name: "Home Care" },
  {
    name: "Baby Care",
    children: ["Baby Food", "Baby Oral care", "Hair & Skin care", "Medical & Health Care"],
  },
  {
    name: "Beauty Care",
    children: ["Hair and scalp", "Nail and cuticle", "Oral hygiene products", "Skin Beauty care"],
  },
  {
    name: "Personal Care",
    children: ["Cleansing products", "Feminine care", "Hair care", "Oral care"],
  },
  {
    name: "Health Care",
    children: ["Ayurvedic Care", "Health Care Combo", "Medicines", "Vitamin Supplement"],
  },
  {
    name: "Skin Care",
    children: ["Anti Aging", "Face Wash", "Moisturiser", "Skin Care Combo"],
  },
  { name: "Baby Oral care" },
  { name: "Oral hygiene products" },
];

export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#2b57a2] text-white px-5 py-2 rounded-full font-semibold"
      >
        ☰ Shop By Categories
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 bg-white border rounded-md shadow-lg">
          <ul className="divide-y divide-gray-200">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <span>{item.name}</span>
                  {item.children && <span>{">"}</span>}
                </div>

                {item.children && (
                  <ul className="absolute top-0 left-full ml-0 w-56 bg-white border rounded-md shadow-lg group-hover:block hidden">
                    {item.children.map((child) => (
                      <li
                        key={child}
                        tabIndex={0}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => alert(`Clicked: ${child}`)}
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
