import { Container, H1 } from '@ui';

import { AddForm, CurrentForecasts } from './components';

export function AddForecast(): JSX.Element {
  return (
    <Container>
      <div className="gap-4 flex">
        <H1 className="text-4xl font-bold mb-8">Adicionar Previsão</H1>
      </div>

      <AddForm />
      <CurrentForecasts />
    </Container>
  );
}
