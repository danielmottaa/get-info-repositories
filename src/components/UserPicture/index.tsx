import React from 'react';

import * as S from './styles';

interface IUserPicture {
  url?: string;
  alternativeText?: string;
}

const UserPicture:  React.FC<IUserPicture> = ({ url, alternativeText}) => {
  return (
      <S.Container>
        <S.ProfilePicture src={url} alt={alternativeText} />
      </S.Container>
  );
}

export default UserPicture;