import { Container, H1 } from '@ui';

import { CurrentForecasts } from './components/current-forecasts';

export function Forecasts(): JSX.Element {
  return (
    <Container>
      <H1>Previsões</H1>
      <CurrentForecasts />
    </Container>
  );
}
