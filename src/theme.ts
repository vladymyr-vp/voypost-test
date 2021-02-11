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
          '&$ input:focus': {
            // borderColor: '#6D9B12',
            // borderWidth: '1px',
            // borderStyle: 'solid',
            // overflow: 'hidden',
            // borderRadius: 6,
            // backgroundColor: '#EFEFEF',
        },
          
      },
          input: {
            padding: '25px 354px 25px 14px', boxSizing: 'border-box',
            borderStyle: 'solid',
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
        '& + .MuiFormControl .MuiInputBase-input:focus': {
        color: '#6D9B12'
      }
      },
      formControl: {
        transform: 'none',
        top: '-30%'
      },
      error: {
        '& + .MuiFormControl .MuiInputBase input': {
          borderRadius: '6px',
          borderColor: '#FF0000',
          borderWidth: '1px'
        }
      }
    },
    MuiFormHelperText: {
      root: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '1.29',
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