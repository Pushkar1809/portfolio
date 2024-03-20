import React from "react";
import { cn } from "../utils";

interface Props {
  icon: string;
  title: string;
  children: React.ReactNode;
  iconStyles?: string;
  id: string;
}

export const Layout = ({ icon, title, children, iconStyles, id }: Props) => (
  <div id={id} className="flex items-start gap-3 py-[5rem]">
    <img src={icon} alt="icon" className={cn("w-[4rem]", iconStyles)} />
    <div className="flex-1">
      <h2 className="text-[2.25rem] font-semibold">{title}</h2>
      {children}
    </div>
  </div>
)