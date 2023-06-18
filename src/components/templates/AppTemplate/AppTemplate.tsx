import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useCallback, useState } from 'react';

export interface Props {
  className?: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const AppTemplate: React.FunctionComponent<Props> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), [setTheme]);

  return (
    <div className="w-full">
      <header className="w-full flex justify-end fixed top-0 left-0">
        <button className="bg-transparent hover:border-transparent focus:outline-transparent" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} size="2xl" />
        </button>
      </header>
      {children}
    </div>
  );
};

export default AppTemplate;
