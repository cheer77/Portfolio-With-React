import { Cont, ContentInner } from "./style/Main.style";
import { Profile } from "./layout/profile/Profile";
import { Menu } from "./layout/menu/Menu";
import { Content } from "./layout/content/Content";

function App() {
  return (
    <div className="App">
      <Cont>
        <ContentInner>
          <Profile></Profile>
          <Content></Content>
          <Menu></Menu>
        </ContentInner>
      </Cont>
    </div>
  );
}

export default App;
