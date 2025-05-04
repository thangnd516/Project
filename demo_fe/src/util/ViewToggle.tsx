import React from 'react';
import { LayoutGrid, List } from 'lucide-react'; // Hoặc react-icons/fa

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onToggle: (mode: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onToggle('grid')}
        className={`p-2 border rounded ${viewMode === 'grid' ? 'bg-teal-500 text-white' : ''}`}
      >
        <LayoutGrid size={18} />
      </button>
      <button
        onClick={() => onToggle('list')}
        className={`p-2 border rounded ${viewMode === 'list' ? 'bg-teal-500 text-white' : ''}`}
      >
        <List size={18} />
      </button>
    </div>
  );
};

export default ViewToggle;
