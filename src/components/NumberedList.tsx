import React from 'react';

export interface NumberedListItem {
  title: string;
  description: string;
}

export interface NumberedListProps {
  items: NumberedListItem[];
  backgroundColor?: string;
  numberBackgroundColor?: string;
  numberTextColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  padding?: string;
  numberSize?: string;
  numberFontSize?: string;
  numberFontWeight?: number | string;
  numberBorderRadius?: string;
  numberBorder?: string;
}

export const NumberedList: React.FC<NumberedListProps> = ({
  items,
  backgroundColor = '#f9f9fb',
  numberBackgroundColor = '#ffd403',
  numberTextColor = '#ffffff',
  titleColor = '#000000',
  descriptionColor = '#666666',
  padding = '24px',
  numberSize = '32px',
  numberFontSize = '16px',
  numberFontWeight = 400,
  numberBorderRadius = '9999px',
  numberBorder,
}) => {
  const containerStyle: React.CSSProperties = {
    background: backgroundColor,
    backgroundColor: backgroundColor,
    borderRadius: '6px',
    padding: padding,
    maxWidth: '600px',
    margin: '0 auto',
  };

  const bulletStyle: React.CSSProperties = {
    display: 'inline-block',
    width: numberSize,
    height: numberSize,
    lineHeight: numberSize,
    borderRadius: numberBorderRadius,
    backgroundColor: numberBackgroundColor,
    color: numberTextColor,
    fontWeight: numberFontWeight,
    fontSize: numberFontSize,
    textAlign: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
    ...(numberBorder && { border: numberBorder }),
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'center',
    color: titleColor,
    padding: '0 0 6px 0',
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    color: descriptionColor,
    padding: 0,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
        <tbody>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td align="center" style={{ fontSize: '0px', padding: '0 0 8px 0', wordBreak: 'break-word' }}>
                  <div style={bulletStyle}>
                    {index + 1}
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" style={{ fontSize: '0px', padding: '0 0 6px 0', wordBreak: 'break-word' }}>
                  <div style={titleStyle}>
                    {item.title}
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" style={{ fontSize: '0px', padding: index === items.length - 1 ? '0' : '0 0 16px 0', wordBreak: 'break-word' }}>
                  <div style={descriptionStyle}>
                    {item.description}
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
