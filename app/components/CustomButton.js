"use client";
import React from "react";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  rigthIcon,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rigthIcon && (
        <div className="relative w-g h-6">
          <Image src={rigthIcon} alt="Icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
