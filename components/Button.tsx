import React, { ReactNode } from 'react';

const Button: React.FC<{ children: ReactNode }>  = ({ children }) => {
  return (
      <button className="py-2 text-2xl bg-orange w-full font-LDR border border-white rounded">
        { children }
      </button>
  )
}
export default Button