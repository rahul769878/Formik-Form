import React from 'react';
import { Formik, Field, Form } from 'formik';

const Basic = () => {
    return <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        isactive: false,
        colors: ''
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
        <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor='checkbox'>Check Box</label>
        <Field type="checkbox" name="isactive"/>
        <label htmlFor="select">Colors</label>
        <Field name="colors" as="select">
         <option value="red">Red</option>
         <option value="blue">Blue</option>
         <option value="green">Green</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
}


export default Basic;