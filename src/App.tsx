import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from './assets/avatar.png';
import AppTemplate from './components/templates/AppTemplate/AppTemplate';
import { faDev, faGithub, faGitlab, faLinkedin, faMedium, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const App: React.FunctionComponent = () => {
  return (
    <AppTemplate>
      <div className="w-full max-w-xl my-0 mx-auto p-2 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div id="avatar-container" className="flex justify-center col-span-1">
          <img src={avatar} className="rounded-full w-1/2 md:w-max mx-auto" alt="Avatar" />
        </div>
        <div id="info-container" className="col-span-2 h-fit">
          <div className="mb-4">
            <h1 className="font-bold">Marcos Dias</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/marcos-dias-67177931/"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="https://x.com/marcosdiasdev" target="_blank" rel="noreferrer" className="text-inherit transition">
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
            <a
              href="https://github.com/marcosdiasdev"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              href="https://gitlab.com/marcos.dias3"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition"
            >
              <FontAwesomeIcon icon={faGitlab} size="xl" />
            </a>
            <a href="https://dev.to/marcosdiasdev" target="_blank" rel="noreferrer" className="text-inherit transition">
              <FontAwesomeIcon icon={faDev} size="xl" />
            </a>
            <a
              href="https://medium.com/@marcosdiasdev"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition"
            >
              <FontAwesomeIcon icon={faMedium} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
};

export default App;
