// layout.tsx - Layout chính với sidebar và outlet cho nội dung
import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white">
                <div className="p-4 font-bold text-xl">Admin Panel</div>
                <nav className="mt-6">
                    <SidebarNavLink to="/admin" end icon="home" label="Trang chính" />
                    <SidebarNavLink to="/admin/dashboard" icon="chart-bar" label="Dashboard" />
                    <SidebarNavLink to="/admin/staff" icon="users" label="Nhân viên" />
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-auto">
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
interface SidebarNavLinkProps {
    to: string;
    icon: string;
    label: string;
    end?: boolean;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, icon, label, end }) => {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `flex items-center w-full px-4 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`
            }
        >
            <span className={`mr-3 ${icon === 'home' ? 'fas fa-home' : icon === 'chart-bar' ? 'fas fa-chart-bar' : 'fas fa-users'}`}></span>
            <span>{label}</span>
        </NavLink>
    );
};

export default Layout;