export interface EmailTheme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    textLight: string;
    background: string;
    backgroundAlt: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      base: string;
      large: string;
      xlarge: string;
    };
    fontWeight: {
      normal: string;
      semibold: string;
      bold: string;
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
}

export const cosyTheme: EmailTheme = {
  name: 'Cosy',
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    text: '#2c3e50',
    textLight: '#7f8c8d',
    background: '#ffffff',
    backgroundAlt: '#f5f5f5',
    border: '#e0e0e0',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    fontSize: {
      small: '12px',
      base: '14px',
      large: '18px',
      xlarge: '24px',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
  },
  spacing: {
    small: '10px',
    medium: '20px',
    large: '30px',
    xlarge: '40px',
  },
  borderRadius: {
    small: '3px',
    medium: '6px',
    large: '12px',
  },
};

export const lookbookTheme: EmailTheme = {
  name: 'Lookbook',
  colors: {
    primary: '#e74c3c',
    secondary: '#f39c12',
    text: '#222222',
    textLight: '#95a5a6',
    background: '#ffffff',
    backgroundAlt: '#fafafa',
    border: '#dddddd',
  },
  typography: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontSize: {
      small: '11px',
      base: '15px',
      large: '20px',
      xlarge: '28px',
    },
    fontWeight: {
      normal: '400',
      semibold: '500',
      bold: '600',
    },
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  borderRadius: {
    small: '0px',
    medium: '2px',
    large: '4px',
  },
};

export const themes = {
  cosy: cosyTheme,
  lookbook: lookbookTheme,
};

export type ThemeName = keyof typeof themes;
