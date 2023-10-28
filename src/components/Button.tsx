type ButtonProps = {
  active: boolean;
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick, active }: ButtonProps) => (
  <button
    type="button"
    className={`text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gradient-to-bl ${
      active && 'ring-4 outline-none ring-blue-300 dark:ring-blue-800'
    }`}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
