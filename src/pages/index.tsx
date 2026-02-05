import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/*<div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min
          </Link>
        </div>*/}
      </div>
    </header>
  );
}

function SetupOverviewVideo() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <Heading as="h2" className={styles.videoHeading}>
          Rubik Pi Setup Overview
        </Heading>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/1LRJVeAd1aU"
            title="Rubik Pi Setup Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.videoIframe}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for RUBIK AI - The intelligent platform for FIRST Robotics teams">
      <HomepageHeader />
      <main>
        <SetupOverviewVideo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
