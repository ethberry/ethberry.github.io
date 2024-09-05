import React, { useState } from "react";
import styles from "../css/TabSwitcher.module.css";

const TabSwitcher = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabSwitcher}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.active : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSwitcher;
