import React, { useContext, useEffect } from 'react'
import { useSectionsContext } from '../../contexts/SectionsContext';
import { MainContentWrap } from './style'

export function MainContent() {
    const { contextState } = useSectionsContext();

    return (
        <MainContentWrap bg={contextState.bg}>
            <header className='header'>
                <h1 className='title'>Main Content</h1>
                <h2>{contextState.text}</h2>
            </header>
        </MainContentWrap>
    )
}
