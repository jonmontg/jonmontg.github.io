import { useNavigate, useLocation } from 'react-router-dom';

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface NavItem {
  label: string;
  href?: string;
  icon?: string;
}

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navGroups: NavGroup[] = [
    {
      title: "Data Science",
      items: [
        { label: "Shiller Data Analysis", href: "/Shiller-data" },
        { label: "Deepfake Audio Detection", href: "/Deepfake-audio-detection" }
      ]
    },
    {
      title: "Visualizations",
      items: [
      ]
    }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      // Use React Router for internal routes
      navigate(href);
    } else {
      // Use hash navigation for same-page links
      window.location.hash = href;
    }
  };

  return (
    <div className={`bg-base-100 shadow-lg transition-all duration-300 min-h-screen flex flex-col`}>
      {/* Navigation Groups */}
      <nav className="flex-1 p-4 space-y-6">
        {/* Header */}
        <h2 className="text-lg font-semibold text-primary">Projects</h2>

        {navGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-2">
            <h3 className="text-sm font-medium text-base-content/70 uppercase tracking-wide">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <button
                    onClick={() => item.href && handleNavigation(item.href)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors hover:bg-base-200 hover:text-primary w-full text-left ${
                      location.pathname === item.href ? 'bg-primary text-primary-content' : ''
                    }`}
                  >
                    {item.icon && (
                      <span className="mr-2">{item.icon}</span>
                    )}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-base-300">
        <div className="text-xs text-base-content/50">
          Navigation
        </div>
      </div>
    </div>
  );
}