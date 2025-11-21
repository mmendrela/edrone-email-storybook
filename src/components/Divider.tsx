import React from 'react';

export interface DividerProps {
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  width?: string;
  padding?: string;
  backgroundColor?: string;
}

export const Divider: React.FC<DividerProps> = ({
  borderColor = '#cccccc',
  borderWidth = '1px',
  borderStyle = 'solid',
  width = '100%',
  padding = '20px 25px',
  backgroundColor = '#fff',
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
  };

  const dividerStyle: React.CSSProperties = {
    borderTop: `${borderWidth} ${borderStyle} ${borderColor}`,
    fontSize: '1px',
    margin: '0px auto',
    width,
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
                      <td style={{ fontSize: '0px', padding, wordBreak: 'break-word' }}>
                        <p style={dividerStyle} />
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
