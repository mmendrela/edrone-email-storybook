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
  padding = '20px 0',
  backgroundColor = 'transparent',
}) => {
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor,
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding }}>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{
                width: '100%',
                margin: '0 auto',
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      borderTop: `${borderWidth} ${borderStyle} ${borderColor}`,
                      fontSize: '0',
                      lineHeight: '0',
                      width,
                      margin: '0 auto',
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
