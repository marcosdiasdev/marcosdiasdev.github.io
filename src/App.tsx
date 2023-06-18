import avatar from './assets/avatar.jpg';
import AppTemplate from './components/templates/AppTemplate/AppTemplate';

const App: React.FunctionComponent = () => {
  return (
    <AppTemplate>
      <div className="w-full max-w-xl my-0 mx-auto p-2 text-center">
        <div className="flex justify-center p-3">
          <a href="https://www.linkedin.com/in/marcos-dias-67177931/" target="_blank" rel="noreferrer">
            <img src={avatar} className="rounded-full w-1/2 mx-auto" alt="Avatar" />
          </a>
        </div>
        <h1>Marcos Dias</h1>
        <h2>Software Engineer</h2>
      </div>
    </AppTemplate>
  );
};

export default App;
