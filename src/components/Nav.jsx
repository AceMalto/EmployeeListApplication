import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { IoMenu, IoSettings, IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdClose, IoIosHelpCircleOutline  } from "react-icons/io";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";


const navItems = [
    { icon: <MdDashboard />, label: 'Dashboard', path: '/' },
    // { icon: <IoSettings />, label: 'Create Employee', path: '/admin' },
    // { icon: <MdProductionQuantityLimits />, label: 'Update Employee', path: '/products' },
    // { icon: <RiUserSettingsLine />, label: 'Customer', path: '/customers' },
    // { icon: '', label: 'ACCOUNT', path: '' },
    // { icon: <IoSettingsOutline />, label: 'Settings', path: '/settings' },
    // { icon: <IoIosHelpCircleOutline />, label: 'Help', path: '/helps' },
    // { icon: <LuUsers />, label: 'Manage Users', path: '/manages' },
    // { icon: <IoLogOutOutline />, label: 'Logout', path: '/logout' },
];

export default function Nav({ isOpen, toggleNav }) {
    const location = useLocation();

    return (
        <div
        className={clsx(
            'h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col pl-2',
            isOpen ? 'w-[160px]' : 'w-[50px]'
        )}
        >
        <button
            className="p-2 hover:bg-gray-700 flex transition duration-300 ease-in-out delay-75"
            onClick={toggleNav}
        >
            {isOpen ? <IoMdClose /> : <IoMenu />}
        </button>

        <div className="flex flex-col items-start space-y-2 mt-4">
            {navItems.map((item, index) => (
            <Link
                key={index}
                to={item.path}
                className={clsx(
                'relative group flex items-center gap-2 px-2 py-1 hover:bg-gray-700 cursor-pointer w-full',
                location.pathname === item.path && 'bg-gray-700'
                )}
            >
                {item.icon}
                {isOpen && <span className="text-sm">{item.label}</span>}
                {!isOpen && (
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                    {item.label}
                </span>
                )}
            </Link>
            ))}
        </div>

        {/* Top nav header fixed */}
        <div className={clsx(
            'flex flex-col flex-1 ml-auto w-full transition-all duration-300',
            isOpen ? 'ml-[130px]' : 'ml-[50px]'
        )}>
            <header className="fixed top-0 left-0 right-0 h-12 bg-gray-800 text-white flex items-center px-4 z-10">
            <div className="flex items-center gap-4">
                <button
                className="hover:bg-gray-700 rounded transition duration-300 ease-in-out"
                onClick={toggleNav}
                >
                {isOpen ? <IoMdClose /> : <IoMenu />}
                </button>
                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            </header>
        </div>
        </div>
    );
}
