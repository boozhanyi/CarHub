"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "../Api";

const ShowMore = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyle="bg-primary-blue rounded-full text-white hover:bg-blue-700"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
