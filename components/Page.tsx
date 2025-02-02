import * as React from 'react';
import Head from 'next/head';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  type?: 'basic' | 'post' | 'feed' | 'work';
  title?: string;
  description?: string;
  date?: string;
  link?: string;
  thumbnail?: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
  slug?: string;
  children?: React.ReactNode;
}

export default function Page({
  type = 'basic',
  title,
  description = 'Detail oriented user interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.',
  date,
  link,
  slug,
  thumbnail,
  children,
}: PageProps) {
  const Component = type === 'basic' ? 'div' : 'article';
  const metaTitle = `${title ? `${title} - ` : ''}Alex Carpenter`;
  return (
    <>
      <Head>
        {/* Title */}
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />

        {/* Description */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        {/* URL */}
        <meta name="og:url" content="https://alexcarpenter.me" />

        {/* General */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:site" content="@hybrid_alex" />
        <meta name="author" content="Alex Carpenter" />

        {/* Favicons */}
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/meta-image.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <a
        href="#main"
        className="fixed top-0 left-0 p-1 bg-black dark:bg-gray-200 text-white dark:text-black text-sm transform -translate-y-full focus:translate-y-0"
      >
        Skip to content
      </a>
      <Banner />
      <main id="main" className="mb-auto">
        <Component>
          <Header
            title={title}
            description={description}
            type={type}
            date={date}
            link={link}
            thumbnail={thumbnail}
            slug={slug}
          />
          {children}
        </Component>
      </main>
      <Footer />
    </>
  );
}
