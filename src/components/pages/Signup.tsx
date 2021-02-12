import React from 'react';
import * as yup from 'yup';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form } from 'formik';
import Box from '../Box';
import ButtonEl from '../Button/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextFieldEl from '../TextField/TextField';
import TypographyEl from '../Typography/Typography';
import googleIcon from 'images/google.svg';
import microsoftIcon from 'images/microsoft.svg';

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is required'),

  email: yup.string().email().required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(
      8,
      'Please input your password! The password must be at least 8 characters!',
    ),
});

const Signup = (): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setChecked(event.target.checked);
  };

  return (
    <Box mt={19} mr="auto" ml="auto" mb={10}>
      <Box mb={1} display="flex" justifyContent="center" flexWrap="wrap">
        <Box mb={11} display="block">
          <TypographyEl variant="caption">
            <Box>
              Sign up to set your brand up <br />
              for success
            </Box>
          </TypographyEl>
        </Box>
        <Box display="flex" width="100%" justifyContent="center" mb={4.25}>
          <Box mr={1.25}>
            <ButtonEl
              variant="contained"
              size="large"
              color="secondary"
              text="Sign up with Google"
              icon={googleIcon}
            />
          </Box>

          <ButtonEl
            variant="contained"
            size="large"
            color="default"
            text="Sign up with Microsoft"
            icon={microsoftIcon}
          />
        </Box>
      </Box>

      <Box mb={7}>
        <TypographyEl variant="body1">or</TypographyEl>
      </Box>
      <Box mb={1}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {formik => {
            const {
              values,
              errors,
              isValid,
              handleChange,
              handleSubmit,
            } = formik;
            return (
              <Form onSubmit={handleSubmit}>
                <TextFieldEl
                  label="Full Name"
                  mb={6.25}
                  onChange={handleChange}
                  id="name"
                  value={values.name}
                  helpText={errors.name}
                  type="name"
                  name="name"
                />
                <TextFieldEl
                  label="Email Address"
                  type="email"
                  mb={6.25}
                  onChange={handleChange}
                  helpText={errors.email}
                  id="email"
                  name="email"
                  value={values.email}
                />
                <TextFieldEl
                  label="Password (8 characters)"
                  //   helpText="Please input your password! The password must be at least 8 characters!"
                  helpText={errors.password}
                  type="password"
                  name="password"
                  mb={6.25}
                  onChange={handleChange}
                  id="password"
                  value={values.password}
                  showIcon
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    width: '550px',
                    margin: '0 auto',
                  }}
                >
                  <InputLabel
                    id="checkboxLabel"
                    style={{
                      display: 'flex',
                      fontWeight: 300,
                      fontSize: '14px',
                      lineHeight: '18px',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox
                      name="checked"
                      checked={checked}
                      id="toggle"
                      onChange={handleCheckboxChange}
                    />
                    <div>
                      Creating an account means you’re okay with our{' '}
                      <a href="/" target="_blank">
                        Terms of Service,
                      </a>
                      <a href="/" target="_blank">
                        {' '}
                        Privacy Policy,
                      </a>
                      <br /> and our default{' '}
                      <a href="/" target="_blank">
                        Notification Settings.
                      </a>
                    </div>
                  </InputLabel>

                  <div style={{ marginTop: '10px' }}>
                    <ButtonEl
                      variant="outlined"
                      size="large"
                      color="primary"
                      text="Sign Up"
                      onClick={handleSubmit}
                      disabled={
                        !checked ||
                        !values.name ||
                        !values.email ||
                        !values.password ||
                        !isValid
                      }
                    />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default Signup;
