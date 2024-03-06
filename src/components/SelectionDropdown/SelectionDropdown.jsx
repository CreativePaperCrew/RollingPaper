import { useState } from 'react';
import * as S from './SelectionDropdownStyle';
import arrowTop from '../../assets/icons/arrowTop.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

const SelectionDropdown = ({
  selectList,
  handleOptionClick,
  type,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState('false');

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.SelectedOption onClick={handleArrowClick}>
      {children}
      {!isExpanded ? (
        <div>
          <img src={arrowTop} alt="arrow-top" />
          <S.OptionList>
            {selectList.map((option) => (
              <S.Option
                key={option}
                onClick={() => {
                  handleOptionClick(type, option);
                }}
              >
                {option}
              </S.Option>
            ))}
          </S.OptionList>
        </div>
      ) : (
        <img src={arrowDown} alt="arrow-down" />
      )}
    </S.SelectedOption>
  );
};

export default SelectionDropdown;
