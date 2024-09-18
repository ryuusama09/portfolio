import React from 'react';
import Link from 'next/link';
import { metadata as meta } from '@/app/config';

import { footer } from '@/components/sections/footer/config';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto flex w-9/12 shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {currentYear}- {meta.author.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
