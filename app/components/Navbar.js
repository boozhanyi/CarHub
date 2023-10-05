import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440p] flex mx-auto justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="text-primary-blue rounded-full bg-white min-x-[130px] hover:bg-blue-100"
        />
      </nav>
    </header>
  );
};

export default Navbar;