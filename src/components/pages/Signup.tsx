import React from 'react';
import * as yup from 'yup';

import Box from '../Box';
import ButtonEl from '../Button/Button';
import TextFieldEl from '../TextField/TextField';
import TypographyEl from '../Typography/Typography';
import { Formik, Field, Form } from 'formik';

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

const Signup = () => {
  //   const [name, setName] = React.useState('');
  //   const [email, setEmail] = React.useState('');
  //   const [password, setPassword] = React.useState('');
  //   const [toggle, setToggle] = React.useState(false);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     switch (e.target.id) {
  //       case 'name':
  //         setName(e.target.value);
  //         break;

  //       case 'email':
  //         setEmail(e.target.value);
  //         break;

  //       case 'password':
  //         setPassword(e.target.value);
  //         break;

  //       case 'toggle':
  //         setToggle(state => !state);
  //         break;

  //       default:
  //         return;
  //     }
  //   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
  //     e?.preventDefault();
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //     console.log(name, email, password);
  //   };

  return (
    <Box mb={1}>
      <TypographyEl
        variant="h2"
        text="Sign up to set your brand up
for success"
      />

      <ButtonEl
        variant="contained"
        size="large"
        color="secondary"
        text="Sign up with Google"
      />
      <ButtonEl
        variant="contained"
        size="large"
        color="default"
        text="Sign up with Microsoft"
      />

      <Box mb={2}>
        <p>or</p>
      </Box>
      <Box mb={3}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            toggle: false,
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
                  mb={10}
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
                  mb={25}
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
                  mb={25}
                  onChange={handleChange}
                  id="password"
                  value={values.password}
                />
                <div>
                  <label id="checkboxLabel">
                    <Field
                      type="checkbox"
                      name="checked"
                      checked={values.toggle}
                      id="toggle"
                      onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (
                          e.currentTarget.id === 'toggle' ||
                          e.currentTarget.id === 'checkboxLabel'
                        ) {
                          values.toggle = !values.toggle;
                        }
                      }}
                    />
                    Creating an account means you’re okay with our{' '}
                    <a href="/" target="_blank">
                      Terms of Service
                    </a>
                    ,{' '}
                    <a href="/" target="_blank">
                      Privacy Policy
                    </a>
                    , and our default{' '}
                    <a href="/" target="_blank">
                      Notification Settings
                    </a>
                    .
                  </label>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <ButtonEl
                    variant="outlined"
                    size="large"
                    color="primary"
                    text="Sign Up"
                    onClick={handleSubmit}
                    disabled={
                      !values.toggle ||
                      !values.name ||
                      !values.email ||
                      !values.password ||
                      !isValid
                    }
                  />
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
