import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="relative bg-slate-950 overflow-hidden">
      {/* Background giant text */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center text-gray-100 text-[10vw] font-serif font-black opacity-5 leading-none select-none pl-12">
  <div>Jeanniffer</div>
  <div>Pimentel</div>
</div>

      {/* Glitchy image */}
      <img
  src="src/assets/JeannifferHeadshot.png"
  alt="Jeanniffer"
  className="absolute right-0 bottom-0 w-[75vw]"
/>

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">

          <p className="mt-4 max-w-lg sm:text-xl/relaxed font-mono font-light text-lime-300">
            Designing with heart, crafting with purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="mailto:hola@jeanniffer.com"
              className="group block w-full sm:w-auto font-mono text-white text-lg px-6 py-2 rounded-full border border-transparent transition hover:text-lime-300 hover:border-lime-300"
            >
              <span className="text-lime-300 mr-2 transition group-hover:text-lime-300">●</span>
              Available for new projects ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;