import { FormEvent, useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import Button from '../UI/Button'
import Card from '../UI/Card'

type uuidv4 = () => string

interface User {
    id: uuidv4| string;
    username: string;
    age: number;
}

const AddUser = (props:any) => {
    const [user, setUser] = useState<User>({id:'',username:'',age:NaN})
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState(NaN)
  const addUserHandler = (event: FormEvent) => {
    event.preventDefault()
    setUser({id: uuidv4(), username:enteredUsername,age:enteredAge})
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
          onChange={(e)=>setEnteredUsername(e.target.value)}
          id="username"
          type="text"
          placeholder="Enter username"
          className="my-[2rem] mx-auto p-[1rem] w-[90%] max-w[40rem] font-[inherit]  block text-[clamp(10px, 1.6em, 2.2em)] border-blue-800 border-[1px solid] p[0.15rem] mb-10 focus:outline-none border-[#4f005f] rounded-md shadow-md focus:outline-8 focus:outline-blue-400 focus:outline-offset-8 focus:outline-solid "
        />
        <label
          htmlFor="age"
          className="block font-bold mb-[0.5rem] text-[clamp(10px, 1.6em, 2.2em)]">
          Age (years)
        </label>
        <input
        onChange={(e)=>setEnteredAge(parseInt(e.target.value))}
          id="age"
          type="number"
          placeholder="e.g. 28"
          className="my-[2rem] mx-auto p-[1rem] w-[90%] max-w[40rem] font-[inherit] block  border-blue-800 border-[1px solid] p[0.15rem] mb-[0.5rem] focus:outline-none border-[#4f005f] shadow-md rounded-md    focus:outline-blue-400 focus:outline-8 focus:outline-offset-8 focus:outline-solid "
        />
        <Button type="submit">Add User</Button>
      </form>
      {user.username && <p>{`Welcome ${user.username} I see that you entered your age as ${user.age} You have been assigned an id of ${user.id}`}</p>}
    </Card>
  )
}

export default AddUser
