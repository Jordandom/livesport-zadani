const Text = ({ text }: { text: string | undefined }) => (
  <div className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{text}</span>
  </div>
);

export default Text;
