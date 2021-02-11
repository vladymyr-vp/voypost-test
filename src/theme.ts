import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        boxShadow: '0',
        textTransform: 'inherit',
        backgroundColor: '#6D9B12',
      },
      label: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '19px',
      },
      containedPrimary: {
        backgroundColor: '#6D9B12',
        padding: '16px 38px',
        boxShadow: '0',
      },
      containedSecondary: {
        padding: '16px 38px',
        backgroundColor: '#4285F4',
      },
      contained: {padding: '16px 38px', boxShadow: '0',},
      containedSizeLarge: {
        padding: '16px 107px'
      },
      containedSizeSmall: {
        padding: '10px 32px'
      },
      
    

        // primary: {background: '#6D9B12'},
        // secondary: {background: '#4285F4'},
        // default:{background: '#E5E5E5', color: '#636363'},
        // large: {padding: '16px 107px'},
        // small: {padding: '10px 32px'},
        // medium:{padding: '16px 38px'}
      
      
      
    },
    MuiInputBase: {
      root: {
          padding: 0,
          '&$ input:focused': {
          border: '1px solid #6D9B12',
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: '#EFEFEF',
          '&$focused': {
          backgroundColor: '#fff',
          border: '1px solid #6D9B12',
          },
          '&$:invalid': {
          backgroundColor: '#fff',
          border: '1px solid #FF0000',
          },
        },
      },
      input: {padding: '17px 14px',},
    },
    MuiFormControl: {
      root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0',
          '&$error': {
          backgroundColor: '#fff',
          border: '1px solid #FF0000',
        },
      },
    
    },
    MuiInputLabel: {
      root: {
        disableAnimation: true,
        '&$focused': {
          color: '#6D9B12',
        },
        '&$error': {
          color: '#FF0000',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        '&$focused': {
          color: '#6D9B12',
        },
        '&$error': {
          color: '#FF0000',
        },
      },
    },
    MuiTextField: {
      root: {
        background: '#EFEFEF',
        borderRadius: '6px',
        border: 'none',
      },
    },
    MuiTypography: {
      root: {
        display: 'block',
        width: '100%',
        marginBottom: '24px',
      },
      h1: {
        fontWeight: 900, fontSize: '36px', lineHeight: '42px'
      },
      h2: {fontWeight: 700, fontSize: '32px', lineHeight: '37px'},
      h3: {fontWeight: 500, fontSize: '28px', lineHeight: '33px' },
      h4: {fontWeight: 500, fontSize: '24px', lineHeight: '28px'},
      h5: {fontWeight: 500, fontSize: '18px', lineHeight: '21px'},
      h6: {fontWeight: 700, fontSize: '16px', lineHeight: '19px' },
      subtitle1: { fontWeight: 700, fontSize: '14px', lineHeight: '16px' },
      subtitle2: {fontWeight: 300, fontSize: '14px', lineHeight: '16px'},
    },
  },
});

export default theme;