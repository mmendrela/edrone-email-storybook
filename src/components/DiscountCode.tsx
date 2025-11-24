import React from 'react';

export interface DiscountCodeProps {
  code: string;
  title?: string;
  description?: string;
  validUntil?: string;
  discountAmount?: string;
  backgroundColor?: string;
  codeBackgroundColor?: string;
  codeTextColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  borderColor?: string;
  style?: 'default' | 'outlined' | 'gradient' | 'minimal' | 'bold';
  showCopyHint?: boolean;
}

export const DiscountCode: React.FC<DiscountCodeProps> = ({
  code,
  title,
  description,
  validUntil,
  discountAmount,
  backgroundColor = '#f9f9fb',
  codeBackgroundColor = '#ffffff',
  codeTextColor = '#000000',
  titleColor = '#000000',
  descriptionColor = '#666666',
  borderColor = '#e0e0e0',
  style = 'default',
  showCopyHint = true,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    borderRadius: '8px',
    padding: '32px 24px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 700,
    color: titleColor,
    margin: '0 0 12px 0',
    lineHeight: '1.3',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 400,
    color: descriptionColor,
    margin: '0 0 20px 0',
    lineHeight: '1.5',
  };

  const discountAmountStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 700,
    color: titleColor,
    margin: '0 0 16px 0',
    lineHeight: '1',
  };

  // Style variants for the code box
  const getCodeBoxStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-block',
      padding: '16px 32px',
      margin: '16px 0',
      fontSize: '24px',
      fontWeight: 700,
      letterSpacing: '2px',
      color: codeTextColor,
      fontFamily: 'Courier New, monospace',
    };

    switch (style) {
      case 'outlined':
        return {
          ...baseStyle,
          border: `2px dashed ${borderColor}`,
          borderRadius: '8px',
          backgroundColor: codeBackgroundColor,
        };
      case 'gradient':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          color: '#ffffff',
        };
      case 'minimal':
        return {
          ...baseStyle,
          backgroundColor: codeBackgroundColor,
          borderRadius: '4px',
          fontSize: '20px',
          padding: '12px 24px',
        };
      case 'bold':
        return {
          ...baseStyle,
          backgroundColor: '#000000',
          color: '#ffffff',
          borderRadius: '8px',
          border: `3px solid ${borderColor}`,
        };
      default: // 'default'
        return {
          ...baseStyle,
          backgroundColor: codeBackgroundColor,
          border: `2px solid ${borderColor}`,
          borderRadius: '8px',
        };
    }
  };

  const copyHintStyle: React.CSSProperties = {
    fontSize: '12px',
    color: descriptionColor,
    margin: '8px 0 0 0',
    fontStyle: 'italic',
  };

  const validUntilStyle: React.CSSProperties = {
    fontSize: '13px',
    color: descriptionColor,
    margin: '16px 0 0 0',
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      {discountAmount && <div style={discountAmountStyle}>{discountAmount}</div>}
      {title && <h2 style={titleStyle}>{title}</h2>}
      {description && <p style={descriptionStyle}>{description}</p>}

      <div style={{ margin: '20px 0' }}>
        <div style={getCodeBoxStyle()}>{code}</div>
        {showCopyHint && (
          <p style={copyHintStyle}>Kliknij, aby skopiować kod</p>
        )}
      </div>

      {validUntil && (
        <p style={validUntilStyle}>Ważny do: {validUntil}</p>
      )}
    </div>
  );
};
