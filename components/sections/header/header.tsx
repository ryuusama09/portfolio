'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import ModeToggle from '@/components/mode-toggle';

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{
        y: 0
      }}
      animate={{
        y: 0
      }}
      transition={{
        delay: loader ? 1.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.0
      }}
    >
      <nav className="bg-transparent">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-around p-4 ">
          <a
            href="https://www.linkedin.com/in/harshbs/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            target="_blank"
            rel="noopener"
          >
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              @Ryuusama
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col items-center rounded-lg border p-4 font-light md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
              <li>
                <a
                  href="#"
                  className="block rounded bg-blue-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:hover:underline md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className=" block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block  rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="block  rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="block  rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Skills
                </a>
              </li>

              {/* <li>
                <a
                  href="#testimonials"
                  className="block  rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Testimonials
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="block  rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
