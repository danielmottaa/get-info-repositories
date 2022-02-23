import styled from 'styled-components';
import themes from '../../global/themes';

export const Container = styled.div``;

export const LabelH3 = styled.h3`
  width: 15px;

:hover {
  cursor: pointer;
}
`;

export const BoxContainerContent = styled.div`
  margin-top: 30px;
  background: ${themes.colors.neutral100};
  padding: 10px;
  border-radius: 10px;
`;

export const TitleRepo = styled.h1`
  font-size: 15px;
  color: ${themes.colors.neutral700};
`;

export const DescriptionRepo = styled.p`
  font-size: 12px;
  color: ${themes.colors.neutral500};
  margin-top: 5px;
`;

export const BoxInformationRepositories = styled.div`
  display: flex;
  margin-top: 10px;
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