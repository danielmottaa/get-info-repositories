import React from 'react';

import * as S from './styles';

interface IFollowersContainer {
  followers: [];
  title: string;
}

const FollowersContainer: React.FC<IFollowersContainer> = ({ title, followers }) => {
  return (
    <S.Section>
      <S.LabelTitle>{title}</S.LabelTitle>
      <S.BoxListOfContainer>
        {followers?.map((item: any, index: any) => {
          return (
            <S.BoxWrapper key={index}>
              <S.BoxContentUser onClick={() => window.location.replace(item?.html_url)}>
                <S.ImageCustomUser src={item?.avatar_url} />
                <S.BoxInformationUser>
                  <S.LabelNameUser>{item?.login}</S.LabelNameUser>
                </S.BoxInformationUser>
              </S.BoxContentUser>
            </S.BoxWrapper>
          );
        })}
      </S.BoxListOfContainer>
    </S.Section>
  );
}

export default FollowersContainer;