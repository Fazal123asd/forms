import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import './form.css'

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
    //   validate={values => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }} //className={errors.email && touched.email && "error"} 

    validationSchema={yup.object().shape({
        email: yup.string()
        .email()
        .required("Required"),
        password: yup.string()
        .required("No password")
        .min(8,"password is too short")
        .matches(/(?=.*[0-9])/, "password should contain a number")
    })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        console.log(values)
          setSubmitting(false);
        }, 400);
      }}
    >
      {/* {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )} */}


      {props =>{
          const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
          } = props;
          return(
              <form className='form' autoComplete='off' onSubmit={handleSubmit}>
                 <label htmlFor='Email'>Email</label>
                  <input type='text' 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  className={errors.email && touched.email && "error"}
                  value={values.email} 
                  name='email' 
                  placeholder='Email'/>
                  {errors.email && touched.email && (
                    <div className='input-feedback'>{errors.email}</div>
                  )}
                   <label htmlFor='password'>Password</label>
                  <input type='text'className={errors.password && touched.password && "error"} onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' placeholder='password'/>
                  {errors.password && touched.password && (
                    <div className='input-feedback'>{errors.password}</div>
                  )}
                <button type='submit'disabled={isSubmitting}>Submit</button>
              </form>
          )
      }

      }
    </Formik>
  </div>
);

export default Basic;