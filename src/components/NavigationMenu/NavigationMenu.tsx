import styled from 'styled-components';
import Menu from '../Menu/Menu';

const NavChoices: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact']
const S = {
  UnorderedList: styled.ul` 
    align-items: center;
    display: none;
    font-size: var(--default-font-size);
    margin-top: 3rem;
    
    @media all and (min-width: 945px) {
      display: flex;
    }
 `,

  MobileUnorderedList: styled.ul`
    padding: 10rem 0;
    position: absolute;
    left: 47px;
  `

}

export default () => {
    return (
        <S.UnorderedList>
          {
            NavChoices.map((choice, index) => (
              <Menu key={index} menuName={choice}/>
            ))
          }
        </S.UnorderedList> 
    )
}

export const MobileNavigationMenu = () => {
    return (
        <S.MobileUnorderedList>
          {
            NavChoices.map((choice, index) => (
              <Menu key={index} menuName={choice}/>
            ))
          }
        </S.MobileUnorderedList> 
    )
}