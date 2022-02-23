import styled from 'styled-components';
import themes from '../../global/themes';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfoRepo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    transition: .4s ease;
    border-radius: 10px;
  }
`;

export const WrapperNumber = styled.h1`
  font-size: 20px;
  text-align: center;
  color: ${themes.colors.neutral700};;
`;

export const WrapperLabel = styled.h2`
  font-size: 12px;
  text-align: center;
  color: ${themes.colors.neutral700};
`;