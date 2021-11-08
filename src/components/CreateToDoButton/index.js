import React from 'react';

const CreateToDoButton = () => {
  const onClickButton = () => {
    alert('Aquí se debería abrir un modal');
  };
  return <button onClick={onClickButton}>+</button>;
};

export { CreateToDoButton };
