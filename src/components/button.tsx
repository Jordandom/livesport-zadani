type ButtonProps = {
  active: boolean;
  title: string;
  onClick: () => void;
  testId?: string;
};

const Button = ({ title, onClick, active, testId }: ButtonProps) => (
  <button
    data-cy={testId}
    type="button"
    className={`rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl ${
      active && 'outline-none ring-4 ring-blue-300 dark:ring-blue-800'
    }`}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
