import React from "react";

export interface IButton extends React.HTMLProps<HTMLButtonElement> {}

export const MapContainer: React.FC<IButton> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
