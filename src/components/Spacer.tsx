import React from 'react';

export interface SpacerProps {
  height?: string;
  backgroundColor?: string;
  showBorder?: boolean;
}

export const Spacer: React.FC<SpacerProps> = ({
  height = '20px',
  backgroundColor = 'transparent',
  showBorder = false,
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
    ...(showBorder && { border: '1px dashed #cccccc' }),
  };

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ direction: 'ltr', fontSize: '0px', padding: '0', textAlign: 'center' }}>
              <div style={{
                fontSize: '0px',
                textAlign: 'left',
                direction: 'ltr',
                display: 'inline-block',
                verticalAlign: 'top',
                width: '100%'
              }}>
                <table border={0} cellPadding={0} cellSpacing={0} role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style={{ height }}>
                        <div style={{ height }}>&nbsp;</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
