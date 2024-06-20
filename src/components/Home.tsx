function Home() {
  const handleRedirect = () => {
    window.location.href = '/CrazyWildlife/index.html';
  };

  return (
    <div>
      <h1 onClick={handleRedirect}>MrBrodinha</h1>
    </div>
  );
}

export default Home;
