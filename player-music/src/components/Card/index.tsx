import { ControlCard } from "../Control";
import { HeaderCard } from "../Header";
import { TimeCard } from "../Time";
import { Card } from "./style";

function CardMusic() {
  return (
    <Card>
      <HeaderCard/>
      <ControlCard/>
      <TimeCard/>
    </Card>
  );
}

export { CardMusic };