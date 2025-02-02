import Link from 'next/link';
import RightArrow from '@/components/RightArrow';
import { cx } from '@/lib/utils';

export default function Experience() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <article
        className="relative flex justify-between items-center p-4 rounded-md sm:col-span-2"
        style={{
          background: 'linear-gradient(45deg, #844FBA 0%, #2E71E5 100%)',
        }}
      >
        <div>
          <h3>
            <Link href="/work/hashicorp">
              <a
                className={cx(
                  'after:absolute after:inset-0 underline hover:no-underline',
                  ['text-white'],
                )}
              >
                HashiCorp
              </a>
            </Link>
          </h3>
          <p className="mt-0.5 text-sm text-white text-opacity-90">
            Web Engineer
            <br />
            Jul 2021 - Present
          </p>
        </div>
        <svg
          className="flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 106.9 113.1"
          width="60"
          fill="white"
        >
          <path d="M44.5 0L0 25.7v61.7l16.7 9.7V35.3l27.8-16z" />
          <path d="M62.3 0v49.2H44.5V30.8l-16.7 9.7v62.9l16.7 9.7v-49h17.8v18.2l16.8-9.6v-63z" />
          <path d="M62.3 113.1l44.6-25.7V25.7l-16.8-9.6v61.7l-27.8 16z" />
        </svg>
      </article>

      <article
        className={cx('p-4 rounded-md', 'dark:bg-gray-800', 'bg-gray-200')}
      >
        <h3>NationBuilder</h3>
        <p className={cx('mt-0.5 text-sm textSecondary')}>
          UI Engineer
          <br />
          Nov 2018 - Jul 2021
        </p>
      </article>

      <article
        className={cx('p-4 rounded-md', 'dark:bg-gray-800', 'bg-gray-200')}
      >
        <h3>Mighty in the Midwest</h3>
        <p className={cx('mt-0.5 text-sm textSecondary')}>
          Senior Developer
          <br />
          Oct 2015 - Nov 2018
        </p>
      </article>

      <article
        className={cx('p-4 rounded-md', 'dark:bg-gray-800', 'bg-gray-200')}
      >
        <h3>Masuga Design</h3>
        <p className={cx('mt-0.5 text-sm textSecondary')}>
          Front-end Developer
          <br />
          Feb 2012 - Oct 2015
        </p>
      </article>

      <div className="flex items-center justify-center p-4">
        <p>
          <a
            href="https://www.linkedin.com/in/imalexcarpenter/"
            className="underline hover:no-underline focus:no-underline"
          >
            View LinkedIn
          </a>
          <RightArrow position="after" />
        </p>
      </div>
    </div>
  );
}
