import Input from '@components/input';
import Button from '@components/butto';
import { useFilterActions } from '@store/filter-store';
import { useState } from 'react';

enum Filters {
  All = '1,2,3,4',
  Competitions = '1',
  Teams = '2,3,4',
}

const Filter = () => {
  const { setTypeIds } = useFilterActions();
  // State to keep track of the active filter
  const [activeFilter, setActiveFilter] = useState<Filters>(Filters.All);

  // Function to set the type IDs and update the active filter
  const handleFilterClick = (filter: Filters) => {
    setTypeIds(filter);
    setActiveFilter(filter);
  };

  // Function to conditionally apply the "active" class to the button
  const isActive = (filter: Filters) => activeFilter === filter;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        <Input />
        <div className="flex gap-4 items-center">
          <Button title="Vše" active={isActive(Filters.All)} onClick={() => handleFilterClick(Filters.All)} />
          <Button
            title="Soutěže"
            active={isActive(Filters.Competitions)}
            onClick={() => handleFilterClick(Filters.Competitions)}
          />
          <Button title="Týmy" active={isActive(Filters.Teams)} onClick={() => handleFilterClick(Filters.Teams)} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
