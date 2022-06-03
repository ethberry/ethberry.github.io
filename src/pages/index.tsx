import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Progressive toolkit for building dApps">
      <main>
        <img src={require("@site/static/img/logo.png").default} alt="GEMUNION" className={styles.logo} />
      </main>
    </Layout>
  );
}
