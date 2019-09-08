import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #fff;
    border-radius: 4px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
`;

export const EmptyText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #999;
`;

export const ContainerItem = styled.View`
    flex-direction: column;
    padding: 10px;
`;
export const ContainerInfos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    align-items: center;
`;
export const Image = styled.Image`
    width: 100px;
    height: 100px;
`;
export const ContainerDetails = styled.View`
    flex-direction: column;
`;
export const Title = styled.Text`
    font-size: 18px;
    color: #666;
`;
export const Price = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const ContainerAmount = styled.View`
    flex-direction: row;
    background: #eee;
    justify-content: space-between;
    border-radius: 4px;
    align-items: center;
    padding: 6px;
`;
export const ContainerIncrements = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Amount = styled.Text`
    width: 50px;
    background: #fff;
    padding: 6px;
    margin: 0 5px 0 5px;
`;
export const Total = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const ContainerTotal = styled.View``;
export const TotalTitle = styled.Text``;
export const TotalValue = styled.Text``;
