import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Wrapper,
    Container,
    LogoContainer,
    Logo,
    BasketContainer,
    BasketBadge,
} from './styles';

class Header extends Component {
    render() {
        const {badge, navigation} = this.props;

        return (
            <Wrapper>
                <Container>
                    <LogoContainer onPress={() => navigation.navigate('Home')}>
                        <Logo />
                    </LogoContainer>
                    <BasketContainer
                        onPress={() => navigation.navigate('Cart')}>
                        <Icon size={24} color="#fff" name="shopping-basket" />
                        <BasketBadge>{badge}</BasketBadge>
                    </BasketContainer>
                </Container>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    badge: state.cart.length,
});

export default connect(
    mapStateToProps,
    null,
)(Header);
