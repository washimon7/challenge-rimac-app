import { Coverage } from '../../types';
import { CoverageItem } from './CoverageItem';

type CoveragesProps = {
  coverages: Coverage[];
  handleCheckboxChange: (value: boolean, name: string) => void;
};

export const Coverages = (props: CoveragesProps) => {
  return (
    <ul className='insurance-coverages__options'>
      {props.coverages.map(coverage => (
        <CoverageItem
          key={coverage.name}
          handleCheckboxChange={props.handleCheckboxChange}
          coverage={coverage}
        />
      ))}
    </ul>
  );
};
