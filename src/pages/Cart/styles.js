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
    margin-bottom: 10px;
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
    max-width: 180px;
`;
export const Title = styled.Text`
    font-size: 16px;
    color: #666;
`;
export const Price = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const ContainerAmount = styled.View`
    flex-direction: row;
    background: #eee;
    justify-content: space-between;
    border-radius: 4px;
    align-items: center;
    height: 40px;
    padding: 6px;
`;
export const ContainerIncrements = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Amount = styled.Text`
    width: 35px;
    background: #fff;
    padding: 4px;
    margin: 0 5px 0 5px;
`;
export const Total = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;
export const ContainerTotal = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    align-content: center;
`;

export const TotalTitle = styled.Text`
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
`;
export const TotalValue = styled.Text`
    color: #191920;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const BtnFinish = styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 40px;
    margin-top: 30px;
    background: #7159c1;
`;

export const BtnText = styled.Text`
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
`;
