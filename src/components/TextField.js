import { useId } from "react";


const TextField =({label, type, formik})=>{
    const id = useId();

    return(
        <div className="flex flex-col justify-between">
          <label htmlFor={`${label}-${id}`} className=" text-gray-600 font-serif ml-3 ">
            {label}
          </label>
          <input
            placeholder={label}
            id={`${label}-${id}`}
            className="border border-red-500 m-2  p-2 "
            name={label}
            type={type}
            onChange={formik.handleChange}
          ></input>
          {formik.errors[label] && (
            <p className="text-red-900 ">{formik.errors[label]}</p>
          )}
        </div>
    )
};






export default TextField;
