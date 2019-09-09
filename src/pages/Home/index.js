import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

class Home extends Component {
    state = {
        products: [],
        loading: true,
        load: [],
    };

    async componentDidMount() {
        const response = await api.get('products');
        this.setState({products: response.data, loading: false});
    }

    static getDerivedStateFromProps(props, current_state) {
        const {load} = current_state;

        if (props.cart) {
            props.cart.map(product => {
                load[product.id] = product.load;

                return load;
            }, {});
        }

        return {
            ...current_state,
            load: load,
        };
    }

    handleAddProduct = product => {
        const {load} = this.state;
        const {addToCartRequest} = this.props;

        load[product.id] = true;
        this.setState({load});

        addToCartRequest(product.id);
    };

    render() {
        const {products, loading, load} = this.state;

        const {amount} = this.props;
        const lastId =
            products.length > 0 ? products[products.length - 1].id : null;

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
                                <ProductPrice>{product.price}</ProductPrice>
                                <ButtonAddToCart
                                    onPress={() =>
                                        this.handleAddProduct(product)
                                    }>
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
}

const mapStateToProps = state => ({
    cart: state.cart,
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
    loading: false,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
