import React from 'react';

export interface LogoProps {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  filter?: string;
  backgroundColor?: string;
}

interface HeaderProps {
  logo?: LogoProps;
  preheaderText?: string;
  browserLinkText?: string;
  browserLinkHref?: string;
  browserLinkColor?: string;
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  preheaderText,
  browserLinkText = 'Zobacz w przeglądarce',
  browserLinkHref = '#',
  browserLinkColor = '#777777',
  backgroundColor = '#ffffff',
}) => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: logo?.backgroundColor || backgroundColor,
    padding: '10px 0',
  };

  const contentTableStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const preheaderStyle: React.CSSProperties = {
    display: 'none',
    fontSize: '1px',
    color: '#ffffff',
    lineHeight: '1px',
    maxHeight: '0px',
    maxWidth: '0px',
    opacity: 0,
    overflow: 'hidden',
  };

  const browserLinkStyle: React.CSSProperties = {
    fontSize: '12px',
    color: browserLinkColor,
    textDecoration: 'underline',
    paddingBottom: '10px',
    display: 'block',
  };

  return (
    <table style={containerStyle} cellPadding="0" cellSpacing="0" role="presentation">
      <tbody>
        <tr>
          <td>
            {preheaderText && <span style={preheaderStyle}>{preheaderText}</span>}
            <table style={contentTableStyle} cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                {browserLinkHref && browserLinkText && (
                  <tr>
                    <td style={{ textAlign: 'center' }}>
                      <a href={browserLinkHref} style={browserLinkStyle}>
                        {browserLinkText}
                      </a>
                    </td>
                  </tr>
                )}
                {logo && (
                  <tr>
                    <td style={{ padding: '20px 0', textAlign: 'center' }}>
                      <a href={logo.href || '#'} target="_blank" rel="noopener noreferrer">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width || 60}
                          style={{
                            border: 0,
                            display: 'block',
                            margin: '0 auto',
                            height: 'auto',
                            maxWidth: '100%',
                            filter: logo.filter || undefined,
                          }}
                        />
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
