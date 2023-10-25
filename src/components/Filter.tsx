import Input from '@components/Input';
import Button from '@components/Button';

const Filter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <Input />
        <Button />
      </div>
    </div>
  );
};

export default Filter;
