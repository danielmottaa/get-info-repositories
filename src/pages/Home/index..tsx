import React, { useState, useContext } from 'react';
import Container from '../../components/container';
import Header from '../../components/header';
import UserContainer from '../../components/userContainer';
import UserPicture from '../../components/UserPicture';
import UserDetails from '../../components/userDetails';
import UserNumbers from '../../components/userNumbers'

import { context } from '../../context';

import * as S from './styles';


export default function Home() {

  const ctx = useContext(context)

  const [searchedValue, setSearchedValue] = useState('');

  return (
    <Container>
      <Header placeholder={'Pesquise pelo usuário do git'} labelTitleHeader={'Github Profile'} value={searchedValue} onChange={(event: any) => setSearchedValue(event.target.value)} />
      <UserContainer>
        {ctx.userData?.name
          ?
          <>
            <UserPicture url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login} />
            <UserDetails name={ctx.userData?.name} username={ctx.userData?.login} description={ctx.userData?.bio} />
            <UserNumbers numberRepo={ctx.userData?.public_repos} numberFollowers={ctx.userData?.followers} numberFollowing={ctx.userData?.following} />
          </>
          :
          <S.LabelInformation>Por favor, use a barra a cima e pesquise por um usuário git!</S.LabelInformation>
        }

      </UserContainer>
    </Container>
  );
}