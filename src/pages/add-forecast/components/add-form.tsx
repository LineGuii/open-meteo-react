import { forecastsState } from '@store/forecasts.store';
import { Button, Form, Label, TextInput } from '@ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { ForecastValues } from './types';

export function AddForm() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ForecastValues>();

  const [forecasts, setForecasts] = useRecoilState(forecastsState);
  const onSubmit: SubmitHandler<ForecastValues> = (data) => {
    localStorage.setItem('forecasts', JSON.stringify([...forecasts, data]));
    setForecasts((old: ForecastValues[]) => [...old, data]);
    reset({
      latitude: '',
      longitude: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} name="add-forecast">
      <div className="grid gap-2 grid-flow-row-dense grid-cols-3 sm:grid-cols-4">
        <div className="flex flex-1 flex-col">
          <Label>Latitude</Label>
          <TextInput placeholder="10.43" name="latitude" control={control} />
          {errors?.latitude && <p>Campo obrigatório.</p>}
        </div>
        <div className="flex flex-1 flex-col">
          <Label>Longitude</Label>
          <TextInput placeholder="1.25" name="longitude" control={control} />
          {errors?.longitude && <p>Campo obrigatório.</p>}
        </div>

        <div className="flex-1 my-4 mx-4">
          <Button type="submit">Adicionar</Button>
        </div>
      </div>
    </Form>
  );
}
