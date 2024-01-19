import { Button, Container, Flex, H1 } from '@ui';
import { Link } from 'react-router-dom';

import { ChangeUnitsButton } from './components/change-units-button';
import { CurrentForecasts } from './components/current-forecasts';
import { RefreshButton } from './components/refresh-button';

export function Forecasts(): JSX.Element {
  return (
    <Container>
      <H1 style={{ marginBottom: '2rem' }}>Previsões</H1>

      <Flex
        style={{
          marginBottom: '0.5rem',
          gap: '0.5rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Link to={'/add-forecasts'}>
          <Button>
            Adicionar Previsão <i className="fa-solid fa-add"></i>
          </Button>
        </Link>

        <RefreshButton />
      </Flex>
      <Flex
        style={{
          marginBottom: '1rem',
          justifyContent: 'flex-end',
        }}
      >
        <ChangeUnitsButton />
      </Flex>

      <CurrentForecasts />
    </Container>
  );
}
