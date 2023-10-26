import Input from '@components/input';
import Button from './button';

type FilterProps = {
  // TODO: Change any to the type of the filter object
  setFilter: React.Dispatch<React.SetStateAction<any>>;
};

const Filter = ({ setFilter }: FilterProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <Input setFilter={setFilter} />
        <div>
          <Button
            title="Vše"
            onClick={() =>
              setFilter({
                sportIds: '1,2,3,4,5,6,7,8',
                typeIds: '1,2,3',
                q: 'aa',
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
