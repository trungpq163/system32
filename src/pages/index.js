import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout title="Hello world" description={siteConfig.tagline}>
      <div>
        <HeroSection />
      </div>
    </Layout>
  );
}

function HeroSection() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <img
              alt={siteConfig.title}
              className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
              src={useBaseUrl('img/system32.gif')}
            />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.getStarted
                )}
                to="/engineering-backend-restful-api"
              >
                Get Started&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
