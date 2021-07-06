import React from 'react';

const Title = () => {
    const title = "Todos";
    return <h2>{title}</h2>;
  };
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
      </div>
    );
  };
  
  export default Header