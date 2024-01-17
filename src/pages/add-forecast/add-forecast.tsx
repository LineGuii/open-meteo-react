import { Container, H1 } from '@ui';

import { AddForm, CurrentForecasts } from './components';

export function AddForecast(): JSX.Element {
  return (
    <Container>
      <div className="gap-4 flex">
        <span className="text-3xl font-bold" onClick={() => window.history.back()}>
          {'<'}
        </span>
        <H1 className="text-3xl font-bold mb-8">Adicionar Previsão</H1>
      </div>

      <AddForm />
      <CurrentForecasts />
    </Container>
  );
}
