import React, { useState } from "react";

export default function TabSwitch() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Profile"];
  const content = ["My home", "My Profile"];

  return (
    <>
      <div>Tab</div>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => setActiveTab(index)}>
          TabsSwitch
        </button>
      ))}
      <div>{content[activeTab]}</div>
    </>
  );
}
