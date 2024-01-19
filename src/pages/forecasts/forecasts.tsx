import { Container, Flex, H1 } from '@ui';

import { ChangeUnitsButton } from './components/change-units-button';
import { CurrentForecasts } from './components/current-forecasts';
import { RefreshButton } from './components/refresh-button';

export function Forecasts(): JSX.Element {
  return (
    <Container>
      <H1 style={{ marginBottom: '2rem' }}>Previsões</H1>

      <Flex
        style={{
          marginBottom: '1rem',
          gap: '0.5rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <RefreshButton />
        <ChangeUnitsButton />
      </Flex>

      <CurrentForecasts />
    </Container>
  );
}
