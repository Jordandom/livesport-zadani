import Input from '@components/input';
import Button from './button';

type FilterProps = {
  // TODO: Change any to the type of the filter object
  query: string;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
};

const Filter = ({ query, setFilter }: FilterProps) => {
  console.log('🚀 ~ file: Filter.tsx:11 ~ Filter ~ filter:', query);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <Input setFilter={setFilter} />
        <div className="flex gap-4 items-center">
          <Button
            title="Vše"
            onClick={() =>
              setFilter({
                sportIds: '1,2,3,4,5,6,7,8,9',
                typeIds: '1,2,3,4',
                query,
              })
            }
          />
          <Button
            title="Soutěže"
            onClick={() =>
              setFilter({
                sportIds: '1,2,3,4,5,6,7,8,9',
                typeIds: '1',
                query,
              })
            }
          />
          <Button
            title="Týmy"
            onClick={() =>
              setFilter({
                sportIds: '1,2,3,4,5,6,7,8,9',
                typeIds: '2,3,4',
                query,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
