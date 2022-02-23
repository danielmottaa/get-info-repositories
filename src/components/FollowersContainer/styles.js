import styled from 'styled-components';
import themes from '../../global/themes';

export const Section = styled.section`
    width: 1000px;
    height: 1000px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid ${themes.colors.warning200};;
    margin-top: 15px;
    
    @media (max-width: 430px) {
        width: 300px;
    } 
`;

export const LabelTitle = styled.h3`
  text-align: center;
  margin-top: 15px;
`;

export const BoxContentUser = styled.span`
  margin: 20px;
  background: ${themes.colors.neutral200};
  border-radius: 10px;
  display: flex;
  flex-direction: row;

  :hover {
    cursor: pointer;
  }
`;

export const ImageCustomUser = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid ${themes.colors.constrast0};
  margin: 5px;

  img:hover {
    cursor: pointer;
  }
`;

export const BoxInformationUser = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

`;

export const LabelNameUser = styled.span`
  display: flex;
  font-size: 15px;
 color: ${themes.colors.neutral700};

 span:hover {
    cursor: pointer;
  }
`;

export const BoxWrapper = styled.div``;

export const BoxListOfContainer = styled.h1`
  height: 650px;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
`;