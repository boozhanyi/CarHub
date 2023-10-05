"use client";
import React, { useState } from "react";
import SearchManufacturers from "./SearchManufacturers";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const Router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please type to serch");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model, manufacturer) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    Router.push(newPathName);
  };

  const SearchButton = ({ otherClass }) => (
    <button type="submit" className={` z-10 ${otherClass}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying-Glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturers
          manufacturers={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden ml-6" />
    </form>
  );
};

export default SearchBar;
