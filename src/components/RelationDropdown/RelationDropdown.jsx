import { useState } from 'react';
import * as S from './RelationDropdownStyle';
import arrowTop from '../../assets/icons/arrowTop.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';
import { RELATIONSHIPS } from '../../constants/relationships';

const RelationDropdown = () => {
  const [isClickedDown, setIsClickedDown] = useState('false');
  const [selectedRelation, setSelectedRelation] = useState('친구');

  const handleArrowClick = () => {
    setIsClickedDown(!isClickedDown);
  };

  const handleRelationClick = (relation) => {
    setSelectedRelation(relation);
  };

  return (
    <S.SelectedRelation name="relation" onClick={handleArrowClick}>
      {selectedRelation}
      {isClickedDown ? (
        <div>
          <img src={arrowTop} alt="arrow-top" />
          <S.RelationList>
            {RELATIONSHIPS.map((relation) => (
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
