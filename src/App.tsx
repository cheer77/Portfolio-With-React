import "./App.css";
import { Cont, ContentInner } from "./style/Main.style";
import { ProfileBlock } from "./components/Profile";
import { ContentBlock } from "./components/Content";
import { MenuBlock } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Cont>
        <ContentInner>
          <ProfileBlock></ProfileBlock>
          <ContentBlock></ContentBlock>
          <MenuBlock></MenuBlock>
        </ContentInner>
      </Cont>
    </div>
  );
}

export default App;
