import React from 'react'
import { ButtonWrap } from './style'

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
}

export function ButtonSidebar({ children, ...rest }: ButtonProps) {
    return (
        <ButtonWrap {...rest}>{children}</ButtonWrap>
    )
}
