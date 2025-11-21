import React from 'react';

export interface ProductCardProps {
  imageSrc: string;
  title?: string;
  price?: string;
  description?: string;
  href?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaBackgroundColor?: string;
  ctaTextColor?: string;
  backgroundColor?: string;
  imagePosition?: 'left' | 'right';
  layout?: 'horizontal' | 'vertical' | 'image-only';
  imageBorderRadius?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  description,
  href = '#',
  imageAlt = 'Product',
  ctaText = 'Zobacz produkt',
  ctaBackgroundColor = '#6AA306',
  ctaTextColor = '#121212',
  backgroundColor = '#f9f9fb',
  imagePosition = 'left',
  layout = 'horizontal',
  imageBorderRadius = '2px',
}) => {
  // Common styles
  const containerStyle: React.CSSProperties = {
    background: backgroundColor,
    backgroundColor: backgroundColor,
    borderRadius: '6px',
    padding: '24px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const imageStyle: React.CSSProperties = {
    border: 0,
    borderRadius: imageBorderRadius,
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    height: 'auto',
    width: '100%',
    fontSize: '13px',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    textAlign: 'center',
    color: '#000000',
    padding: '10px 25px',
    margin: 0,
  };

  const priceStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '27px',
    textAlign: 'center',
    color: '#000000',
    padding: '0 25px',
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'center',
    color: '#666666',
    padding: '10px 25px',
    margin: 0,
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    background: ctaBackgroundColor,
    backgroundColor: ctaBackgroundColor,
    color: ctaTextColor,
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '19px',
    margin: 0,
    textDecoration: 'none',
    padding: '6px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };

  // Render text content
  const renderTextContent = () => (
    <>
      {title && <div style={titleStyle}>{title}</div>}
      {price && <div style={priceStyle}>{price}</div>}
      {description && <div style={descriptionStyle}>{description}</div>}
      {ctaText && (
        <div style={{ padding: '10px 25px', textAlign: 'center' }}>
          <a href={href} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            {ctaText}
          </a>
        </div>
      )}
    </>
  );

  // IMAGE ONLY LAYOUT
  if (layout === 'image-only') {
    return (
      <div style={{ ...containerStyle, padding: 0 }}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={imageAlt} style={imageStyle} />
        </a>
      </div>
    );
  }

  // VERTICAL LAYOUT
  if (layout === 'vertical') {
    return (
      <div style={containerStyle}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={imageAlt} style={imageStyle} />
        </a>
        <div style={{ paddingTop: '16px' }}>
          {renderTextContent()}
        </div>
      </div>
    );
  }

  // HORIZONTAL LAYOUT (default)
  const contentStyle: React.CSSProperties = {
    display: 'table',
    width: '100%',
  };

  const rowStyle: React.CSSProperties = {
    display: 'table-row',
  };

  const imageContainerLeftStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    padding: '0 12px 0 0',
  };

  const imageContainerRightStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    padding: '0 0 0 12px',
  };

  const textContainerLeftStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: '0 0 0 12px',
  };

  const textContainerRightStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: '0 12px 0 0',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={rowStyle}>
          {imagePosition === 'left' ? (
            <>
              <div style={imageContainerLeftStyle}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={imageSrc} alt={imageAlt} style={imageStyle} />
                </a>
              </div>
              <div style={textContainerLeftStyle}>
                {renderTextContent()}
              </div>
            </>
          ) : (
            <>
              <div style={textContainerRightStyle}>
                {renderTextContent()}
              </div>
              <div style={imageContainerRightStyle}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={imageSrc} alt={imageAlt} style={imageStyle} />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
