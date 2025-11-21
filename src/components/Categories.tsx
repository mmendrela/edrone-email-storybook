import React from 'react';

export interface CategoryItem {
  label: string;
  href: string;
}

export interface CategoriesProps {
  categories: CategoryItem[];
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string | number;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: string;
  separator?: string;
  separatorColor?: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  backgroundColor = '#ffffff',
  color = '#000000',
  hoverColor,
  padding = '15px 25px',
  fontSize = '13px',
  fontWeight = '500',
  textAlign = 'center',
  textTransform = 'uppercase',
  letterSpacing = '1px',
  separator = '|',
  separatorColor,
}) => {
  const containerStyle: React.CSSProperties = {
    margin: '0px auto',
    maxWidth: '600px',
    backgroundColor,
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize,
    fontWeight,
    color,
    textTransform: textTransform as any,
    letterSpacing,
    textDecoration: 'none',
    margin: '0 8px',
  };

  const separatorStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize,
    color: separatorColor || color,
    opacity: separatorColor ? 1 : 0.3,
    margin: '0 8px',
  };

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%', backgroundColor }}>
        <tbody>
          <tr>
            <td style={{ padding }}>
              <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td align={textAlign} style={{ fontSize: '0px', wordBreak: 'break-word' }}>
                      {categories.map((category, index) => (
                        <React.Fragment key={index}>
                          <a
                            href={category.href}
                            style={linkStyle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {category.label}
                          </a>
                          {index < categories.length - 1 && separator && (
                            <span style={separatorStyle}>{separator}</span>
                          )}
                        </React.Fragment>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
