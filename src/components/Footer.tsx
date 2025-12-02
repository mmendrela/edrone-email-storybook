import React from 'react';

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok';
  href: string;
}

export interface CompanyData {
  name?: string;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  address?: string;
  phone?: string;
  email?: string;
  nip?: string;
  regon?: string;
}

export interface Category {
  name: string;
  href: string;
}

export interface FooterProps {
  // Unsubscribe link (required in all variants)
  unsubscribeHref: string;
  unsubscribeText?: string;

  // Company data
  companyData?: CompanyData;

  // Categories
  categories?: Category[];

  // Social media
  socialLinks?: SocialLink[];
  socialStyle?: 'text' | 'icons';
  socialIconSize?: number;

  // Optional slogan
  slogan?: string;

  // Styling
  backgroundColor?: string;
  textColor?: string;
  linkColor?: string;
  padding?: string;
  fontSize?: string;
}

export const Footer: React.FC<FooterProps> = ({
  unsubscribeHref,
  unsubscribeText = 'Wypisz się z newslettera',
  companyData,
  categories,
  socialLinks,
  socialStyle = 'text',
  socialIconSize = 24,
  slogan,
  backgroundColor = '#f5f5f5',
  textColor = '#666666',
  linkColor = '#3498db',
  padding = '30px 20px',
  fontSize = '12px',
}) => {
  const getSocialIconUrl = (platform: string): string => {
    // Using simple, monochrome SVG icons as data URIs for email compatibility
    const icons: { [key: string]: string } = {
      facebook: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg',
      instagram: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg',
      twitter: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/twitter.svg',
      tiktok: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tiktok.svg',
      linkedin: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg',
      youtube: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/youtube.svg',
    };
    return icons[platform] || '';
  };

  const getSocialName = (platform: string): string => {
    const names: { [key: string]: string } = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      youtube: 'YouTube',
      tiktok: 'TikTok',
    };
    return names[platform] || platform;
  };

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
          <td style={{ padding, textAlign: 'center' }}>
            {/* Slogan */}
            {slogan && (
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: textColor,
                  margin: '0 0 16px 0',
                  lineHeight: '1.4',
                }}
              >
                {slogan}
              </p>
            )}

            {/* Categories */}
            {categories && categories.length > 0 && (
              <div style={{ margin: '16px 0' }}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: textColor,
                    margin: '0 0 8px 0',
                  }}
                >
                  Kategorie
                </p>
                <p style={{ margin: '8px 0', lineHeight: '1.8' }}>
                  {categories.map((category, index) => (
                    <React.Fragment key={category.name}>
                      <a
                        href={category.href}
                        style={{
                          color: linkColor,
                          textDecoration: 'none',
                          margin: '0 8px',
                          fontSize,
                        }}
                      >
                        {category.name}
                      </a>
                      {index < categories.length - 1 && (
                        <span style={{ color: textColor, margin: '0 4px' }}>
                          •
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            )}

            {/* Company Data */}
            {companyData && (
              <div style={{ marginBottom: '16px' }}>
                {companyData.logoUrl ? (
                  <p style={{ margin: '0 0 12px 0', lineHeight: 0 }}>
                    <img
                      src={companyData.logoUrl}
                      alt={companyData.logoAlt || 'Logo'}
                      width={companyData.logoWidth || 120}
                      style={{
                        display: 'block',
                        margin: '0 auto',
                        border: 0,
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </p>
                ) : companyData.name ? (
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: textColor,
                      margin: '0 0 8px 0',
                    }}
                  >
                    {companyData.name}
                  </p>
                ) : null}
                {companyData.address && (
                  <p
                    style={{
                      fontSize,
                      color: textColor,
                      margin: '4px 0',
                      lineHeight: '1.5',
                    }}
                  >
                    {companyData.address}
                  </p>
                )}
                {companyData.phone && (
                  <p
                    style={{
                      fontSize,
                      color: textColor,
                      margin: '4px 0',
                      lineHeight: '1.5',
                    }}
                  >
                    Tel: {companyData.phone}
                  </p>
                )}
                {companyData.email && (
                  <p
                    style={{
                      fontSize,
                      color: textColor,
                      margin: '4px 0',
                      lineHeight: '1.5',
                    }}
                  >
                    Email:{' '}
                    <a
                      href={`mailto:${companyData.email}`}
                      style={{
                        color: linkColor,
                        textDecoration: 'none',
                      }}
                    >
                      {companyData.email}
                    </a>
                  </p>
                )}
                {(companyData.nip || companyData.regon) && (
                  <p
                    style={{
                      fontSize: '11px',
                      color: textColor,
                      margin: '8px 0 0 0',
                      lineHeight: '1.5',
                    }}
                  >
                    {companyData.nip && `NIP: ${companyData.nip}`}
                    {companyData.nip && companyData.regon && ' | '}
                    {companyData.regon && `REGON: ${companyData.regon}`}
                  </p>
                )}
              </div>
            )}

            {/* Social Media Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div style={{ margin: '16px 0' }}>
                <p
                  style={{
                    fontSize,
                    color: textColor,
                    margin: '0 0 8px 0',
                  }}
                >
                  Znajdź nas:
                </p>
                <p style={{ margin: '8px 0' }}>
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={link.platform}>
                      {socialStyle === 'icons' ? (
                        <a
                          href={link.href}
                          style={{
                            display: 'inline-block',
                            margin: '0 8px',
                          }}
                        >
                          <img
                            src={getSocialIconUrl(link.platform)}
                            alt={getSocialName(link.platform)}
                            width={socialIconSize}
                            height={socialIconSize}
                            style={{
                              display: 'block',
                              border: 0,
                            }}
                          />
                        </a>
                      ) : (
                        <>
                          <a
                            href={link.href}
                            style={{
                              color: linkColor,
                              textDecoration: 'none',
                              margin: '0 8px',
                              fontSize,
                            }}
                          >
                            {getSocialName(link.platform)}
                          </a>
                          {index < socialLinks.length - 1 && (
                            <span style={{ color: textColor, margin: '0 4px' }}>
                              •
                            </span>
                          )}
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            )}

            {/* Unsubscribe Link */}
            <p style={{ margin: '16px 0 0 0' }}>
              <a
                href={unsubscribeHref}
                style={{
                  color: linkColor,
                  textDecoration: 'underline',
                  fontSize,
                }}
              >
                {unsubscribeText}
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
