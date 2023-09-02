
import { useState } from "react";
const initialValue = {
  name: "",
  email: "",
  phone: "",
  contact: "",
  textarea: "",
};
const ContactForm = () => {
  const [form, setForm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm(initialValue);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className=" max-w-xs mt-10 mx-10 ">
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="shadow-lg px-8 pt-6 pb-8 mb-4 bg-purple-600 w-[400px] "
      >
        <label
          htmlFor="name"
          className=" text-gray-900 font-bold ml-2 mb-1 mt-3"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          className="bg-gray-200 shadow-md border-2 border-red-900 rounded w-full py-2 px-2 text-gray-700 focus:outline-none"
        />
        <label
          htmlFor="email"
          className=" text-gray-900 font-bold ml-2 mb-1 mt-3"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={form.email}
          className="bg-gray-200 shadow-md  border-2 border-red-900 rounded w-full py-2 px-2 text-gray-700 focus:outline-none"
        />
        <label
          htmlFor="phone"
          className=" text-gray-900 font-bold ml-2 mb-1 mt-3"
        >
          Phone
        </label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={form.phone}
          className="bg-gray-200 shadow-md  border-2 border-red-900 rounded w-full p-2 mb-2 text-gray-700  focus:outline-none"
        />
        <label htmlFor="contact" className="  text-gray-900 font-bold">
          May we contact you?
        </label>
        <select
          name="contact"
          value={form.contact}
          className="bg-gray-200 flex flex-col rounded shadow-md  border-2 border-red-900 mt-2 ml-1 mb-2 focus:outline-none"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label
          htmlFor="textarea"
          className=" text-gray-900 font-bold ml-2 mb-1 mt-3"
        >
          Write your message
        </label>
        <textarea
          type="text"
          name="textarea"
          value={form.textarea}
          className="bg-gray-200 shadow-md  border-2 border-red-900 rounded w-full py-2 px-2 text-gray-700 focus:outline-none "
        ></textarea>
        <button
          type="submit"
          className="shadow-lg bg-red-500 hover:bg-red-700 border-2 border-red-900 text-black font-bold py-1 px-4 mt-3 rounded "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
