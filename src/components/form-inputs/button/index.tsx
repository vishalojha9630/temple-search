import React from 'react'

interface ButtonProps {
  label?: string
  className?: string
  type?: 'button' | 'submit' | undefined
  loading?: boolean
  outline?: boolean
  disabled?: boolean
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  styleOverrides?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  className = 'danger',
  label = '',
  loading = false,
  onClick,
  children,
  styleOverrides = {},
  outline = false,
}: ButtonProps) => {
  const buttonClass = outline ? `btn btn-outline-${className}` : `btn btn-${className}`
  const styles = { minWidth: "fit-content", ...styleOverrides }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      style={styles}
    >
      <span className="btn-text">{label}</span>
    </button>
  )
}

export default Button
