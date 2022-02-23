import React, { useContext } from 'react';

import Container from '../../components/container';
import FollowersContainer from '../../components/FollowersContainer';
import { context } from '../../context';

const Followers: React.FC = () => {
  const ctx = useContext(context)
  return (
    <Container>
      <FollowersContainer title={'Seguidores:'} followers={ctx.followers} />
    </Container>
  );
}

export default Followers;