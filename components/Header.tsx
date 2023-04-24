import Link from "next/link";
import React from "react";
import CartBtn from "./productCart/CartBtn";
// import Login from "./login00";


const Header = () => {
  return (
    <header className="bg-gradient-to-b from-sky-200 to-sky-50 border shadow p-2 flex">
      <Link className="text-sky-600" href={"/"}>
        Home
      </Link>
      <Link className="text-sky-600" href={"/login"}>
       Login
      </Link>
      <Link className="ml-auto mr-4" href={"/cart"}>
        <CartBtn />
      </Link>
    </header>
  );
};

export default Header;
