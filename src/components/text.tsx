const Text = ({ text }: { text: string | undefined }) => (
  <div className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
      {text}
    </span>
  </div>
);

export default Text;
