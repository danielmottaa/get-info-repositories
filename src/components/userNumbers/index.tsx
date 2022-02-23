import React from 'react';

import { useHistory } from 'react-router-dom';

import * as S from './styles';

interface IUserNumber {
  numberRepo: number;
  numberFollowers: number;
  numberFollowing: number;
}

const UserNumbers: React.FC<IUserNumber> = ({ numberRepo, numberFollowers, numberFollowing }) => {
  const history = useHistory();

  const handleOnClick = (route: any) => history.push(route);

  return (
    <S.Container>
      <S.WrapperInfoRepo onClick={() => handleOnClick('/repos')}>
        <S.WrapperNumber>{numberRepo}</S.WrapperNumber>
        <S.WrapperLabel>Repositórios</S.WrapperLabel>
      </S.WrapperInfoRepo>

      <S.WrapperInfoRepo onClick={() => handleOnClick('/followers')}>
        <S.WrapperNumber>{numberFollowers}</S.WrapperNumber>
        <S.WrapperLabel>Seguidores</S.WrapperLabel>
      </S.WrapperInfoRepo>

      <S.WrapperInfoRepo onClick={() => handleOnClick('/following')}>
        <S.WrapperNumber>{numberFollowing}</S.WrapperNumber>
        <S.WrapperLabel>Seguindo</S.WrapperLabel>
      </S.WrapperInfoRepo>
    </S.Container>
  );
}

export default UserNumbers;