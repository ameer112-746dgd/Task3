import Link from 'next/link';
import { Search } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-blue">
      <div className="container mx-auto px-4 py-8 text-white">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link href="#" className="text-sm font-medium">ABOUT</Link>
            <Link href="#" className="text-sm font-medium">CONTACT</Link>
            <Link href="#" className="text-sm font-medium">DESIGN</Link>
            <Link href="#" className="text-sm font-medium">PROGRAMMING</Link>
            <Link href="#" className="text-sm font-medium">DEVELOPMENT</Link>
          </div>
          <Search className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-between items-center gap-4 text-xs">
          <p>AZENTOR ALEXANDRU | JAVASCRIPT DEVELOPER</p>
          <p>© 2022 - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};