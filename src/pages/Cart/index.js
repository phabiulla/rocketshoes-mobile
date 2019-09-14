import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
    BtnFinish,
    BtnText,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: product.price * product.amount,
        })),
    );

    const total = useSelector(state =>
        state.cart.reduce((sumTotal, product) => {
            return sumTotal + product.price * product.amount;
        }, 0),
    );

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1),
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1),
        );
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
                                    <Price>{item.price} €</Price>
                                </ContainerDetails>
                                <Icon
                                    onPress={() =>
                                        dispatch(
                                            CartActions.removeFromCart(item.id),
                                        )
                                    }
                                    size={20}
                                    color="#7159c1"
                                    name="delete"
                                />
                            </ContainerInfos>
                            <ContainerAmount>
                                <ContainerIncrements>
                                    <Icon
                                        onPress={() => decrement(item)}
                                        size={20}
                                        color="#7159c1"
                                        name="remove-circle-outline"
                                    />
                                    <Amount>{item.amount}</Amount>
                                    <Icon
                                        onPress={() => increment(item)}
                                        size={20}
                                        color="#7159c1"
                                        name="add-circle-outline"
                                    />
                                </ContainerIncrements>
                                <Total>{item.subtotal} €</Total>
                            </ContainerAmount>
                        </ContainerItem>
                    ))}
                    <ContainerTotal>
                        <TotalTitle>TOTAL</TotalTitle>
                        <TotalValue>{total} €</TotalValue>
                    </ContainerTotal>
                    <BtnFinish>
                        <BtnText> Finalizar Pedido</BtnText>
                    </BtnFinish>
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
