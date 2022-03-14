import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, List, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default class ItemDetailScreen extends Component {

    constructor(props: Object) {
        super(props);

        this.state = { clothingName: this.props.route.params.params.clothingName, clothingImage: this.props.route.params.params.clothingImage }
        console.log(this.props.route.params.params.clothingImage)

    }


    render() {
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Title>{this.state.clothingName}</Title>
                        <Paragraph>Product Information:</Paragraph>
                        <Text>SKU: 156897586</Text>
                        <Text>Style Number: 9938</Text>
                        <Text>Manufacture Date: Novemeber 12, 2020</Text>
                        {this.state.clothingImage}
                    </Card.Content>
                </Card>
            </View>
        );
    }
}
