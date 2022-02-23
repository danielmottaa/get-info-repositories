import { useContext } from 'react';
import * as S from './styles';

import { AiOutlineHeart } from 'react-icons/ai';

import WindowModal from '../../components/WindowModal';

import themes from '../../global/themes';
import { context } from '../../context';

interface IReposContainer {
  name: string;
  repos: [];
}

const ReposContainer: React.FC<IReposContainer> = ({ name, repos }) => {

  const ctx = useContext(context)

  const handleModal = () => {
    ctx.setIsOpened(true);
  }

  return (
    <>
      <S.Section>
        <S.Title>Repositórios de: {(name)?.split(' ')[0]}</S.Title>
        <S.ListOfReposContainer>
          {repos?.map((repo: any, index: any) => {
            return (
              <S.WrapperContentRepo key={index}>
                <S.Repo>
                  <S.WrapperContentRepo>
                    <S.LabelH2 onClick={() => window.location.replace(repo?.html_url)}>{repo?.name}</S.LabelH2>
                  </S.WrapperContentRepo>
                  <S.WrapperContentRepo>
                    <S.LabelP>{repo?.description}</S.LabelP>
                  </S.WrapperContentRepo>
                  <S.WrapperContentRepo>
                    <S.BoxInformationRepositories>
                      <S.BoxStars>
                        <S.LabelStars>stars: {repo?.stargazers_count}</S.LabelStars>
                      </S.BoxStars>
                      <S.BoxForks>
                        <S.LabelForks>forks: {repo?.forks_count}</S.LabelForks>
                      </S.BoxForks>
                      <S.BoxViews>
                        <S.LabelViews>views: {repo?.watchers_count}</S.LabelViews>
                      </S.BoxViews>
                      <S.BoxIcon>
                        <AiOutlineHeart color={themes.colors.danger200} size={13} onClick={handleModal} />
                      </S.BoxIcon>
                    </S.BoxInformationRepositories>
                  </S.WrapperContentRepo>
                </S.Repo>
              </S.WrapperContentRepo>
            );
          })}
        </S.ListOfReposContainer>
      </S.Section>
      <WindowModal isOpened={ctx.isOpened} />
    </>
  );
}

export default ReposContainer;