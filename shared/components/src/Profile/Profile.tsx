import React from 'react';
import styled from 'styled-components';


const S = {
    ProfileWrapper : styled.div`
        position: relative;
        width: 5rem;
        height: 5rem;
        transition: all .5s ease;
        &:hover {
            border: 2px solid var(--color-primary-darker);
            border-radius: 50%;
        }
    `
}

export default S.ProfileWrapper;