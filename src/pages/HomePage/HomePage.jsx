import React from 'react';
import Header from '../../components/common/Header/Header';
import Button from '../../components/common/Button/Button';

const HomePage = () => {
  return (
    <>
      <Header />
      <Button text="구경해보기" to="/list" width={17.5} />
    </>
  );
};

export default HomePage;
