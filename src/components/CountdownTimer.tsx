import React from 'react';

export interface CountdownTimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  boxTextColor?: string;
  boxLabelColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  style?: 'default' | 'bold' | 'minimal' | 'outlined' | 'gradient';
  layout?: 'horizontal' | 'compact';
  showLabels?: boolean;
  showDays?: boolean;
  showSeconds?: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  title = 'Promocja kończy się za:',
  subtitle,
  backgroundColor = '#ffffff',
  boxBackgroundColor = '#000000',
  boxTextColor = '#ffffff',
  boxLabelColor = '#666666',
  titleColor = '#000000',
  subtitleColor = '#666666',
  style = 'default',
  layout = 'horizontal',
  showLabels = true,
  showDays = true,
  showSeconds = true,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor,
    padding: '32px 24px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: titleColor,
    margin: '0 0 8px 0',
    lineHeight: '1.3',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 400,
    color: subtitleColor,
    margin: '0 0 24px 0',
    lineHeight: '1.5',
  };

  const getBoxStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-block',
      padding: layout === 'compact' ? '12px 16px' : '16px 20px',
      margin: '0 8px',
      minWidth: layout === 'compact' ? '60px' : '80px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    };

    switch (style) {
      case 'bold':
        return {
          ...baseStyle,
          backgroundColor: '#000000',
          color: '#ffffff',
          borderRadius: '8px',
          border: '3px solid #ffd403',
        };
      case 'gradient':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff',
          borderRadius: '8px',
        };
      case 'outlined':
        return {
          ...baseStyle,
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '2px solid #000000',
          borderRadius: '4px',
        };
      case 'minimal':
        return {
          ...baseStyle,
          backgroundColor: '#f5f5f5',
          color: '#000000',
          borderRadius: '4px',
        };
      default: // 'default'
        return {
          ...baseStyle,
          backgroundColor: boxBackgroundColor,
          color: boxTextColor,
          borderRadius: '8px',
        };
    }
  };

  const numberStyle: React.CSSProperties = {
    fontSize: layout === 'compact' ? '32px' : '40px',
    fontWeight: 700,
    lineHeight: '1',
    display: 'block',
    marginBottom: showLabels ? '8px' : '0',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: layout === 'compact' ? '11px' : '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: style === 'outlined' || style === 'minimal' ? boxLabelColor : 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1',
  };

  const separatorStyle: React.CSSProperties = {
    display: 'inline-block',
    fontSize: layout === 'compact' ? '32px' : '40px',
    fontWeight: 700,
    color: titleColor,
    margin: '0 4px',
    lineHeight: '1',
  };

  const timeUnits = [
    ...(showDays ? [{ value: days, label: 'Dni', labelEn: 'Days' }] : []),
    { value: hours, label: 'Godz', labelEn: 'Hours' },
    { value: minutes, label: 'Min', labelEn: 'Min' },
    ...(showSeconds ? [{ value: seconds, label: 'Sek', labelEn: 'Sec' }] : []),
  ];

  const formatValue = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div style={containerStyle}>
      {title && <h2 style={titleStyle}>{title}</h2>}
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}

      <div style={{ margin: '20px 0' }}>
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ margin: '0 auto' }}
        >
          <tbody>
            <tr>
              {timeUnits.map((unit, index) => (
                <React.Fragment key={unit.label}>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div style={getBoxStyle()}>
                      <span style={numberStyle}>{formatValue(unit.value)}</span>
                      {showLabels && <span style={labelStyle}>{unit.label}</span>}
                    </div>
                  </td>
                  {index < timeUnits.length - 1 && layout === 'horizontal' && (
                    <td style={{ verticalAlign: 'middle' }}>
                      <span style={separatorStyle}>:</span>
                    </td>
                  )}
                </React.Fragment>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
