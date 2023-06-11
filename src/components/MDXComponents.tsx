import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import Code from './Code';

export const components = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="mb-10 font-serif text-5xl leading-tight text-neutral-700 md:text-7xl md:leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-12 font-serif text-2xl font-bold text-neutral-700">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 font-serif text-lg font-bold text-neutral-700">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="my-4 font-sans text-xl leading-normal text-neutral-700 ">
      {children}
    </p>
  ),
  a: ({
    children,
    href,
  }: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >) => (
    <a
      href={href}
      className="my-4 font-sans text-xl leading-normal text-neutral-700 underline underline-offset-2"
    >
      {children}
    </a>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className=" font-sans text-xl leading-normal text-neutral-700">
      {children}
    </li>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc pl-10">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ul className="list-decimal pl-10">{children}</ul>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className=" rounded-md bg-grey-200 p-1 font-mono text-sm text-neutral-700">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: ReactNode }) => <Code>{children}</Code>,
  hr: () => <hr className="mt-10 border-neutral-300" />,
};
