import React from 'react';

export interface ButtonProps {
  text: string;
  href: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string | number;
  align?: 'left' | 'center' | 'right';
  fontFamily?: string;

  // Fashion/styling options
  border?: string;
  borderColor?: string;
  borderWidth?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: string;
  textDecoration?: 'none' | 'underline';
  arrow?: 'none' | 'right' | 'left';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  href,
  backgroundColor = '#3498db',
  color = '#ffffff',
  padding = '10px 25px',
  borderRadius = '3px',
  fontSize = '14px',
  fontWeight = '600',
  align = 'center',
  fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  border,
  borderColor,
  borderWidth = '1px',
  textTransform = 'none',
  letterSpacing,
  textDecoration = 'none',
  arrow = 'none',
  fullWidth = false,
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
  };

  // Construct border style
  const borderStyle = border || (borderColor ? `${borderWidth} solid ${borderColor}` : 'none');

  // Add arrow to text
  const displayText = arrow === 'right' ? `${text} →` : arrow === 'left' ? `← ${text}` : text;

  const buttonStyle: React.CSSProperties = {
    display: fullWidth ? 'block' : 'inline-block',
    backgroundColor,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight: '120%',
    margin: '0',
    textDecoration,
    textTransform: textTransform as any,
    padding,
    borderRadius,
    border: borderStyle,
    letterSpacing,
    width: fullWidth ? '100%' : 'auto',
  };

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ direction: 'ltr', fontSize: '0px', padding: '10px 25px', textAlign: 'center' }}>
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
                      <td align={align} style={{ fontSize: '0px', padding: '10px 25px', wordBreak: 'break-word' }}>
                        <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderCollapse: 'separate', lineHeight: '100%', width: fullWidth ? '100%' : 'auto' }}>
                          <tbody>
                            <tr>
                              <td align="center" role="presentation" style={{ border: borderStyle, borderRadius, cursor: 'auto', padding, background: backgroundColor }}>
                                <a href={href} style={buttonStyle} target="_blank" rel="noopener noreferrer">
                                  {displayText}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
