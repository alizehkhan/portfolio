import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[90ch] w-[90%] mx-auto">{children}</div>;
};

export default Container;
