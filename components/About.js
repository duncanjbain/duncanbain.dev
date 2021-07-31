import ArticleContainer from './ArticleContainer';

const About = () => {
  return (
    <ArticleContainer>
      <h2>About Me!</h2>
      <p>
        Hi!{' '}
        <span role="img" aria-label="Waving hand emoji icon">
          👋
        </span>{' '}
        I&apos;m Duncan, and I&apos;m a Mechanical Engineer learning to code,
        based in London.
      </p>
      <p>
        {' '}
        In Spring 2019 I decided to make a change, a change in my career as a
        Mechanical Engineer to become a Software Engineer. I&apos;ve always been
        interested in computers, having been introduced to them at a young age,
        I even went on to study Computer Science for a year before changing to
        Mechanical Engineering! Now after spending the last 8 years working in
        various engineering roles I&apos;ve decided to make the change.
      </p>
      <p>
        I&apos;m now spending the majority of my free time learning HTML, CSS
        and JavaScript with the intention of gianing a solid foundation of
        fullstack web development.
      </p>
      <p>
        When not coding I enjoy cycling, cooking and travelling.
      </p>
    </ArticleContainer>
  );
};

export default About;
