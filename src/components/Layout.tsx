import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Navigation from './Navigation';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Fixed Header and Banner at the top */}
      <div className="flex-none">
        <Header />
        <Banner />
      </div>

      {/* Main Content Area with Navigation */}
      <div className="flex flex-1">
        {/* Left Navigation Sidebar */}
        <Navigation />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}