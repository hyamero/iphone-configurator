import React, { useState } from "react";
import { gsap } from "gsap";

import { colors } from "../hooks/colors";
import { useStore } from "../hooks/useStore";
import { ColorTypes } from "../hooks/colors";

const handleBg = (color: string) => {
  gsap.to("body", { duration: 0.5, backgroundColor: color });
};

export const Buttons: React.FC = () => {
  const setColor = useStore((state) => state.setColor);
  const [active, setActive] = useState<string>("green");

  return (
    <ul className="relative top-96 flex space-x-20 md:top-[-10rem] md:right-64 md:flex-col md:space-y-20 md:space-x-0">
      {colors.map((color) => (
        <Button
          key={color.name}
          color={color.name}
          colorObj={color}
          active={active}
          setActive={setActive}
          setColor={setColor}
        />
      ))}
    </ul>
  );
};

interface ButtonProps {
  color: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  colorObj: ColorTypes;
  setColor: React.Dispatch<React.SetStateAction<ColorTypes>>;
}

const Button: React.FC<ButtonProps> = ({
  color,
  active,
  setActive,
  colorObj,
  setColor,
}) => {
  return (
    <li
      className={`color-btn ${active === color ? "active" : ""} ${
        color === "green"
          ? "after:bg-iphone-green"
          : color === "silver"
          ? "after:bg-iphone-silver"
          : color === "gold"
          ? "after:bg-iphone-gold"
          : color === "graphite"
          ? "after:bg-iphone-graphite"
          : color === "blue"
          ? "after:bg-iphone-blue"
          : ""
      }`}
      onClick={() => {
        setActive(color);
        handleBg(colorObj.bg);
        setColor(colorObj);
      }}
    />
  );
};
