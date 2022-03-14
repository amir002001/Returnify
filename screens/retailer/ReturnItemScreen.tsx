import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, List, Paragraph, Title } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default class ReturnItemScreen extends Component {

    constructor(props: Object) {
        super(props);

        this.state = { name: this.props.route.params.params.name, status: this.props.route.params.params.status }
        console.log(this.props.route.params.params.name)

    }
    render() {
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Title>{this.state.name} Return</Title>
                        <Paragraph>
                            {this.state.status}
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Text>Date of return:</Text>
                <Text>December 23, 2021</Text>

                <List.Section>
                    <List.Subheader>
                        Items in return:
                    </List.Subheader>
                    <List.Item onPress={() => this.props.navigation.navigate('itemDetail', {
                        params: {
                            clothingName: 'Crew T-Shirt', clothingImage:
                                <Image style={{ width: 100, height: 100 }} source={require(`../../assets/images/retailer/tshirt.jpeg`)} />
                        }
                    })} title="Crewneck T-Shirt"
                        description={<Text>SKU: 156897586</Text>} left={() => <Avatar.Image source={require(`../../assets/images/retailer/tshirt.jpeg`)} />}
                        right={() => <List.Icon icon="information" />}
                    />
                    <List.Item onPress={() => this.props.navigation.navigate('itemDetail', {
                        params: {
                            clothingName: 'Dress Pants', clothingImage:
                                <Image style={{ width: 100, height: 100 }} source={require(`../../assets/images/retailer/pants.jpeg`)} />
                        }
                    })}
                        title="Dress Pants"
                        description={<Text>SKU: 986654789</Text>}
                        left={() => <Avatar.Image source={require(`../../assets/images/retailer/pants.jpeg`)} />}
                        right={() => <List.Icon icon="information" />}
                    />

                </List.Section>

                <Text>Reason for return:</Text>
                <Text style={{ fontStyle: 'italic' }}>"The clothes did not fit my body shape. The clothes were too tight."</Text>

                <Text>Expected time arrival:</Text>
                <Text style={{ fontWeight: 'bold' }}>2:55 PM Thursday Feburary 10, 2022</Text>

                <Button
                    onPress={() => this.props.navigation.navigate('appHome')}>
                    Confirm Return
                </Button>
            </View>
        );
    }
}
