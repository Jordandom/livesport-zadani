const Heading = ({ title }: { title: string | undefined }) => (
  <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
      {title}
    </span>
  </h1>
);

export default Heading;
