import React, { useState, useEffect } from 'react';
import './Welcome.css';
import WelcomeImg from '../../resources/tempo-welcome.png';

const WelcomeScreen = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    'If you can’t <span class="important-word">explain it simply</span>, you don’t <span class="important-word">understand it well enough.</span>',
    'The <span class="important-word">greatest danger</span> in times of turbulence is not the turbulence; it is to <span class="important-word">act with yesterday\'s logic</span>.',
    'Science and technology <span class="important-word">revolutionize our lives</span>, but memory, tradition and myth <span class="important-word">frame our response</span>.',
    'It is the tension between <span class="important-word">creativity and skepticism</span> that has produced the stunning and unexpected <span class="important-word">findings of science</span>.',
    '<span class="important-word">Imagination is more </span> important than knowledge.<span class="important-word"> Knowledge is limited.</span> Imagination encircles the world.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((quoteIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quoteIndex]);

  return (
    <section className="welcome-section">
      <figure className="welcome-pane">
        <img src={WelcomeImg} alt="Welcome" className="welcome-image" />
      </figure>
      <blockquote className="welcome-pane">
        <h1 className="quote" dangerouslySetInnerHTML={{ __html: quotes[quoteIndex] }}></h1>
      </blockquote>
    </section>
  );
};

export default WelcomeScreen;
