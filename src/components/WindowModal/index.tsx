import React, { useContext } from 'react';

import { AiFillHeart } from 'react-icons/ai';

import ReactModal from 'react-modal';
import { context } from '../../context';
import themes from '../../global/themes';

import * as S from './styles';

interface IWindowModal {
  isOpened: boolean;
}

const WindowModal: React.FC<IWindowModal> = ({ isOpened }) => {

  const ctx = useContext(context);

  const handleModal = () => { 
    ctx.setIsOpened(false);
  }

  return (
    <S.Container>
      <ReactModal
        isOpen={isOpened}
        ariaHideApp={false}
      >
        <S.LabelH3 onClick={handleModal}>X</S.LabelH3>
        <S.BoxContainerContent>
          <S.TitleRepo>Mussum Ipsum</S.TitleRepo>
          <S.DescriptionRepo>
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Cevadis im ampola pa arma uma pindureta.Atirei o pau no gatis.
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Cevadis im ampola pa arma uma pindureta.Atirei o pau no gatis, per gatis num morreus.
            Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
          </S.DescriptionRepo>
          <S.BoxInformationRepositories>
            <S.BoxStars>
              <S.LabelStars>stars: 2304</S.LabelStars>
            </S.BoxStars>
            <S.BoxForks>
              <S.LabelForks>forks: 1231</S.LabelForks>
            </S.BoxForks>
            <S.BoxViews>
              <S.LabelViews>views: 220312</S.LabelViews>
            </S.BoxViews>
            <S.BoxIcon>
              <AiFillHeart color={themes.colors.danger200} size={10} onClick={handleModal} />
            </S.BoxIcon>
          </S.BoxInformationRepositories>
        </S.BoxContainerContent>
      </ReactModal>
    </S.Container>
  );
}

export default WindowModal;