import React from 'react';

export interface LogoProps {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  padding?: string;
  backgroundColor?: string;
  align?: 'left' | 'center' | 'right';
}

export const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  href = '#',
  width = 150,
  padding = '20px 0',
  backgroundColor = '#fff',
  align = 'center',
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
  };

  // Add horizontal padding for left/right alignment
  const getPadding = () => {
    const [vertical, horizontal = '0'] = padding.split(' ');
    if (align === 'left') {
      return `${vertical} ${horizontal} ${vertical} 25px`;
    } else if (align === 'right') {
      return `${vertical} 25px ${vertical} ${horizontal}`;
    }
    return padding;
  };

  const contentStyle: React.CSSProperties = {
    direction: 'ltr',
    fontSize: '0px',
    padding: getPadding(),
    textAlign: align,
  };

  const imageWrapperStyle: React.CSSProperties = {
    fontSize: '0px',
    padding: '10px 25px',
    wordBreak: 'break-word',
  };

  const imageStyle: React.CSSProperties = {
    border: 0,
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    height: 'auto',
    width: '100%',
    fontSize: '13px',
    maxWidth: `${width}px`,
  };

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align={align} style={contentStyle}>
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                <img alt={alt} height="auto" src={src} width={width} style={imageStyle} />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
