import React from 'react';
import { Logo, LogoProps } from './Logo';

interface HeaderProps {
  logo?: LogoProps;
  preheaderText?: string;
  browserLinkText?: string;
  browserLinkHref?: string;
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  preheaderText,
  browserLinkText = 'Zobacz w przeglądarce',
  browserLinkHref = '#',
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
    color: '#777777',
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
                    <td style={{ padding: '10px 0' }}>
                      <Logo {...logo} />
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
