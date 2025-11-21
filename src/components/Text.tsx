import React from 'react';

export interface TextProps {
  content: string;
  align?: 'left' | 'center' | 'right';
  padding?: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  lineHeight?: string;
  fontFamily?: string;
  backgroundColor?: string;
}

export const Text: React.FC<TextProps> = ({
  content,
  align = 'left',
  padding = '10px 25px',
  fontSize = '14px',
  fontWeight = '400',
  color = '#000000',
  lineHeight = '1.5',
  fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  backgroundColor = '#fff',
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
  };

  const textStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    lineHeight,
    textAlign: align,
    color,
    fontFamily,
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
                      <td align={align} style={{ fontSize: '0px', padding, wordBreak: 'break-word' }}>
                        <div style={textStyle} dangerouslySetInnerHTML={{ __html: content }} />
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
