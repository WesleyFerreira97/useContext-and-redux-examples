import { useContext } from 'react'
import { MainContentWrap } from './style'

import { useSectionsContext } from '../../contexts/SectionsStyles';


export function MainContent() {
    const { values } = useSectionsContext()

    return (
        <MainContentWrap bg={values.bg}>

            <header className='header'>
                <h1 className='title'>Main Content</h1>
                <h2>{values.text}</h2>
            </header>
        </MainContentWrap>
    )
}
