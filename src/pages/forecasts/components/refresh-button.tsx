import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@ui';
import { useCallback } from 'react';

export function RefreshButton() {
  const queryClient = useQueryClient();

  const handleClick = useCallback(
    () => queryClient.invalidateQueries({ queryKey: ['open-meteo', 'forecast'] }),
    [],
  );

  return (
    <Button onClick={handleClick}>
      Recarregar <i className="fa-solid fa-redo"></i>
    </Button>
  );
}
