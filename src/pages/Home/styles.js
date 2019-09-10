import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ProductList = styled.View`
    padding: 30px;
    flex: 1;
    /* margin-top: 60px; */
    flex-direction: row;
    background: #191920;
    align-self: center;
`;

export const ProductItem = styled.View`
    display: flex;
    width: 270px;
    max-height: 500px;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    ${props =>
        props.last
            ? css`
                  margin-right: 0px;
              `
            : css`
                  margin-right: 20px;
              `}
`;

export const ProductImage = styled.Image`
    width: 230px;
    height: 230px;
    background: #eee;
    align-content: center;
    align-items: center;
`;

export const ProductTitle = styled.Text`
    font-size: 18px;
    color: #191920;
    line-height: 20px;
    margin-top: 5px;
    align-content: flex-start;
    align-items: flex-start;
`;

export const ProductPrice = styled.Text`
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
`;

export const ButtonAddToCart = styled(RectButton)`
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const ButtonAddToCartCounter = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    width: 60px;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
`;

export const ButtonAddToCartTitle = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
    flex: 1;
    align-items: center;
    font-weight: bold;
`;

export const ButtonAddToCartCounterTitle = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
    align-items: center;
    margin-left: 5px;
    font-weight: bold;
`;
