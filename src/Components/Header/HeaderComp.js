const Title = () => {
  const title = "My Todo App";
  return <h1>{title}</h1>;
};

const Header = () => {
  return (
    <header>
    <div className="header">
      <Title />
    </div>
    </header>
  );
};

export default Header