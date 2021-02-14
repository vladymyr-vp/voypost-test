import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  red: '#FF0000',
  white: '#FFFFFF',
  green: '#6D9B12',
  blue: '#4285F4',
  gray: '#e0e0e0'
}

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiInputAdornment: {
      root: {
          display: 'block',
          position: 'absolute',
          right: -280,
          bottom: 50,
      }
    },
    MuiButton: {
      root: {
        color: colors.white,
        border: 'none',
        borderRadius: '6px',
        boxShadow: '0',
        textTransform: 'inherit',
        backgroundColor: colors.green,
        boxSizing: 'border-box',
      },
  
      label: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '19px',
      },
      outlinedPrimary: {
        color: '#FFF',
        backgroundColor: colors.green,
           '&:hover': {
          backgroundColor: 'green'
        }
      },
      containedPrimary: {
        backgroundColor: colors.green,
        boxShadow: '0',
      },
      containedSecondary: {
        padding: defaultTheme.spacing(2, 5),
        backgroundColor: colors.blue,
      },
       outlinedSecondary: {
        padding: defaultTheme.spacing(2, 5),
         backgroundColor: colors.blue,
        color: '#FFF'
      },
      outlined: {
        backgroundColor: colors.gray, opacity: '0.87',
     
      },
      contained: {padding: defaultTheme.spacing(2, 5), boxShadow: '0'},
      containedSizeLarge: {
        padding: defaultTheme.spacing(2, 6.25)
      },
   
      containedSizeSmall: {
        padding: defaultTheme.spacing(1.25, 4),
      },
      outlinedSizeLarge: {
        padding: defaultTheme.spacing(2, 12.5),
        outline: 'none',
        border: 'none',
      },
        

    },
    MuiInputBase: {
      root: {
          padding: 0,
      },
          
      input: {
        background: '#EFEFEF',
        borderColor: 'transparent',
        borderWidth: '1px',
        borderRadius: '6px',
        borderStyle: 'solid',
        padding: defaultTheme.spacing(3.125, 44.25, 3.125, 1.75), boxSizing: 'border-box',
          '&:focus': {
          borderColor: colors.green,
          borderWidth: '1px',
          borderStyle: 'solid',
        }, 
          '&:invalid': {
          borderColor: colors.red,
          borderWidth: '1px',
          borderStyle: 'solid',
        },
          '&:invalid label': {
          color: colors.red,
        },
      },
    
    },
    MuiFormControl: {
      root: {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 900,
        fontSize: '14px',
        lineHeight: '1.17',
        disableAnimation: true,
        color: '#000000',
        invalid: {
          color: colors.red
        }
      },
      formControl: {
        transform: 'none',
        top: '-10%'
      },
    },
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
        color: colors.green
        },
          invalid: {
          color: colors.red
        }
      },
    },
    MuiFormHelperText: {
      root: {
        display: 'block',
        color: '#FF0000',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '1.29',
        position: 'absolute',
        bottom: -25,
        left: 5
      },
    },
    MuiTextField: {
      root: {
        borderRadius: '6px',
        border: 'none',
      },
    },
    MuiTypography: {
      root: {
        display: 'block',
        width: '100%',
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
      subtitle2: { fontWeight: 300, fontSize: '14px', lineHeight: '16px' },
      body1: { fontWeight: 700, fontSize: '16px', lineHeight: '19px', textAlign: 'center' },
      caption: { fontWeight: 700, fontSize: '32px', lineHeight: '37px', whiteSpace: 'pre-line', margin: defaultTheme.spacing(0, 0, 0, 3.125) },
      body2: {fontWeight: 700, fontSize: '16px', lineHeight: '19px', textAlign: 'center', margin: defaultTheme.spacing(0, 0, 0, 1.25) }
    },
  },
});

export default theme;