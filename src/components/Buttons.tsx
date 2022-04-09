import React, { useState } from "react";
import { colors } from "../hooks/colors";
import { useStore } from "../hooks/useStore";
import { ColorTypes } from "../hooks/colors";

export const Buttons: React.FC = () => {
  const setColor = useStore((state) => state.setColor);
  const [active, setActive] = useState<string>("green");

  return (
    <ul className="flex flex-col space-y-20 relative bottom-20 right-72">
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
        setColor(colorObj);
      }}
    />
  );
};
