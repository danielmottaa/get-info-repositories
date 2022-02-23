import React, { useContext } from 'react';
import Container from '../../components/container';
import FollowersContainer from '../../components/FollowersContainer';
import { context } from '../../context';

const Following: React.FC = () => {

  const ctx = useContext(context)

  return (
    <Container>
     <FollowersContainer title={'Seguindo:'} followers={ctx.following} />
    </Container>
  );
}

export default Following;