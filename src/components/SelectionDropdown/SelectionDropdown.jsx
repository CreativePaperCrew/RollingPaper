import { useState } from 'react';
import * as S from './SelectionDropdownStyle';
import arrowTop from '../../assets/icons/arrowTop.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

const RelationDropdown = ({ selectList, defaultValue }) => {
  const [isClickedDown, setIsClickedDown] = useState('false');
  const [selectedRelation, setSelectedRelation] = useState(defaultValue);

  const handleArrowClick = () => {
    setIsClickedDown(!isClickedDown);
  };

  const handleRelationClick = (relation) => {
    setSelectedRelation(relation);
  };

  return (
    <S.SelectedRelation name="relation" onClick={handleArrowClick}>
      {selectedRelation}
      {!isClickedDown ? (
        <div>
          <img src={arrowTop} alt="arrow-top" />
          <S.RelationList>
            {selectList.map((relation) => (
              <S.Relation
                key={relation}
                onClick={() => handleRelationClick(relation)}
              >
                {relation}
              </S.Relation>
            ))}
          </S.RelationList>
        </div>
      ) : (
        <img src={arrowDown} alt="arrow-down" />
      )}
    </S.SelectedRelation>
  );
};

export default RelationDropdown;
