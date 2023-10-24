import Button from '@components/Button';
import { useAllResultsQuery } from '@utils/data-fetching/hooks';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState({
    sportIds: '1,2,3,4,5,6,7,8',
    typeIds: '1,2,3',
    q: 'aa',
  });

  console.log('🚀 ~ file: App.tsx:9 ~ App ~ filter:', filter);

  const { data, isPending, error } = useAllResultsQuery(filter);

  if (isPending) return <p>Loading...</p>;

  if (error) console.log('🚀 ~ file: App.tsx:12 ~ App ~ error', error);

  console.log('🚀 ~ file: App.tsx:6 ~ App ~ data:', data);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
    </>
  );
}

export default App;
