import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Wrapper,
    Container,
    LogoContainer,
    Logo,
    BasketContainer,
    BasketBadge,
} from './styles';

export default function Header({navigation}) {
    const badge = useSelector(state => state.cart.length);

    return (
        <Wrapper>
            <Container>
                <LogoContainer onPress={() => navigation.navigate('Home')}>
                    <Logo />
                </LogoContainer>
                <BasketContainer onPress={() => navigation.navigate('Cart')}>
                    <Icon size={24} color="#fff" name="shopping-basket" />
                    <BasketBadge>{badge}</BasketBadge>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}
