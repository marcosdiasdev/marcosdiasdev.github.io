export interface Props {
  className?: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const AppTemplate: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="w-full">
      <header className="w-full flex justify-end fixed top-0 left-0" />
      {children}
    </div>
  );
};

export default AppTemplate;
