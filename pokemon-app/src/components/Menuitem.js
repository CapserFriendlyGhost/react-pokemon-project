import React from "react";

export const Menuitem = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
