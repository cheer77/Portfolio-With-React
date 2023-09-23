import { Profile, SocialBlock } from "../style/profile/Profile.style";
import MyPhoto from "../images/profile.png";
export function ProfileBlock() {
  return (
    <Profile>
      <SocialBlock>
        <img src={MyPhoto} alt="Foto of developer" />
      </SocialBlock>
    </Profile>
  );
}
