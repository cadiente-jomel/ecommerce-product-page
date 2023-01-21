import {useState} from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Cart from '../components/Cart/Cart';
import CartCounter from '../components/CartCounter/CartCounter';
import Navigation from '../components/Navigation/Navigation';
import NavigationMenu, { MobileNavigationMenu } from '../components/NavigationMenu/NavigationMenu';
import { S as OverlayStyled } from '../components/Carousel/FullCarousel';
import Product from '../components/Product/Product';
import Profile from '../components/Profile/Profile';
import { S as Styled } from '../components/Product/Product';

const S = {
  MainContainer: styled.main`
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    @media all and (min-width: 770px) {
      margin-top: 8rem;
    }
  `,
  NavigationMenuContainer: styled.div` 
    background-color: var(--white);
    height: 100%;
    width: 60%;
    border-bottom: 2px solid var(--grayish-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 7rem;
    z-index: 100;
    position: relative;
  `,
  MobileCloseIconWrapper: styled.div` 
    position: absolute;
    left: 2rem;
    top: 2rem;
    width: 2rem;
  `,
  IconMenuWrapper: styled.div` 

    margin-top: 1rem;
    position: relative;
    display: inline-block;
    
    @media all and (min-width: 945px) {
      margin-top: 0;
      display: none;
    }
  `,
  LogoWrapper: styled.div` 
    position: relative;
    width: 14.5rem;
    height: 2rem;
    margin-top: 1rem;

    @media all and (min-width: 770px) {
      margin-top: 5px;
    }
  `,
  LogoContainer: styled(Styled.QuantityContainer)`
    margin-top: 0;
    margin-right: 8rem;
    flex-direction: row;
  `,
  OuterNavigationContainer: styled(Styled.QuantityContainer)`
    width: 100%;
    margin-top: 0;
    flex-direction: row;
  `,
  CartProfileContainer: styled(Styled.QuantityContainer)`
    margin-top: 0;
    position: relative;
    flex-direction: row;
  `
}


function App() {
  const [cartProductQuantity, setCartProductQuantity] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleChange = () => {
    setShowCart(!showCart);
  }
  return <div>
  <OverlayStyled.OverlayContainer isClicked={showOverlay}>
    <S.NavigationMenuContainer>
      <S.MobileCloseIconWrapper>
        <Image priority onClick={() => setShowOverlay(false)} src="/assets/images/icon-close.svg" alt="icon-close" width={20} height={20}/>
      </S.MobileCloseIconWrapper>
      <MobileNavigationMenu/>
    </S.NavigationMenuContainer>
  </OverlayStyled.OverlayContainer>
  <Navigation> 
    <S.OuterNavigationContainer>
      <S.LogoContainer>
        <S.IconMenuWrapper>
          <Image priority onClick={() => setShowOverlay(true)} src="/assets/images/icon-menu.svg" alt="icon-menu" width={20} height={20}/>
        </S.IconMenuWrapper>
        <S.LogoWrapper>
          <Image priority src="/assets/images/logo.svg" alt="Logo" fill/>

        </S.LogoWrapper>
        <NavigationMenu/>
      </S.LogoContainer>

      <S.CartProfileContainer>
          <Image priority src="/assets/images/icon-cart-nav.svg" alt="cart-icon" onClick={handleChange} width={25} height={25}/>  
          <CartCounter q={cartProductQuantity} />

          <Profile>
            <Image priority src="/assets/images/image-avatar.png" alt="user profile" fill/>
          </Profile>
          <Cart isActive={showCart} cartProductQuantity={cartProductQuantity} setCartProductQuantity={setCartProductQuantity}/>
        </S.CartProfileContainer>
    </S.OuterNavigationContainer>
  </Navigation>

  <S.MainContainer>
    <Product 
        setCartProductQuantity={setCartProductQuantity}
    />
  </S.MainContainer>
  </div>
}

export default App;
