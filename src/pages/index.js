/*
 * @Author: your name
 * @Date: 2021-11-29 13:33:56
 * @LastEditTime: 2021-12-16 11:29:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-website/src/pages/index.js
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>简单点</h2>
        <h1>不积跬步无以至千里</h1>
        <h2>百般算计不如一颗单纯的心</h2>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
