import React from 'react';

export interface ProductCardProps {
  imageSrc: string;
  title?: string;
  price?: number;
  salePrice?: number;
  currency?: string;
  badge?: {
    text: string;
    backgroundColor: string;
    textColor: string;
  };
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
  salePrice,
  currency = 'zł',
  badge,
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
  const formatPrice = (value: number | string | undefined) => {
    if (value === undefined || value === null) return '';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '';
    return `${numValue.toFixed(2).replace('.', ',')} ${currency}`;
  };

  // Common styles
  const containerStyle: React.CSSProperties = {
    background: backgroundColor,
    backgroundColor: backgroundColor,
    borderRadius: '6px',
    padding: '24px',
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block', // To contain the absolute badge
  };
  
  const badgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '1',
    zIndex: 1,
    color: badge?.textColor,
    backgroundColor: badge?.backgroundColor,
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

  const priceContainerStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    lineHeight: '27px',
    textAlign: 'center',
    color: '#000000',
    padding: '0 25px',
    margin: 0,
  };

  const salePriceStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#e74c3c', // Sale color
    marginRight: '8px',
  };

  const originalPriceStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 400,
    color: '#666666',
    textDecoration: 'line-through',
  };
  
  const regularPriceStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
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
      
      {(price || salePrice) && (
        <div style={priceContainerStyle}>
          {salePrice ? (
            <>
              <span style={salePriceStyle}>{formatPrice(salePrice)}</span>
              {price && <span style={originalPriceStyle}>{formatPrice(price)}</span>}
            </>
          ) : price ? (
            <span style={regularPriceStyle}>{formatPrice(price)}</span>
          ) : null}
        </div>
      )}

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

  const renderImageWithBadge = () => (
    <div style={imageContainerStyle}>
      {badge && <div style={badgeStyle}>{badge.text}</div>}
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={imageAlt} style={imageStyle} />
      </a>
    </div>
  );


  // IMAGE ONLY LAYOUT
  if (layout === 'image-only') {
    return (
      <div style={{ ...containerStyle, padding: 0 }}>
        {renderImageWithBadge()}
      </div>
    );
  }

  // VERTICAL LAYOUT
  if (layout === 'vertical') {
    return (
      <div style={containerStyle}>
        {renderImageWithBadge()}
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

  const imageCellLeftStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    padding: '0 12px 0 0',
  };

  const imageCellRightStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    padding: '0 0 0 12px',
  };

  const textCellLeftStyle: React.CSSProperties = {
    display: 'table-cell',
    width: '50%',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: '0 0 0 12px',
  };

  const textCellRightStyle: React.CSSProperties = {
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
              <div style={imageCellLeftStyle}>
                {renderImageWithBadge()}
              </div>
              <div style={textCellLeftStyle}>
                {renderTextContent()}
              </div>
            </>
          ) : (
            <>
              <div style={textCellRightStyle}>
                {renderTextContent()}
              </div>
              <div style={imageCellRightStyle}>
                {renderImageWithBadge()}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
