import play from "../../assets/play.svg";
import back from "../../assets/back.svg";
import prox from "../../assets/prox.svg";
import { Control } from "./style";

function ControlCard() {
  return (
    <Control>
      <img src={back} />
      <img src={play} />
      <img src={prox} />
    </Control>
  );
}

export { ControlCard };
