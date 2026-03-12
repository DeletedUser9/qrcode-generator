import React, { ReactNode } from 'react'

type ButtonProps = {
    className: string
    onClick: () => void | Promise<void>
    children: React.ReactNode
}

export default function Button( {className, onClick ,children}: ButtonProps) {
  return (
    <button className={className} onClick = {onClick}>
        {children}
    </button>
  )
}
