import styled from "styled-components";

type MainContentProps = {
    bg?: string;
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
        
        .title {
            line-height: 155%;
        }
    }
`


MainContentWrap.defaultProps = {
    bg: "#FF2E63"
}