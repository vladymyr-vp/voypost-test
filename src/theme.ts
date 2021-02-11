import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: 2,
  overrides: {

    MuiInputAdornment: {
      root: {
          display: 'block',
          position: 'absolute',
          right: 5,
          bottom: 50,
      }
    },
    MuiButton: {
      root: {
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        boxShadow: '0',
        textTransform: 'inherit',
        backgroundColor: '#6D9B12',
        boxSizing: 'border-box'
      },
      label: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '19px',
      },
      outlinedPrimary: {
        color: '#FFF',
        backgroundColor: '#6D9B12',
           '&:hover': {
          backgroundColor: 'green'
        }
      },
      containedPrimary: {
        backgroundColor: '#6D9B12',
        // padding: '16px 38px',
       
        boxShadow: '0',
      },
      containedSecondary: {
        padding: '16px 38px',
        backgroundColor: '#4285F4',
      },
       outlinedSecondary: {
        padding: '16px 38px',
         backgroundColor: '#4285F4',
        color: '#FFF'
      },
      outlined: {
        backgroundColor: '#e0e0e0', color: 'rgba(0, 0, 0, 0.87)',
     
      },
      contained: {padding: '16px 38px', boxShadow: '0'},
      containedSizeLarge: {
        padding: '16px 50px'
      },
      containedSizeSmall: {
        padding: '10px 32px',
      },
      outlinedSizeLarge: {
        padding: '16px 100px',
        outline: 'none',
        border: 'none',
      },
        

    },
    MuiInputBase: {
      root: {
          padding: 0,
          '&$ input:focus': {
          borderColor: '#6D9B12',
          borderWidth: '1px',
          borderStyle: 'solid'
        },
          
      },
      input: {
            borderColor: 'transparent',
            borderWidth: '1px',
            borderStyle: 'solid',
            padding: '25px 354px 25px 14px', boxSizing: 'border-box',
       '&:focus': {
         borderRadius: '6px',
         borderColor: '#6D9B12',
         borderWidth: '1px',
         borderStyle: 'solid'
        },
         '&:invalid': {
          borderRadius: '6px',
          borderColor: '#FF0000',
          borderWidth: '1px'
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
        '& + .MuiFormControl .MuiInputBase input:focus': {
          color: '#6D9B12',
        },
        '& + .MuiFormControl .MuiInputBase input:error': {
          borderRadius: '6px',
          borderColor: '#FF0000',
          borderWidth: '1px'
        },
      },
      formControl: {
        transform: 'none',
        top: '-40%'
      }
    
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
        bottom: -20,
        left: 0
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
      subtitle2: { fontWeight: 300, fontSize: '14px', lineHeight: '16px' },
      body1: { fontWeight: 700, fontSize: '16px', lineHeight: '19px', textAlign: 'center' },
      caption: { fontWeight: 700, fontSize: '32px', lineHeight: '37px', whiteSpace: 'pre-line', margin: '0 0 0 25px' },
      body2: {fontWeight: 700, fontSize: '16px', lineHeight: '19px', textAlign: 'center', margin: '0 0 0 10px' }
    },
  },
});

export default theme;