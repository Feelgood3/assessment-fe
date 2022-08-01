import React from 'react';

function About() {
  return (
    <div className="main-container">
      <h1>A little about me!</h1>
      <section className="picture__container">
        <img src="/profilepic.jpg" alt="Sergio Moncada" />
        <div className="about-me">
          <h2>My name is Sergio Moncada, and I&apos;m trying to become a Pokémon Master</h2>
          <p>But, in the meantime, I&apos;m studying web development at Make It Real.</p>
          <p>In fact, I&apos;m a Lawyer, a writer, and even an announcer.</p>
          <h3>In Make It Real, I&apos;ve learned quite some stuff already, but to mention some:</h3>
          <ul>
            <li>SCRUM</li>
            <li>React Props (useState and UseEffect)</li>
            <li>Fetching from an API!</li>
          </ul>
          <p> My personal email is: <a href="mailto:sergiomoncadao@gmail.com">sergiomoncadao@gmail.com</a></p>
          <p> And here is my Github: <a href="https://github.com/Feelgood3" target="_blank" rel="noreferrer">github.com/Feelgood3</a></p>
        </div>
      </section>
    </div>
  );
}

export default About;
