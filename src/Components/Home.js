import React from 'react';

function Home() {
  const menus = ['Menu1', 'Menu2', 'Menu3', 'Menu4'];

  return (
    <ul>
      {menus.map((menu, index) => (
        <li key={index}>{menu}</li>
      ))}
    </ul>
  );
}
export default Home;
