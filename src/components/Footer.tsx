import React from 'react';

export interface FooterProps {
  content: string;
  backgroundColor?: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
  fontFamily?: string;
}

export const Footer: React.FC<FooterProps> = ({
  content,
  backgroundColor = '#f5f5f5',
  padding = '20px 25px',
  fontSize = '12px',
  color = '#7f8c8d',
  align = 'center',
  fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
  };

  const textStyle: React.CSSProperties = {
    fontSize,
    lineHeight: '1.6',
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
