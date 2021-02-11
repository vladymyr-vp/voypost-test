import React from 'react';
import Box from '../Box';
import ButtonEl from '../Button/Button';
import TextFieldEl from '../TextField/TextField';
import TypographyEl from '../Typography/Typography';
import { Formik, Field, Form } from 'formik';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'name':
        setName(e.target.value);
        break;

      case 'email':
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    console.log(name, email, password);
  };

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
          initialValues={{ email: email, password: password, name: name }}
          validate={values => {
            const errors = {
              email: '',
            };
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <TextFieldEl
              label="Full Name"
              mb={10}
              onChange={handleChange}
              id="name"
              value={name}
              type="name"
              name="name"
            />
            <TextFieldEl
              label="Email Address"
              type="email"
              mb={25}
              onChange={handleChange}
              id="email"
              name="email"
              value={email}
            />
            <TextFieldEl
              label="Password (8 characters)"
              helpText="Please input your password! The password must be at least 8 characters!"
              type="password"
              name="password"
              mb={25}
              onChange={handleChange}
              id="password"
              value={password}
            />
            <div>
              <label>
                <Field type="checkbox" name="checked" value="rules" />
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
              />
            </div>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Signup;
