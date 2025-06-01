import React from 'react';

type SortOption =
  | 'default'
  | 'latest'
  | 'priceLowToHigh'
  | 'priceHighToLow';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center align-middle text-center gap-2 ">
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="border rounded px-3 py-1 text-sm"
      >
        <option value="default">Default sorting</option>
        <option value="latest">Sort by latest</option>
        <option value="priceLowToHigh">Sort by price: low to high</option>
        <option value="priceHighToLow">Sort by price: high to low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
