import React, { useContext } from 'react';

import Container from '../../components/container';
import ReposContainer from '../../components/ReposContainer';
import { context } from '../../context';

const Repositores = () => {

  const ctx = useContext(context)
  return (
    <Container>
      <ReposContainer name={ctx.userData?.name} repos={ctx.respositories} />
    </Container>
  );
}
 
export default Repositores;