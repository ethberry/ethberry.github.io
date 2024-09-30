import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An advanced framework for building decentralized games">
      <main>
        <img src={require("@site/static/img/logo.png").default} alt="ETHBERRY" className={styles.logo} />
      </main>
    </Layout>
  );
}
