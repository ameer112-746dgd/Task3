import Link from 'next/link';
import { Search } from 'lucide-react';

const navItems = ["ABOUT", "DESIGN", "PROGRAMMING", "BLOCKCHAIN", "COURSES"];

export const Header = () => {
  return (
    <header className="border-b border-brand-border">
      <div className="bg-brand-blue h-2.5"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-black tracking-widest">
            THEJSDUDE
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item} href="#" className="text-sm font-medium tracking-wider hover:text-brand-blue transition-colors">
                {item}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-brand-gray cursor-pointer hover:text-white" />
              <Link href="#" className="text-sm font-medium tracking-wider">
                GET IN TOUCH
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};