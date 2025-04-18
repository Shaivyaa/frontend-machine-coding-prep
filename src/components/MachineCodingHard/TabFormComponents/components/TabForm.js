import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import "../styles.css";

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Shaivya",
    age: "25",
    email: "shaivya@gmail.com",
    interests: ["coding", "travel", "baking"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleNextChange = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevChange = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log({ data }, data);
  };

  const ActiveTabsComponent = tabs[activeTab].component;

  return (
    <>
      <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px" }}>
        Tab Form Component
      </div>
      <div className="tabs_container">
        {tabs.map((item, index) => (
          <>
            <div key={index}>
              <div
                onClick={() =>
                  tabs[activeTab].validate() && setActiveTab(index)
                }
                className="tabs"
              >
                {item.name}
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="tabs_body">
        <ActiveTabsComponent data={data} setData={setData} errors={errors} />
        <div className="btn_container">
          {activeTab > 0 && <button onClick={handlePrevChange}>Prev</button>}
          {activeTab < tabs.length - 1 && (
            <button onClick={handleNextChange}>Next</button>
          )}
          {activeTab === tabs.length - 1 && (
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}
