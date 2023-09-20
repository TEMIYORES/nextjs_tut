import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-[5rem]">Welcome to upplux</h1>
      <ul>
        <li>
          <Link href={"/"}>Homepage</Link>
        </li>
        <li>
          <Link href={"/about"}>Aboutpage</Link>
        </li>
        <li>
          <Link href={"/about/team"}>TeamPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
