import React from 'react'
import { MainContentWrap } from './style'
import { useSelector } from 'react-redux'


export function MainContent() {
    const theme = useSelector((state: any) => state.theme);

    return (
        <MainContentWrap
            bg={theme.bgColor}
            textColor={theme.textColor}
        >
            <header className='header' >
                <h1 className='title'>Main Content</h1>
                <h2>Style 1</h2>
            </header>
        </MainContentWrap>
    )
}
