import { unitsState } from '@store/units.store';
import { SwitchButton } from '@ui/switch-button/switch';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export function ChangeUnitsButton() {
  const [units, setUnits] = useRecoilState(unitsState);

  const handleClick = useCallback(() => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  }, [units]);

  return (
    <span>
      <SwitchButton onClick={handleClick} checked={units === 'imperial'}></SwitchButton>
      <span className="ml-2 toggle-label">Sistema Imperial</span>
    </span>
  );
}
