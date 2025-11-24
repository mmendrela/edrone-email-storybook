import React from 'react';

export interface BenefitItem {
  icon: string; // Font Awesome class (e.g., "fas fa-truck") or emoji
  title: string;
  description?: string;
  iconType?: 'fontawesome' | 'emoji'; // Specify icon type
}

export interface BenefitsGridProps {
  benefits: BenefitItem[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
  itemBackgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  iconColor?: string;
  padding?: string;
  itemPadding?: string;
  textAlign?: 'left' | 'center' | 'right';
  iconSize?: string;
  titleFontSize?: string;
  titleFontWeight?: string | number;
  descriptionFontSize?: string;
  descriptionFontWeight?: string | number;
  spacing?: string;
  borderRadius?: string;
  border?: string;
  titleTextTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  titleLetterSpacing?: string;
}

export const BenefitsGrid: React.FC<BenefitsGridProps> = ({
  benefits,
  columns = 3,
  backgroundColor = '#ffffff',
  itemBackgroundColor = 'transparent',
  titleColor = '#000000',
  descriptionColor = '#666666',
  iconColor = '#000000',
  padding = '40px 25px',
  itemPadding = '20px',
  textAlign = 'center',
  iconSize = '32px',
  titleFontSize = '14px',
  titleFontWeight = '600',
  descriptionFontSize = '13px',
  descriptionFontWeight = '400',
  spacing = '20px',
  borderRadius = '0px',
  border,
  titleTextTransform = 'none',
  titleLetterSpacing = '0px',
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: iconSize,
    color: iconColor,
    lineHeight: '1',
    marginBottom: '16px',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: titleFontSize,
    fontWeight: titleFontWeight,
    color: titleColor,
    margin: '0 0 8px 0',
    textTransform: titleTextTransform as any,
    letterSpacing: titleLetterSpacing,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: descriptionFontSize,
    fontWeight: descriptionFontWeight,
    color: descriptionColor,
    margin: '0',
    lineHeight: '1.5',
  };

  const itemStyle: React.CSSProperties = {
    backgroundColor: itemBackgroundColor,
    padding: itemPadding,
    borderRadius,
    border: border || 'none',
  };

  // Calculate column width percentage
  const columnWidth = `${100 / columns}%`;

  // Group benefits into rows
  const rows: BenefitItem[][] = [];
  for (let i = 0; i < benefits.length; i += columns) {
    rows.push(benefits.slice(i, i + columns));
  }

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%', backgroundColor }}>
        <tbody>
          <tr>
            <td style={{ padding }}>
              <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((benefit, colIndex) => (
                        <td
                          key={colIndex}
                          style={{
                            width: columnWidth,
                            verticalAlign: 'top',
                            paddingBottom: rowIndex < rows.length - 1 ? spacing : '0',
                            paddingRight: colIndex < row.length - 1 ? spacing : '0',
                          }}
                        >
                          <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td style={itemStyle}>
                                  <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
                                    <tbody>
                                      <tr>
                                        <td align={textAlign} style={iconStyle}>
                                          {benefit.iconType === 'fontawesome' ? (
                                            <i className={benefit.icon} style={{ color: iconColor, fontSize: iconSize }}></i>
                                          ) : (
                                            benefit.icon
                                          )}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align={textAlign} style={titleStyle}>
                                          {benefit.title}
                                        </td>
                                      </tr>
                                      {benefit.description && (
                                        <tr>
                                          <td align={textAlign} style={descriptionStyle}>
                                            {benefit.description}
                                          </td>
                                        </tr>
                                      )}
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      ))}
                      {/* Fill empty cells if row is not complete */}
                      {row.length < columns && [...Array(columns - row.length)].map((_, i) => (
                        <td key={`empty-${i}`} style={{ width: columnWidth }}></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
