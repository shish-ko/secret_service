import { Footer } from "@comps/Footer/Footer";
import { Header } from "@comps/Header/Header";
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";

export const DefaultUI: React.FC = () => {
  const [height, setHeight] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>setHeight(ref.current?.offsetHeight), [ref]);
  
  return (
        <div className="app-container" >
          <Header/>
          {/* ref={ref} style={{height: `${height}px`}} */}
          <main ref={ref} style={{height: `${height}px`}}>
            <Outlet/>
          </main>
          <Footer />
        </div>
  )
}