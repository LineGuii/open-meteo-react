import { Button, Container, H1 } from '@ui';
import { Link } from 'react-router-dom';

import { AddForm, CurrentForecasts } from './components';

export function AddForecast(): JSX.Element {
  return (
    <Container>
      <div className="gap-4 flex">
        <Link to={'/forecasts'}>
          <Button style={{ height: 'fit-content' }}>
            <i className="fa-solid fa-arrow-left"></i> Voltar
          </Button>
        </Link>
        <H1 className="text-3xl font-bold mb-8">Adicionar Previsão</H1>
      </div>

      <AddForm />
      <CurrentForecasts />
    </Container>
  );
}
