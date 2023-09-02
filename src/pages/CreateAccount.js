import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "../components/TextField";
import SubHeader from "../SubHeader";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  username: yup.string().min(8, "Username must be at least 8 characters"),
  email: yup.string().email("Enter a valid email in the example@abc.com  "),
  password: yup
    .string()
    .min(8)
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
      "Minimum eight characters, at least one letter and one number "
    ),
  confirmPassword: yup
    .string()
    .matches("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$", "Passwords do not match!"),
});

const CreateAccount = () => {
 
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount:true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
     <SubHeader/>
    <div className=" max-w-md m-10 container-fluid">
      <form
        onSubmit={formik.handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-purple-600 "
      >
        <h5 className="text-center pb-2 font-serif border-b-4 border-red-600 ">Create your account</h5>
       <TextField  label={"username"} type="text" formik={formik} />
       <TextField label={"email"} type="email" formik={formik}/>
       <TextField label={"password"} type="password" formik={formik}/>
       <TextField label= {"confirm password"} type="password" formik={formik}/>
        <button
          type="submit" disabled={!formik.isValid}
          className="bg-blue-800 hover:bg-red-800  text-white w-full  font-serif p-2 mr-2 mt-3"
        >
          Create account
        </button>
      </form>
    </div>
  
    </>
  );  
};

export default CreateAccount;
