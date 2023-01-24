import React, { useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { S as Styled } from "../ProductDetails/ProductDetails"
import NavigationMenu, {
  MobileNavigationMenu,
} from "../NavigationMenu/NavigationMenu"
import CartCounter from "../CartCounter/CartCounter"
import Profile from "../Profile/Profile"
import Cart from "../Cart/Cart"

interface NavigationComponentProps {
  cartProductQuantity: number
  setCartProductQuantity: Function
  setShowOverlay: Function
  showOverlay: boolean
}

interface MobileNavigationComponentProps {
  showOverlay: boolean
  setShowOverlay: Function
}

interface NavigationStyledProps {
  isClicked: boolean
}

export const S = {
  Navigation: styled.nav`
    align-items: center;
    background-color: var(--white);
    display: flex;
    height: 10rem;
    padding: 0 1rem;
    width: 100%;
    z-index: 100;

    @media all and (min-width: 770px) {
      border-bottom: 2px solid var(--grayish-blue);
      padding: 0 7rem;
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
  MobileNavigationContainer: styled.div`
    margin: 0 auto;
    height: 100vh;
    width: ${(props: NavigationStyledProps) =>
      props.isClicked ? "100vw" : "0vw"};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
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
  `,
}

export default ({
  cartProductQuantity,
  setCartProductQuantity,
  setShowOverlay,
  showOverlay,
}: NavigationComponentProps) => {
  const [showCart, setShowCart] = useState(false)
  const handleChange = () => {
    setShowCart(!showCart)
  }

  return (
    <>
      <S.MobileNavigationContainer isClicked={showOverlay}>
        <S.NavigationMenuContainer>
          <S.MobileCloseIconWrapper>
            <Image
              priority
              onClick={() => setShowOverlay(false)}
              src="/assets/images/icon-close.svg"
              alt="icon-close"
              width={20}
              height={20}
            />
          </S.MobileCloseIconWrapper>
          <MobileNavigationMenu />
        </S.NavigationMenuContainer>
      </S.MobileNavigationContainer>
      <S.Navigation>
        <S.OuterNavigationContainer>
          <S.LogoContainer>
            <S.IconMenuWrapper>
              <Image
                priority
                onClick={() => setShowOverlay(true)}
                src="/assets/images/icon-menu.svg"
                alt="icon-menu"
                width={20}
                height={20}
              />
            </S.IconMenuWrapper>
            <S.LogoWrapper>
              <Image priority src="/assets/images/logo.svg" alt="Logo" fill />
            </S.LogoWrapper>
            <NavigationMenu />
          </S.LogoContainer>

          <S.CartProfileContainer>
            <Image
              priority
              src="/assets/images/icon-cart-nav.svg"
              alt="cart-icon"
              onClick={handleChange}
              width={25}
              height={25}
            />
            <CartCounter q={cartProductQuantity} />

            <Profile>
              <Image
                priority
                src="/assets/images/image-avatar.png"
                alt="user profile"
                fill
              />
            </Profile>
            <Cart
              isActive={showCart}
              cartProductQuantity={cartProductQuantity}
              setCartProductQuantity={setCartProductQuantity}
            />
          </S.CartProfileContainer>
        </S.OuterNavigationContainer>
      </S.Navigation>
    </>
  )
}

export const MobileNavigation = ({
  showOverlay,
  setShowOverlay,
}: MobileNavigationComponentProps) => {
  return (
    <S.MobileNavigationContainer isClicked={showOverlay}>
      <S.NavigationMenuContainer>
        <S.MobileCloseIconWrapper>
          <Image
            priority
            onClick={() => setShowOverlay(false)}
            src="/assets/images/icon-close.svg"
            alt="icon-close"
            width={20}
            height={20}
          />
        </S.MobileCloseIconWrapper>
        <MobileNavigationMenu />
      </S.NavigationMenuContainer>
    </S.MobileNavigationContainer>
  )
}
