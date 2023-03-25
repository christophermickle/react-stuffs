import { FormEvent } from 'react'
import Card from '../UI/Card'

const AddUser = (props) => {
  const addUserHandler = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <Card>
      <form
        onSubmit={addUserHandler}
        className="py-[1rem] px-[1.5rem] tracking-wider text-lg">
        <label className="block font-bold mb-[0.5rem]" htmlFor="username">
          <span className="">Username</span>
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          className="my-[2rem] mx-auto p-[1rem] w-[90%] max-w[40rem] font-[inherit]  block text-xl border-blue-800 border-[1px solid] p[0.15rem] mb-[0.5rem] focus:outline-none border-[#4f005f] rounded-md shadow-md focus:outline-8 focus:outline-blue-400 focus:outline-offset-8 focus:outline-solid "
        />
        <label htmlFor="age" className="block font-bold mb-[0.5rem]">
          Age (years)
        </label>
        <input
          id="age"
          type="number"
          placeholder="e.g. 28"
          className="my-[2rem] mx-auto p-[1rem] w-[90%] max-w[40rem] font-[inherit] block  border-blue-800 border-[1px solid] p[0.15rem] mb-[0.5rem] focus:outline-none border-[#4f005f] shadow-md rounded-md    focus:outline-blue-400 focus:outline-8 focus:outline-offset-8 focus:outline-solid "
        />
        <button
          type="submit"
          className="inline-block border-blue-300 shadow-md mt-4 text-md font-bold text-gray-900 border-solid border-[2px] py-2 px-4 rounded-[100vmax] hover:bg-slate-800 hover:text-slate-200 hover:border-blue-50 hover:scale-125 ease-in-out focus:outline-none focus:outline-blue-400 focus:outline-8 focus:outline-offset-4 focus:outline-solid focus:bg-slate-800 focus:text-slate-200 tracking-wider">
          Add user
        </button>
      </form>
    </Card>
  )
}

export default AddUser
