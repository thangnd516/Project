interface SidebarItemProps {
  isActive: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ isActive, onClick, icon, label }) => {
  return (
    <button
      className={`flex items-center w-full px-4 py-2 ${
        isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
      }`}
      onClick={onClick}
    >
      <span className={`mr-3 ${icon === 'home' ? 'fas fa-home' : icon === 'chart-bar' ? 'fas fa-chart-bar' : 'fas fa-users'}`}></span>
      <span>{label}</span>
    </button>
  );
};