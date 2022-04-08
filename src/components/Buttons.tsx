import React, { useState } from "react";

export const Buttons: React.FC = ({}) => {
  const colors: string[] = ["green", "silver", "gold", "graphite", "blue"];
  const [active, setActive] = useState<string>("green");

  return (
    <ul className="flex flex-col space-y-20 relative bottom-20 right-72">
      {colors.map((color) => (
        <Button
          key={color}
          color={color}
          active={active}
          setActive={setActive}
        />
      ))}
    </ul>
  );
};

interface ButtonProps {
  color: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Button: React.FC<ButtonProps> = ({ color, active, setActive }) => {
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
      }}
    />
  );
};
