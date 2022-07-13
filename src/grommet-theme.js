const baselineFontSizes = [
  18, // text,
  30, // l1,
  24, // l2,
  21, // l3,
  18,
];

const sizeScales = new Map([
  ['small', 0.9],
  ['medium', 1],
  ['large', 1.2],
  ['xlarge', 1.333],
]);

function fontSize(level, size) {
  return {
    size: `${baselineFontSizes[level] * sizeScales.get(size)}px`,
    height: '125%',
    maxWidth: '100%',
  };
}

const headingFonts = new Map([
  [
    1,
    {
      family:
        '"San Francisco Display Black", "Helvetica Neue", "Helvetica", sans-serif',
    },
  ],
]);

const theme = {
  name: 'my theme',
  rounding: 4,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      stripe: {
        dark: 'rgba(0,48,204,5%)',
        light: 'rgba(18,83,220, 5%)',
      },
      brand: {
        dark: '#0030cc',
        light: '#1253dc',
      },
      'button-danger': {
        dark: '#990000',
        light: '#ff0000',
      },
      background: {
        dark: '#111111',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE',
      },
      'background-front': {
        dark: '#222222',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111',
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        dark: '#444444',
        light: '#CCCCCC',
      },

      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#a82c2c',
      'status-warning': '#FFAA15',
      'status-ok': '#008658',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
      'section-head': '#44000c',
    },
    font: {
      family: '"San Francisco" ,"Helvetica Neue", Helvetica, sans-serif',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  tip: {
    content: {
      background: {
        color: 'background',
      },
      elevation: 'none',
      round: false,
    },
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
  },
  heading: {
    font: {
      family: 'San Francisco Display',
      height: '120%',
    },
    level: [1, 2, 3, 4, 5].reduce((memo, level) => ({
        ...memo,
        [level]: {
          font: headingFonts.has(level) ? headingFonts.get(level) : {},
          small: fontSize(level, 'small'),
          medium: fontSize(level, 'medium'),
          large: fontSize(level, 'large'),
          xlarge: fontSize(level, 'xlarge'),
        },
      }), {}),
  },
  paragraph: 'small,medium,large,xlarge'.split(',').reduce((memo, size) => ({ ...memo, [size]: fontSize(0, size) }), {}),
  text: 'small,medium,large,xlarge'.split(',').reduce((memo, size) => ({ ...memo, [size]: fontSize(0, size) }), {}),
  breakpoints: {
    small: {
      value: 768,
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: '4px',
        large: '6px',
        xlarge: '12px',
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        xxsmall: '2px',
        xsmall: '3px',
        small: '6px',
        medium: '12px',
        large: '24px',
        xlarge: '48px',
      },
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%',
      },
    },
    medium: {
      value: 1024,
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%',
      },
    },
    large: {
      value: 1200,
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%',
      },
    },
    xlarge: {
      value: 1536,
    },
  },
  button: {
    border: {
      radius: '3px',
      width: '1px',
    },
    size: {
      small: {
        border: {
          radius: '2px',
        },
      },
    },
  },
};

export default theme;
