import React from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <>
      <Header />
      <Button text="구경해보기" to="/list" width={17.5} />
    </>
  );
};

export default HomePage;
