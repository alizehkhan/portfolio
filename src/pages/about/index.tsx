import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ReactComponent as Venn } from '../../components/venn.svg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Alizeh Khan | Design Engineer</title>
      </Helmet>
      <div className="container">
        <h1 className="absolute -left-full top-auto h-[1px] w-[1px] overflow-hidden">
          Design Engineer
        </h1>
        <div className="mb-20 flex min-h-[calc(100svh-100px)] items-center justify-center md:min-h-fit lg:mb-48 lg:mt-32">
          <Venn />
        </div>
        <div className="mb-40 max-w-4xl lg:mb-80">
          <p className="mb-7 font-serif text-2xl leading-normal lg:text-4xl">
            🤙🏼 Hiya, I'm Alizeh,
          </p>
          <p className="mb-5 font-serif text-4xl leading-normal lg:text-6xl lg:leading-snug">
            I design and build intuitive, inclusive and beautiful websites.
          </p>
          <Link
            to="https://calendly.com/alizeh/website-consultation"
            target="_blank"
            className="block w-fit rounded-md border-2 border-neutral-700 px-3 py-2 text-lg text-neutral-700 hover:bg-neutral-300"
            rel="noreferrer"
          >
            Get in touch
          </Link>
        </div>

        <div className="mb-40 max-w-3xl lg:mb-80 lg:ml-auto">
          <p className="mb-7 font-serif text-2xl leading-normal lg:text-right lg:text-4xl">
            🎒 I am nerdy about
          </p>
          <p className="mb-5 font-serif text-4xl leading-normal lg:text-right lg:text-6xl lg:leading-snug">
            accessibility, design systems and clean code.
          </p>
          <Link
            to="/projects"
            className="block w-fit rounded-md border-2 border-neutral-700 px-3 py-2 text-lg text-neutral-700 hover:bg-neutral-300 lg:ml-auto"
          >
            See my projects
          </Link>
        </div>

        <div className="max-w-4xl">
          <p className="mb-7 font-serif text-2xl leading-normal lg:text-4xl">
            ⛰️ Offline,
          </p>
          <p className="mb-5 font-serif text-4xl leading-normal lg:text-6xl lg:leading-snug">
            I am an avid hiker, CrossFitter, improv performer and minimalist.
          </p>
          <Link
            to="/blog"
            className="inline-block rounded-md border-2 border-neutral-700 px-3 py-2 text-lg text-neutral-700 hover:bg-neutral-300"
          >
            Read my blog
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
