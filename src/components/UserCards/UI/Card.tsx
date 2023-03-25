import { PropsWithChildren } from "react"

const Card = (props:PropsWithChildren) => {
  return (
    <div className="bg-slate-200 shadow-lg rounded-xl w-[60vw]">{props.children}</div>
  )
}

export default Card