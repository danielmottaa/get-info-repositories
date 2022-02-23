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
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: ${themes.colors.neutral700};
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h1`
    height: 650px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.h2`
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const LabelH2 = styled.h2`
  font-size: 15px;
  width: 100%;
  overflow: hidden;
  color: ${themes.colors.neutral700};

  :hover {
      cursor: pointer;
    }
`;

export const LabelP = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${themes.colors.neutral500};
  width: 100%;
  height: 30px;
  overflow: hidden;
  line-height: 1.3;
`; 

export const BoxInformationRepositories = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: row;
`;

export const BoxStars = styled.div`
  background: ${themes.colors.danger200};
  border-radius: 3px;
  margin-top: -3px;
`;

export const LabelStars = styled.span`
  font-size: 10px;
  display: flex;
  color: ${themes.colors.constrast0};
  margin: 3px;
`;

export const BoxForks = styled.div`
  background: ${themes.colors.blueShow};
  border-radius: 3px;
  margin-top: -3px;
  margin-left: 10px;
`;

export const LabelForks = styled.span`
  font-size: 10px;
  display: flex;
  color: ${themes.colors.constrast0};
  margin: 3px;
`;

export const BoxViews = styled.div`
    background: ${themes.colors.warning200};
  border-radius: 3px;
  margin-top: -3px;
  margin-left: 10px;
`;

export const LabelViews = styled.span`
  font-size: 10px;
  display: flex;
  color: ${themes.colors.constrast0};
  margin: 3px;
`;

export const BoxIcon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: flex-end;
`;

export const WrapperContentRepo = styled.div``;