import styled from 'styled-components'

export const Container = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div<{ color: string }>`
    background-color: #FFF;
    width: 450px;
    padding: 40px 50px;
    
    h1 {
        font-weight: 500;
        font-size: 1.75em;
        text-align: center;
        width: 450px;
        color: ${props => props.color}
    }
    p {
        padding-top: 20px;
        font-size: 1.2em;
        text-align: right;
        color: ${props => props.color}
    }
    .buttons {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    button {
        height: 45px;
        padding: 8px 18px 6px 18px;
        text-align: center;
        border: none;
        border-radius: 5px;
        color: #fff;
        background-color: ${props => props.color};
        outline: none;
        font-size: 0.85em;
        opacity: 1;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
          }
    }
    
`;