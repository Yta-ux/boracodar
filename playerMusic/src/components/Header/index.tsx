import banner from "../../assets/banner.png";
import { Description, Header } from "./style";

function HeaderCard() {
  return (
    <Header>
      <img src={banner} alt="banner music" />
      <Description>
        <h1>Título da Música</h1>
        <p>Cantor da música</p>
      </Description>
    </Header>
  );
}

export { HeaderCard };
