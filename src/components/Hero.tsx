import React from 'react';

export interface HeroCTA {
  text: string;
  href: string;
  backgroundColor?: string;
  color?: string;
}

export interface HeroProps {
  src: string;
  alt?: string;
  href?: string;
  width?: number;
  backgroundColor?: string;

  // Layout options
  layout?: 'image-only' | 'overlay' | 'text-below' | 'split' | 'badge' | 'gradient' | 'compact-center';

  // Text content
  title?: string;
  description?: string;
  titleColor?: string;
  descriptionColor?: string;

  // CTA options
  ctaText?: string;
  ctaHref?: string;
  ctaBackgroundColor?: string;
  ctaTextColor?: string;
  multipleCtas?: HeroCTA[];

  // Overlay options
  overlayColor?: string;
  overlayOpacity?: number;

  // Text positioning
  textAlign?: 'left' | 'center' | 'right';
  textVerticalAlign?: 'top' | 'middle' | 'bottom';

  // Badge options
  badgeText?: string;
  badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  badgeBackgroundColor?: string;
  badgeTextColor?: string;

  // Split layout
  splitImagePosition?: 'left' | 'right';
  splitBackgroundColor?: string;
}

export const Hero: React.FC<HeroProps> = ({
  src,
  alt = 'Product Banner',
  href,
  width = 600,
  backgroundColor = '#fff',
  layout = 'image-only',
  title,
  description,
  titleColor = '#ffffff',
  descriptionColor = '#ffffff',
  ctaText,
  ctaHref,
  ctaBackgroundColor = '#3498db',
  ctaTextColor = '#ffffff',
  multipleCtas,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  overlayOpacity = 0.4,
  textAlign = 'center',
  textVerticalAlign = 'middle',
  badgeText,
  badgePosition = 'top-right',
  badgeBackgroundColor = '#e74c3c',
  badgeTextColor = '#ffffff',
  splitImagePosition = 'left',
  splitBackgroundColor = '#f5f5f5',
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: `${width}px`,
    backgroundColor,
  };

  const imageStyle: React.CSSProperties = {
    border: 0,
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    height: 'auto',
    width: '100%',
    fontSize: '13px',
  };

  const renderImageOnly = () => {
    const imageContent = (
      <img alt={alt} height="auto" src={src} width={width} style={imageStyle} />
    );

    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '0px', padding: '0px', wordBreak: 'break-word' }}>
              <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderCollapse: 'collapse', borderSpacing: '0px' }}>
                <tbody>
                  <tr>
                    <td style={{ width: `${width}px`, position: 'relative' }}>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {imageContent}
                        </a>
                      ) : imageContent}
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

  const renderBadge = () => {
    if (!badgeText) return null;

    const badgePositionStyles: Record<string, React.CSSProperties> = {
      'top-left': { top: '20px', left: '20px' },
      'top-right': { top: '20px', right: '20px' },
      'bottom-left': { bottom: '20px', left: '20px' },
      'bottom-right': { bottom: '20px', right: '20px' },
    };

    const badgeStyle: React.CSSProperties = {
      position: 'absolute',
      backgroundColor: badgeBackgroundColor,
      color: badgeTextColor,
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: '700',
      borderRadius: '4px',
      ...badgePositionStyles[badgePosition],
    };

    return (
      <div style={badgeStyle}>
        {badgeText}
      </div>
    );
  };

  const renderWithBadge = () => {
    const imageContent = <img alt={alt} height="auto" src={src} width={width} style={imageStyle} />;

    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '0px', padding: '0px', wordBreak: 'break-word' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {imageContent}
                  </a>
                ) : imageContent}
                {renderBadge()}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderTextContent = () => {
    const ctas = multipleCtas || (ctaText ? [{ text: ctaText, href: ctaHref || '#', backgroundColor: ctaBackgroundColor, color: ctaTextColor }] : []);

    return (
      <>
        {title && (
          <div style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '1.3',
            color: titleColor,
            margin: '0 0 12px 0',
            textAlign: textAlign,
          }}>
            {title}
          </div>
        )}
        {description && (
          <div style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '1.5',
            color: descriptionColor,
            margin: '0 0 20px 0',
            textAlign: textAlign,
          }}>
            {description}
          </div>
        )}
        {ctas.length > 0 && (
          <div style={{ textAlign: textAlign }}>
            {ctas.map((cta, index) => (
              <a
                key={index}
                href={cta.href}
                style={{
                  display: 'inline-block',
                  backgroundColor: cta.backgroundColor || ctaBackgroundColor,
                  color: cta.color || ctaTextColor,
                  padding: '12px 30px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: index > 0 ? '0 0 0 10px' : '0',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                }}
              >
                {cta.text}
              </a>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderOverlay = () => {
    const verticalPadding: Record<string, string> = {
      top: '40px 25px 100px 25px',
      middle: '80px 25px',
      bottom: '100px 25px 40px 25px',
    };

    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '0px', padding: '0px', wordBreak: 'break-word', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img alt={alt} height="auto" src={src} width={width} style={imageStyle} />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: overlayColor,
                  display: 'table',
                  width: '100%',
                  height: '100%',
                }}>
                  <div style={{
                    display: 'table-cell',
                    verticalAlign: textVerticalAlign,
                    padding: verticalPadding[textVerticalAlign],
                  }}>
                    {renderTextContent()}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderTextBelow = () => {
    const imageContent = <img alt={alt} height="auto" src={src} width={width} style={imageStyle} />;

    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '0px', padding: '0px', wordBreak: 'break-word' }}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {imageContent}
                </a>
              ) : imageContent}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '30px 25px' }}>
              <div style={{ color: titleColor === '#ffffff' ? '#000000' : titleColor }}>
                {renderTextContent()}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderSplit = () => {
    const isImageLeft = splitImagePosition === 'left';

    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%', backgroundColor: splitBackgroundColor }}>
        <tbody>
          <tr>
            {isImageLeft && (
              <td style={{ width: '50%', verticalAlign: 'middle' }}>
                <img alt={alt} src={src} style={{ ...imageStyle, width: '100%' }} />
              </td>
            )}
            <td style={{ width: '50%', padding: '30px 25px', verticalAlign: 'middle' }}>
              <div style={{ color: titleColor === '#ffffff' ? '#000000' : titleColor }}>
                {renderTextContent()}
              </div>
            </td>
            {!isImageLeft && (
              <td style={{ width: '50%', verticalAlign: 'middle' }}>
                <img alt={alt} src={src} style={{ ...imageStyle, width: '100%' }} />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    );
  };

  const renderGradient = () => {
    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '0px', padding: '0px', wordBreak: 'break-word', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img alt={alt} height="auto" src={src} width={width} style={imageStyle} />
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                  padding: '60px 25px 30px 25px',
                }}>
                  {renderTextContent()}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderCompactCenter = () => {
    return (
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '0px', padding: '0px', wordBreak: 'break-word', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img alt={alt} height="auto" src={src} width={width} style={{ ...imageStyle, filter: 'brightness(0.6)' }} />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  textAlign: 'center',
                }}>
                  {renderTextContent()}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case 'overlay':
        return renderOverlay();
      case 'text-below':
        return renderTextBelow();
      case 'split':
        return renderSplit();
      case 'badge':
        return renderWithBadge();
      case 'gradient':
        return renderGradient();
      case 'compact-center':
        return renderCompactCenter();
      default:
        return renderImageOnly();
    }
  };

  return (
    <div style={containerStyle}>
      {renderLayout()}
    </div>
  );
};
