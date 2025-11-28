import React from 'react';

export interface BannerProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  href?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string | number;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: string;
  border?: string;
  closeable?: boolean;
}

export const Banner: React.FC<BannerProps> = ({
  text,
  backgroundColor = '#000000',
  color = '#ffffff',
  href,
  padding = '12px 25px',
  fontSize = '13px',
  fontWeight = '500',
  textAlign = 'center',
  textTransform = 'none',
  letterSpacing,
  border,
  closeable = false,
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
    border,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize,
    fontWeight,
    lineHeight: '1.4',
    textAlign,
    color,
    textTransform: textTransform as any,
    letterSpacing,
    margin: 0,
  };

  const linkStyle: React.CSSProperties = {
    ...textStyle,
    textDecoration: 'none',
    display: 'block',
  };

  const content = (
    <div style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />
  );

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%', backgroundColor, border }}>
        <tbody>
          <tr>
            <td style={{ padding }}>
              <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td align={textAlign} style={{ fontSize: '0px', wordBreak: 'break-word' }}>
                      {href ? (
                        <a href={href} style={linkStyle} target="_blank" rel="noopener noreferrer">
                          <div dangerouslySetInnerHTML={{ __html: text }} />
                        </a>
                      ) : (
                        content
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
