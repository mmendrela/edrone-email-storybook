import React from 'react';

export interface FeaturedProductGridItem {
  imageSrc: string;
  title?: string;
  price?: string;
  href?: string;
  imageAlt?: string;
}

export interface FeaturedProductGridProps {
  featuredProduct: FeaturedProductGridItem;
  gridProducts: FeaturedProductGridItem[];
  columns?: 2 | 3;
  backgroundColor?: string;
  gap?: string;
  showText?: boolean;
  imageBorderRadius?: string;
}

export const FeaturedProductGrid: React.FC<FeaturedProductGridProps> = ({
  featuredProduct,
  gridProducts,
  columns = 2,
  backgroundColor = '#f9f9fb',
  gap = '16px',
  showText = true,
  imageBorderRadius = '2px',
}) => {
  const containerStyle: React.CSSProperties = {
    background: backgroundColor,
    backgroundColor: backgroundColor,
    borderRadius: '6px',
    padding: '24px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const featuredImageStyle: React.CSSProperties = {
    border: 0,
    borderRadius: imageBorderRadius,
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    height: 'auto',
    width: '100%',
    fontSize: '13px',
  };

  const featuredTitleStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'center',
    color: '#000000',
    padding: '12px 0 4px',
    margin: 0,
  };

  const featuredPriceStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '27px',
    textAlign: 'center',
    color: '#000000',
    padding: '0 0 16px',
    margin: 0,
  };

  const spacerStyle: React.CSSProperties = {
    height: gap,
    fontSize: 0,
    lineHeight: 0,
  };

  const gridStyle: React.CSSProperties = {
    display: 'table',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: gap,
  };

  const rowStyle: React.CSSProperties = {
    display: 'table-row',
  };

  const cellStyle: React.CSSProperties = {
    display: 'table-cell',
    verticalAlign: 'top',
    width: `${100 / columns}%`,
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
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'center',
    color: '#000000',
    padding: '8px 0 4px',
    margin: 0,
  };

  const priceStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '21px',
    textAlign: 'center',
    color: '#000000',
    padding: '0',
    margin: 0,
  };

  // Group grid products into rows
  const rows: FeaturedProductGridItem[][] = [];
  for (let i = 0; i < gridProducts.length; i += columns) {
    rows.push(gridProducts.slice(i, i + columns));
  }

  return (
    <div style={containerStyle}>
      {/* Featured Product */}
      <div>
        <a href={featuredProduct.href || '#'} target="_blank" rel="noopener noreferrer">
          <img
            src={featuredProduct.imageSrc}
            alt={featuredProduct.imageAlt || 'Featured Product'}
            style={featuredImageStyle}
          />
        </a>
        {showText && (
          <>
            {featuredProduct.title && <div style={featuredTitleStyle}>{featuredProduct.title}</div>}
            {featuredProduct.price && <div style={featuredPriceStyle}>{featuredProduct.price}</div>}
          </>
        )}
      </div>

      {/* Spacer between featured and grid */}
      <div style={spacerStyle}></div>

      {/* Grid Products */}
      <div style={gridStyle}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={rowStyle}>
            {row.map((product, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} style={cellStyle}>
                <a href={product.href || '#'} target="_blank" rel="noopener noreferrer">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt || 'Product'}
                    style={imageStyle}
                  />
                </a>
                {showText && (
                  <>
                    {product.title && <div style={titleStyle}>{product.title}</div>}
                    {product.price && <div style={priceStyle}>{product.price}</div>}
                  </>
                )}
              </div>
            ))}
            {/* Fill empty cells if last row is incomplete */}
            {row.length < columns &&
              Array.from({ length: columns - row.length }).map((_, i) => (
                <div key={`empty-${i}`} style={cellStyle} />
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};
