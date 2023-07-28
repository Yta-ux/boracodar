import { CardMusic } from "./components/Card";
import { Box, Container } from "./styles/app";
export function App() {
  return (
    <Box>
      <Container>
        <CardMusic />
        <CardMusic />
        <CardMusic />
      </Container>
    </Box>
  );
}
