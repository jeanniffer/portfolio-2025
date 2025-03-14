import React from 'react';
import "./src/styles/global.css";

interface FooterProps {
    logotype: string;
    description: string;
}

const Footer: React.FC<FooterProps> = ({ logotype, description }) => {
    return (
<footer className="bg-gray-50 dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
        <h2>Jeanniffer Pimentel</h2>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right bg-background">
      Portfolio v1.0 | Full version coming soon 🚀
      </p>
    </div>
  </div>
</footer>
    );
}

export default Footer