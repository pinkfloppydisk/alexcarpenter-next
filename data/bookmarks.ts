interface BookmarkProps {
  title: string;
  description: string;
  link: string;
  date: string;
  tags: Array<string>;
}

export default [
  {
    title: 'Cubic Bézier: from math to motion',
    description: '',
    link: 'https://blog.maximeheckel.com/posts/cubic-bezier-from-math-to-motion/',
    date: '2021-11-02T11:27:45-04:00',
    tags: ['animation'],
  },
  {
    title: 'The New CSS Reset',
    description: 'The New Simple and Lighter CSS Reset.',
    link: 'https://elad2412.github.io/the-new-css-reset/',
    date: '2021-10-26T11:27:45-04:00',
    tags: ['css'],
  },
  {
    title: 'Polymorphic React Components in TypeScript',
    description:
      'How to define strongly-typed React components that can inherit props from arbitrary HTML elements.',
    link: 'https://www.benmvp.com/blog/polymorphic-react-components-typescript/',
    date: '2021-08-10T11:27:45-04:00',
    tags: ['react', 'typescript'],
  },
  {
    title:
      'Avoid global state — Colocate with Uncontrolled Compound Components',
    description:
      'With all the best intentions, codebases frequently end up a tangled web of components, abstractions, and global state (managed by some third party library) making the smallest of changes a living nightmare, and maintenance a balancing act.',
    link: 'https://jjenzz.com/avoid-global-state-colocate',
    date: '2021-07-15T11:27:45-04:00',
    tags: ['react'],
  },
  {
    title: 'XState Catalogue',
    description:
      'Collection of professionally designed state machines you can drop into your projects.',
    link: 'https://xstate-catalogue.com/',
    date: '2021-07-12T10:08:08-04:00',
    tags: [],
  },
  {
    title: 'Write code that is easy to delete, not easy to extend',
    description:
      'Every line of code written comes at a price: maintenance. To avoid paying for a lot of code, we build reusable software. The problem with code re-use is that it gets in the way of changing your mind later on.',
    link: 'https://programmingisterrible.com/post/139222674273/how-to-write-disposable-code-in-large-systems',
    date: '2021-06-29T09:38:21-04:00',
    tags: [],
  },
  {
    title: 'Don’t Use The Placeholder Attribute',
    description:
      'The placeholder attribute contains a surprising amount of issues that prevent it from delivering on what it promises.',
    link: 'https://smashingmagazine.com/2018/06/placeholder-attribute/',
    date: '2021-06-28T08:53:13-04:00',
    tags: ['a11y'],
  },
  {
    title: 'useTransitToSubmenu hook',
    description: '',
    link: 'https://github.com/reakit/reakit/blob/master/packages/reakit/src/Menu/__utils/useTransitToSubmenu.ts',
    date: '2021-06-24T15:32:08-04:00',
    tags: ['react'],
  },
  {
    title: 'Stop using isLoading booleans',
    description: '',
    link: 'https://kentcdodds.com/blog/stop-using-isloading-booleans',
    date: '2021-06-11T10:26:37-04:00',
    tags: ['javascript'],
  },
  {
    title: 'Astro',
    description: 'Build faster websites with less client-side Javascript.',
    link: 'https://astro.build/',
    date: '2021-06-11T08:31:47-04:00',
    tags: ['javascript'],
  },
  {
    title: 'Making Disabled Buttons More Inclusive',
    description: '',
    link: 'https://css-tricks.com/making-disabled-buttons-more-inclusive/',
    date: '2021-06-11T09:49:03-04:00',
    tags: ['css', 'a11y'],
  },
] as Array<BookmarkProps>;
