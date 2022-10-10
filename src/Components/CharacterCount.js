import {useRecoilValue} from 'recoil'
import {charCountState} from '../Atom/text/Selectors/charCountState '

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}