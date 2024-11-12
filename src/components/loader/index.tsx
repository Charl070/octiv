import { RingLoader } from 'react-spinners';
import * as S from './loader.styles'

const LoadingSpinner = () =>{
  return (
    <S.LoaderContainer>
      <RingLoader color="blue" size={200} />
    </S.LoaderContainer>
  );
}

export default LoadingSpinner;