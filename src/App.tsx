import { Cont, ContentInner } from './style/Main.style';
import { Profile } from './layout/profile/Profile';
import { Menu } from './layout/menu/Menu';
import { Content } from './layout/content/Content';
import { BurgerMenu } from './components/BurgerMenu';
import React, { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="App">
      <Cont>
        <ContentInner>
          <BurgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
          <Profile isClicked={isClicked} />
          <Content />
          <Menu />
        </ContentInner>
      </Cont>
    </div>
  );
}

export default App;
