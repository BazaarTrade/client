import React, { useState, useRef, useEffect, PropsWithChildren } from "react";
import "./multitabs.css";

interface TabsProps {
  tabNames: string[];
  className?: string;
}

const Tabs: React.FC<PropsWithChildren<TabsProps>> = ({ tabNames, children, className }) => {
  const [activeTab, setActiveTab] = useState(0);
  const underlineRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const activeTabElement = tabsRef.current[activeTab];
    const underline = underlineRef.current;

    if (activeTabElement && underline) {
      underline.style.width = `${activeTabElement.offsetWidth}px`;
      underline.style.left = `${activeTabElement.offsetLeft}px`;
    }
  }, [activeTab]);


  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`tabs-container ${className ? className : ''}`}>
      <div className="tabs">
        {tabNames.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)} 
          >
            {tab}
          </div>
        ))}
        <div className="underline" ref={underlineRef}></div>
      </div>
      <div className="tab-content">
        {childrenArray[activeTab]} 
      </div>
    </div>
  );
};

export default Tabs;

