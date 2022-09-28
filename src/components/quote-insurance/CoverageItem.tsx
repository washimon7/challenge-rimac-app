import ICRedArrowUp from '../../assets/icons/ic_red_arrow_up.svg';
import ICRedArrowDown from '../../assets/icons/ic_red_arrow_down.svg';
import ICCircleAdd from '../../assets/icons/ic_circle_add.svg';
import ICCircleRemove from '../../assets/icons/ic_circle_remove.svg';
import ICArrowUp from '../../assets/icons/ic_arrow_up.svg';
import ICArrowDown from '../../assets/icons/ic_arrow_down.svg';
import ICTheft from '../../assets/icons/ic_theft.svg';
import { Coverage, CoveragesForm } from '../../types';
import { useState } from 'react';

type CoverageItemProps = {
  handleCheckboxChange: (value: boolean, name: string) => void;
  coverage: Coverage;
};

export const CoverageItem = ({
  handleCheckboxChange,
  coverage,
}: CoverageItemProps) => {
  const [isShownDescription, setIsShownDescription] = useState<boolean>(false);

  return (
    <li className='insurance-coverages__option insurance-coverages__option--expanded'>
      <div className='insurance-coverages__option-img'>
        <img src={ICTheft} alt='coverage' />
      </div>
      <div className='insurance-coverages__option-content insurance-coverages__option-content--expanded'>
        <div className='insurance-coverages__option-input'>
          <span>{coverage.insurance}</span>
          <label className='switch'>
            <input
              onChange={() =>
                handleCheckboxChange(!coverage.insured, coverage.name)
              }
              type='checkbox'
              checked={coverage.insured}
            />
            <span className='slider round'></span>
          </label>
          {isShownDescription ? (
            <img
              onClick={() => setIsShownDescription(false)}
              className={`insurance-coverages__button-hide${
                isShownDescription
                  ? ' insurance-coverages__button-hide--expanded'
                  : ''
              }`}
              src={ICRedArrowUp}
              alt='ocultar'
            />
          ) : (
            <img
              onClick={() => setIsShownDescription(true)}
              className={`insurance-coverages__button-show${
                isShownDescription
                  ? ' insurance-coverages__button-show--expanded'
                  : ''
              }`}
              src={ICRedArrowDown}
              alt='mostrar'
            />
          )}
        </div>
        {coverage.insured ? (
          <div
            className={`insurance-coverages__remove-option${
              isShownDescription
                ? ' insurance-coverages__remove-option--expanded'
                : ''
            }`}
          >
            <img
              onClick={() => handleCheckboxChange(false, coverage.name)}
              src={ICCircleRemove}
              alt='icon'
            />
            <span>quitar</span>
          </div>
        ) : (
          <div
            className={`insurance-coverages__add-option${
              isShownDescription
                ? ' insurance-coverages__add-option--expanded'
                : ''
            }`}
          >
            <img
              onClick={() => handleCheckboxChange(true, coverage.name)}
              src={ICCircleAdd}
              alt='icon'
            />
            <span>agregar</span>
          </div>
        )}
        {isShownDescription && <p>{coverage.description}</p>}
        {isShownDescription ? (
          <div
            onClick={() => setIsShownDescription(false)}
            className='insurance-coverages__button-hide-content insurance-coverages__button-hide-content--expanded'
          >
            <span>Ver menos</span>
            <img src={ICArrowUp} alt='icon mostrar' />
          </div>
        ) : (
          <div
            onClick={() => setIsShownDescription(true)}
            className='insurance-coverages__button-show-content insurance-coverages__button-show-content--expanded'
          >
            <span>Ver más</span>
            <img src={ICArrowDown} alt='icon mostrar' />
          </div>
        )}
      </div>
    </li>
  );
};
