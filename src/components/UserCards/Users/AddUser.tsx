import { FormEvent } from "react";
import Card from "../UI/Card";

const AddUser = props => {
    const addUserHandler = (event:FormEvent) => {
        event.preventDefault();
    };

  return (
    <Card>
    <form onSubmit={addUserHandler} className="py-[1rem] px-[1.5rem]">
        <label  className="block font-bold mb-[0.5rem]" htmlFor="username">Username</label>
        <input id="username" type="text" className="my-[2rem] mx-auto p-[1rem] w-[90%] max-w[40rem] font-[inherit]  block w-[100%] border-blue-800 border-[1px solid] p[0.15rem] mb-[0.5rem] focus:outline-none border-[#4f005f]"/>
        <label htmlFor="age" className="block font-bold mb-[0.5rem]" >Age (years)</label>
        <input id="age" type="number" className="my-[2rem] mx-auto p-[1rem] w-[90%] max-w[40rem] font-[inherit] block w-[100%] border-blue-800 border-[1px solid] p[0.15rem] mb-[0.5rem] focus:outline-none border-[#4f005f]"/>
        <button type="submit" className="inline-block border-blue-300 shadow-md mt-4 text-md font-bold text-gray-900 border-solid border-[2px] py-2 px-4 rounded-[100vmax] hover:bg-slate-800 hover:text-slate-200">Add user</button>
    </form>
    </Card>
  )
}

export default AddUser