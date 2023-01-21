import styled from 'styled-components';

interface MenuComponentProps {
    menuName: string,
}

const S = {
    Menu: styled.li`
        list-style-type: none; 
        height: 5rem;
        font-size: 2rem;
        &::after {
            border-bottom: 5px solid var(--color-primary-darker); 
            content: "";
            display: block;
            margin-top: 1rem;
            transition: all .2s ease;
            width: 0;
        }

        &:hover::after {
            width: 100%;
        }

        &:not(:last-child) {
            margin-right: 3rem;
        }

        @media all and (min-width: 945px) {

            &::after {
                margin-top: 3.6rem;
            }
        }
    `,
    MenuAnchor: styled.a`
        text-decoration: none;
        color: var(--black); 
    `
}

export default (props: MenuComponentProps) => (
    <S.Menu>
        {props.menuName}
    </S.Menu>
);