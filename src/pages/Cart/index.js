import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    EmptyText,
    ContainerItem,
    ContainerInfos,
    Image,
    ContainerDetails,
    Title,
    Price,
    ContainerAmount,
    ContainerIncrements,
    Amount,
    Total,
    ContainerTotal,
    TotalTitle,
    TotalValue,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({cart, total, removeFromCart, updateAmountRequest}) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }
    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    return (
        <Container>
            {cart.length ? (
                <>
                    {cart.map(item => (
                        <ContainerItem key={item.id}>
                            <ContainerInfos>
                                <Image source={{uri: item.image}} />
                                <ContainerDetails>
                                    <Title>{item.title}</Title>
                                    <Price>{item.price}</Price>
                                </ContainerDetails>
                                <Icon size={24} color="#7159c1" name="delete" />
                            </ContainerInfos>
                            <ContainerAmount>
                                <ContainerIncrements>
                                    <Icon
                                        size={24}
                                        color="#7159c1"
                                        name="remove-circle-outline"
                                    />
                                    <Amount>1</Amount>
                                    <Icon
                                        size={24}
                                        color="#7159c1"
                                        name="add-circle-outline"
                                    />
                                </ContainerIncrements>
                                <Total>129,00 €</Total>
                            </ContainerAmount>
                        </ContainerItem>
                    ))}
                    <ContainerTotal>
                        <TotalTitle>TOTAL</TotalTitle>
                        <TotalValue>129,00 €</TotalValue>
                    </ContainerTotal>
                </>
            ) : (
                <>
                    <Icon name="remove-shopping-cart" size={48} color="#999" />
                    <EmptyText> Seu carrinho está vazio.</EmptyText>
                </>
            )}
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: [
        {
            id: 1,
            title: 'Tênis de Caminhada Leve Confortável',
            price: 179.9,
            image:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        },
    ],
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);
