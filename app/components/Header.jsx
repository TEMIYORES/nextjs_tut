import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Upplux Media</Link>
        </div>
        <div className="links flex justify-center">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/code/repos">Repositories</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
