import React, {Component} from 'react';
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

export default class Home extends Component {
    state = {
        products: [],
        loading: true,
    };

    async componentDidMount() {
        const response = await api.get('products');
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: product.price,
            loadingAddCart: false,
        }));

        this.setState({products: data, loading: false});
    }

    render() {
        const {products, loading} = this.state;
        return (
            <ProductList>
                {loading ? (
                    <ActivityIndicator color="#7159c1" size={36} />
                ) : (
                    <ScrollView horizontal>
                        {products.map(product => (
                            <ProductItem key={product.id}>
                                <ProductImage source={product.image} />
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductPrice>
                                    {product.priceFormatted}
                                </ProductPrice>
                                <ButtonAddToCart>
                                    <ButtonAddToCartCounter>
                                        {product.loadingAddCart ? (
                                            <ActivityIndicator
                                                color="#fff"
                                                size={24}
                                            />
                                        ) : (
                                            <Icon
                                                name="add-shopping-cart"
                                                size={24}
                                                color="#FFF"
                                            />
                                        )}
                                        <ButtonAddToCartCounterTitle>
                                            3
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
}
