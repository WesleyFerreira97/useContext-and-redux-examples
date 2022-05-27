import styled from "styled-components";

type MainContentProps = {
    bg?: string;
    textColor?: string;
}

export const MainContentWrap = styled.div<MainContentProps>`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bg};

    .header {
        text-align: center;
        text-transform: uppercase;
        color: ${props => props.textColor};
        
        .title {
            line-height: 155%;
        }
    }
`


MainContentWrap.defaultProps = {
    bg: "#FF2E63",
    textColor: "#fff"
}