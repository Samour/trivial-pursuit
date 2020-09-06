import React from 'react';

interface IProps {
  colour: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

export default function SelectableRoundel({ colour, checked, onChange }: IProps): JSX.Element {
  return (
    <div className="selectable-roundel-container">
      <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
      <div className="selectable-roundel"
        style={{ backgroundColor: colour }}
        onClick={() => onChange?.(!checked)}></div>
    </div>
  );
}
