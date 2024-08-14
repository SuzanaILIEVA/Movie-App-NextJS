import Link from 'next/link'
import React from 'react'

const MenuItem = ({menu}) => {
  return (
   <Link href={menu.url}>{menu.name}</Link>
  )
}

export default MenuItem
