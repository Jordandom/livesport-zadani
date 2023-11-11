const Heading = ({ title }: { title: string | undefined }) => (
  <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span className="underline decoration-blue-400 decoration-8 dark:decoration-blue-600">
      {title}
    </span>
  </h1>
);

export default Heading;
