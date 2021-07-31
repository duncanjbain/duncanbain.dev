const Intro = () => (
    <section className="md:py-2 mb-8">
      <p className="text-2xl md:text-4xl font-bold text-blue-500 mb-4">
        Hello!{' '}
        <span role="img" aria-label="Waving hand emoji icon">
          👋
        </span>{' '}
        <span className="bg-blue-100 px-2">I&apos;m Duncan</span>
      </p>
      <p className="font-normal text-xl md:text-2xl md:leading-relaxed mb-4">
        I&apos;m a Mechanical Engineer who&apos;s learning to code. This is
        where I share the things that I&apos;ve created, where I write about the
        things that I&apos;m working on and where I talk about anything else
        that excites me.
        </p>
        <p className="font-normal text-xl md:text-2xl md:leading-relaxed">
        Feel free to get in touch with me on{' '}
        <a
          className="px-1 border-b-2 text-blue-500 border-blue-400 hover:border-gray-800 font-bold bg-blue-100
  transition border-b-2 0.3s ease, color 0.3s ease"
          href="https://twitter.com/duncanbain"
        >
          Twitter
        </a>{' '}
        or at{' '}
        <a
          className="px-1 border-b-2 text-blue-500 border-blue-400 hover:border-gray-800 font-bold bg-blue-100
            transition border-b-2 0.3s ease, color 0.3s ease"
          href="mailto:duncan@bain.io"
        >
          duncan@bain.io
        </a>
        .
      </p>
    </section>
  );

export default Intro;
