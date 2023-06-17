import { Helmet } from 'react-helmet';

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
          <p className="mb-7 font-serif text-4xl leading-normal lg:text-6xl lg:leading-snug">
            I design and build intuitive, inclusive and beautiful websites.
          </p>
        </div>

        <div className="mb-40 max-w-3xl lg:mb-80 lg:ml-auto">
          <p className="mb-7 font-serif text-2xl leading-normal lg:text-right lg:text-4xl">
            🎒 I am nerdy about
          </p>
          <p className="mb-7 font-serif text-4xl leading-normal lg:text-right lg:text-6xl lg:leading-snug">
            accessibility, design systems and clean code.
          </p>
        </div>

        <div className="max-w-4xl">
          <p className="mb-7 font-serif text-2xl leading-normal lg:text-4xl">
            ⛰️ Offline,
          </p>
          <p className="mb-4 font-serif text-4xl leading-normal lg:text-6xl lg:leading-snug">
            I am an avid hiker, CrossFitter, improv performer and minimalist.
          </p>
          <p className="mb-32 font-serif text-lg leading-normal">
            (Pretty much anything with a cult-like following really)
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
