'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.replace(newPath);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 text-white shadow-md fixed w-full z-50">
      <Link className="flex items-center justify-center group" href="#">
        <BrazilFlagIcon className="h-6 w-6 transition-transform duration-500 group-hover:animate-float" />
        <span className="sr-only">Yuri Clases de Portugués</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-8 text-white transition-colors duration-300 hover:text-green-200 hover:drop-shadow-lg"
          href="#features"
        >
          {t('features')}
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-8 text-white transition-colors duration-300 hover:text-green-200 hover:drop-shadow-lg"
          href="#about"
        >
          {t('about')}
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-8 text-white transition-colors duration-300 hover:text-green-200 hover:drop-shadow-lg"
          href="#testimonials"
        >
          {t('testimonials')}
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-8 text-white transition-colors duration-300 hover:text-green-200 hover:drop-shadow-lg"
          href="#contact"
        >
          {t('contact')}
        </Link>
        <select
          onChange={handleChange}
          defaultValue={pathname.substring(1, 3)}
          className=" text-sm font-medium hover:underline underline-offset-8 text-white transition-colors duration-300 hover:text-green-200 hover:drop-shadow-lg"
        >
          <option style={{ backgroundColor: "#1A202C" }} value="en">English</option>
          <option style={{ backgroundColor: "#1A202C" }} value="es">Español</option>
          <option style={{ backgroundColor: "#1A202C" }} value="pt">Português</option>
        </select>
      </nav>
    </header>
  );
};

function BrazilFlagIcon(props: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1000 700"
    >
      <rect width="1000" height="700" fill="#009c3b" />
      <path d="M500 85 890 350 500 615 110 350z" fill="#ffdf00" />
      <circle cx="500" cy="350" r="175" fill="#002776" />
    </svg>
  );
}

export default Navbar;
