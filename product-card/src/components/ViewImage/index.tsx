import productView from "../../assets/sofa.gif";
import product from "../../assets/image 2.svg";
import view from "../../assets/view.svg";
import close from "../../assets/close.svg";
import { useState } from "react";

export function ViewImage() {
  const [isAllView, setIsAllView] = useState<boolean>(true);
  return (
    <div className="flex flex-col w-full lg:w-[60rem]">
      <button
        onClick={() => setIsAllView(!isAllView)}
        className="cursor-pointer self-end mr-14"
      >
        <img
          className=" transition-all ease-in-out w-fit"
          src={isAllView ? view : close}
        />
      </button>
      <img
        className="transition-all ease-in-out flex-1 w-full"
        src={!isAllView ? productView : product}
      />
    </div>
  );
}
