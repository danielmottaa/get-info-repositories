import React from 'react';

import * as S from './styles';

interface IUserDetails {
  name?: string;
  username?: string;
  description: string;
}

const UserDetails: React.FC<IUserDetails> = ({ name, username, description}) => {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Userame>@{username}</S.Userame>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}

export default UserDetails;