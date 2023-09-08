import { Header } from "@comps/Header/Header";
import React from "react";
import { Outlet } from "react-router";

export const DefaultUI: React.FC = () => {
  return (
    <div className="app-container">
      <Header/>
      <Outlet/>
    </div>
  )
}