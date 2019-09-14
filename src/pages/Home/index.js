import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {
    ProductImage,
    ProductItem,
    ProductList,
    ProductPrice,
    ProductTitle,
    ButtonAddToCart,
    ButtonAddToCartCounter,
    ButtonAddToCartTitle,
    ButtonAddToCartCounterTitle,
} from './styles';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
    const cart = useSelector(state => state.cart);
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;

            return sumAmount;
        }, {}),
    );
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState([]);
    const [lastId, setLastId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('products');
            setProducts(response.data);
            setLoading(false);
        }

        loadProducts();
    }, []);

    useEffect(() => {
        cart.map(product => {
            load[product.id] = product.load;
            return load;
        }, {});

        setLoad(load);
    }, [cart, load]);

    useEffect(() => {
        setLastId(
            products.length > 0 ? products[products.length - 1].id : null,
        );
    }, [lastId, products]);

    function handleAddProduct(product) {
        load[product.id] = true;

        setLoad(load);
        dispatch(CartActions.addToCartRequest(product.id));
    }

    return (
        <ProductList>
            {loading ? (
                <ActivityIndicator color="#7159c1" size={36} />
            ) : (
                <ScrollView horizontal>
                    {products.map(product => (
                        <ProductItem
                            key={product.id}
                            last={lastId && lastId === product.id}>
                            <ProductImage source={{uri: product.image}} />
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductPrice> {product.price} € </ProductPrice>
                            <ButtonAddToCart
                                onPress={() => handleAddProduct(product)}>
                                <ButtonAddToCartCounter>
                                    {load[product.id] ? (
                                        <ActivityIndicator
                                            color="#fff"
                                            size={20}
                                        />
                                    ) : (
                                        <Icon
                                            name="add-shopping-cart"
                                            size={20}
                                            color="#FFF"
                                        />
                                    )}
                                    <ButtonAddToCartCounterTitle>
                                        {amount[product.id] || 0}
                                    </ButtonAddToCartCounterTitle>
                                </ButtonAddToCartCounter>
                                <ButtonAddToCartTitle>
                                    ADICIONAR
                                </ButtonAddToCartTitle>
                            </ButtonAddToCart>
                        </ProductItem>
                    ))}
                </ScrollView>
            )}
        </ProductList>
    );
}
