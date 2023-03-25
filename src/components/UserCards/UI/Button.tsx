
import React, { PropsWithChildren } from 'react'

function Button(props: PropsWithChildren<{ type:"button"|"submit"|"reset"; onClick?: () => void }>) {
  return (
    <button
      className="inline-block border-blue-300 shadow-md mt-4 text-md font-bold text-gray-900 border-solid border-[2px] py-2 px-4 rounded-[100vmax] hover:bg-slate-800 hover:text-slate-200 hover:border-blue-50 hover:scale-125 ease-in-out focus:outline-none focus:outline-blue-400 focus:outline-8 focus:outline-offset-4 focus:outline-solid focus:bg-slate-800 focus:text-slate-200 tracking-wider"
      type={props.type}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button