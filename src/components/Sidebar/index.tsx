import React from 'react'
import { ButtonSidebar } from '../ButtonSidebar'
import { SidebarWrap } from './style'
import { setBgColor } from '../../reducers/themeReducer';
import { useDispatch } from 'react-redux';

export function Sidebar() {
    const dispatch = useDispatch();

    const themes = {
        theme1: {
            bgColor: '#FF2E63',
            textColor: '#fff'
        },
        theme2: {
            bgColor: '#3e13b4',
            textColor: '#fff'
        },
        theme3: {
            bgColor: '#000',
            textColor: '#E41655'
        },
    }

    return (
        <SidebarWrap>
            <ButtonSidebar
                onClick={() => dispatch(setBgColor(themes.theme1))}
            >
                Style 1
            </ButtonSidebar>
            <ButtonSidebar
                onClick={() => dispatch(setBgColor(themes.theme2))}
            >
                Style 2
            </ButtonSidebar>
            <ButtonSidebar
                onClick={() => dispatch(setBgColor(themes.theme3))}
            >
                Style 3
            </ButtonSidebar>
        </SidebarWrap>
    )
}
