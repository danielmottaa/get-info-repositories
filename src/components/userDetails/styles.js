import styled from 'styled-components';
import themes from '../../global/themes';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  flex-direction: column;
`;

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: ${themes.colors.neutral700};;
`;

export const Userame = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: #${themes.colors.neutral700};;
  padding: 5px;  
`;

export const Description = styled.p`
  width: 300px;
  height: 30px;
  margin: 10px 0;
  font-size: 12px;
  text-align: justify;
  color: #${themes.colors.neutral700};
  line-height: 1.3;
  overflow: hidden;


  @media (max-width: 430px) {
    width: 250px;
  }
`;
