import { Time, BarTime, TimeMusic } from "./style";

function TimeCard() {
  return (
    <Time>
      <BarTime>
        <div></div>
      </BarTime>
      <TimeMusic>
        <p>00:00</p>
        <p>02:00</p>
      </TimeMusic>
    </Time>
  );
}

export { TimeCard };
