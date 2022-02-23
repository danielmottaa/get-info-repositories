import styled from 'styled-components';
import themes from '../../global/themes';

export const HeaderSection = styled.header`
    width: 1000px;
    height: 130px;
    background: rgba(255,255,255, .2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: ${themes.colors.neutral50};
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: ${themes.colors.neutral700}
    transition: .4s ease;

    &:focus {
        outline: none;
        width: 420px;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: ${themes.colors.warning200};
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themes.colors.constrast0};
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`

export const LabelSearch = styled.p``;