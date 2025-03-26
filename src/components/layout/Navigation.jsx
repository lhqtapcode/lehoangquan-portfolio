import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = ({ mobile = false }) => {
  const { t } = useTranslation();
  
  const navItems = [
    { to: '/', label: t('navigation.home'), exact: true },
    { to: '/projects', label: t('navigation.projects') },
    { to: '/skills', label: t('navigation.skills') },
    { to: '/education', label: t('navigation.education') },
    { to: '/goals', label: t('navigation.goals') },
    { to: '/contact', label: t('navigation.contact') },
  ];

  const navClass = mobile
    ? "flex flex-col items-center space-y-4 py-2"
    : "flex space-x-6";

  const linkClass = ({ isActive }) => {
    return `relative transition-all duration-300 font-medium ${
      isActive 
        ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary'
        : 'text-textPrimary hover:text-primary dark:text-white dark:hover:text-primary'
    }`;
  };

  return (
    <nav className={navClass}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.exact}
          className={linkClass}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;