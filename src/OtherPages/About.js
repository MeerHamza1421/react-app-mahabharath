import "../styles/extras.scss";

const About = () => {
  return (
    <div className="about">
      <h1>About this project</h1>
      <h2>Tech Stack used: </h2>
      {/* https://daveceddia.com/react-image-tag/ */}
      <div className="aboutImage">
        <img src="./aboutImages/react.png" alt="Waiting" />
        <img src="./aboutImages/firebase.png" alt="Waiting" />
        {/* <img src="./aboutImages/puppeteer.png" alt="Waiting" /> */}
        <img src="./aboutImages/nodejs.svg" alt="Waiting" />
        <img src="./aboutImages/express.png" alt="Waiting" />
        <img src="./aboutImages/html.png" alt="Waiting" />
        <img src="./aboutImages/css.png" alt="Waiting" />
        <img src="./aboutImages/javascript.png" alt="Waiting" />
        <h2>Contribute here</h2>
        <a href="https://github.com/Abhiramborige/react-app-mahabharath">
          <img src="./aboutImages/github.png" alt="Waiting" />
        </a>
        <h2>Hosted here</h2>
        <img src="./aboutImages/netlify.png" alt="Waiting" />
        <img src="./aboutImages/heroku.png" alt="Waiting" />
        <h2>API used</h2>
        <img src="./aboutImages/MediaWiki.svg" alt="Waiting" />
        <img src="./aboutImages/Wikipedia.png" alt="Waiting" />

        {/* <h2>Check out this video !😃</h2>
        <a href="https://youtube.com">
          <img src="./aboutImages/youtube.png" alt="Waiting" />
        </a> */}
      </div>
    </div>
  );
};

export default About;
