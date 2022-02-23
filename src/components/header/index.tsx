import React, { useContext } from 'react';

import { context } from '../../context';


import api from '../../services/api';

import * as S from './styles';

interface IHeader {
  labelTitleHeader?: string
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
}

const Header: React.FC<IHeader> = ({ labelTitleHeader, value, onChange, placeholder}) => {

  const ctx = useContext(context)

  const getUserData = async () => {
    try {
      const response = await api.get(`/${value}`);
      const repositories = await api.get(`/${value}/repos`);
      const followers = await api.get(`/${value}/followers`);
      const following = await api.get(`/${value}/following`);
      ctx.setUserData(response.data);
      ctx.setRepositories(repositories.data);
      ctx.setFollowers(followers.data);
      ctx.setFollowing(following.data);
    } catch( err ) {
      console.log('Errroooooo', err);
    }
  }

  return (
    <S.HeaderSection>
      <S.HeaderTitle>{labelTitleHeader}</S.HeaderTitle>
      <S.HeaderInputContainer>
        <S.HeaderInput placeholder={placeholder} value={value} onChange={onChange} />

        <S.HeaderSearchButton onClick={getUserData}>
          <S.LabelSearch>PESQUISAR</S.LabelSearch>
        </S.HeaderSearchButton>
      </S.HeaderInputContainer>
    </S.HeaderSection>
  );
}

export default Header;