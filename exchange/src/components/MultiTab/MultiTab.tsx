import React, { useState, useRef, useEffect, PropsWithChildren } from "react";
import "./multitabs.css";

interface TabsProps {
  tabNames: string[];
}

const Tabs: React.FC<PropsWithChildren<TabsProps>> = ({ tabNames, children }) => {
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

  // Convert children to an array
  const childrenArray = React.Children.toArray(children);

  // Logging for debugging
  console.log('Active Tab:', activeTab);
  console.log('Children Array:', childrenArray);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabNames.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)} // Set the active tab
          >
            {tab}
          </div>
        ))}
        <div className="underline" ref={underlineRef}></div>
      </div>
      <div className="tab-content">
        {childrenArray[activeTab]} {/* Render only the content for the active tab */}
      </div>
    </div>
  );
};

export default Tabs;
