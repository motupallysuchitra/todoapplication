import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Formitem.css";


const SignupSchema = Yup.object().shape({
  firstname: Yup.string("Invalid firstname type")
    .required("first name is requored!")
    .min(3, "firstName cannot be less than 3 chars")
    .max(30, "firstName is too long!"),

  lastname: Yup.string("Invalid lastname type")
    .required("last name is requored!")
    .min(3, "lastName cannot be less than 3 chars")
    .max(30, "lastName is too long!"),

  useremail: Yup.string("")
    .required("Email is required")
    .email(" email type is invalid "),
  userpassword: Yup.string()
    .required("userpassword is requored!")
    .min(6, "password needs to be a min of 6 chars")
    .max(12, "password too long!"),

});
export default function FormItem() {

  const [initialFormValues] = useState({
    firstname:"",
    lastname: "",
    useremail: "",
    userpassword: "",
  });
  const handleFormSubmit = async (values) => {
    console.log(values);
    
  };
  return (
    <div className="formitem">
      <h1>Sigh up to this formik form!</h1>
<Formik validationSchema={SignupSchema} initialValues={initialFormValues}onSubmit={handleFormSubmit}>
        {({errors,touched})=>(
        <Form>
          <label className="firstname">
          firstname
          <Field type="text" name="firstname"/>
       </label>
       {errors.firstname && touched.firstname ? <div>{errors.firstname}</div>:null}
          <label className="lastname">
            lastname
            <Field type="text" name="lastname"/>

          </label>
          {errors.lastname && touched.lastname ? <div>{errors.lastname}</div>:null}
          <label className="email">
            Email
            <Field type="email" name="email"/>
          </label>
          {errors.useremail && touched.email ? <div>{errors.useremail}</div>:null}
          <label className="password">
            password
            <Field type="password" name="password"/>
          </label>
          {errors.userpassword && touched.userpassword ? <div>{errors.userpassword}</div>:null}
             <div className="buttons">
          <button className="signup" type="submit">Signup</button>
          </div>
        </Form>
        )}
       </Formik>
      </div>
  )
 }