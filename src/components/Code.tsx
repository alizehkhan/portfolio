/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { IconClipboard } from '@tabler/icons-react';

const Code = ({ children }: { children: any }) => {
  useEffect(() => Prism.highlightAll(), []);
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (code: string) => {
    navigator?.clipboard?.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 500);
    });
  };

  return (
    <>
      <p className="ml-auto mr-8 w-fit rounded-t-md bg-grey-200 px-3 py-1 font-sans text-sm font-bold uppercase text-neutral-700">
        {children?.props.className.match(/language-(.+)/)[1]}
      </p>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <button
            className="absolute right-0 m-3 rounded-md bg-grey-300 p-2 font-bold leading-none"
            onClick={() => {
              copyToClipboard(children?.props.children);
            }}
          >
            {isCopied ? 'Copied' : <IconClipboard color="#4e4d49" size={18} />}
          </button>
        )}
        <pre className="rounded-md">
          <code className={children?.props.className}>{children}</code>
        </pre>
      </div>
    </>
  );
};

export default Code;
