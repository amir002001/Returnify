import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, List, Paragraph, Title } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default class ReturnItemScreen extends Component {

    constructor(props: Object) {
        super(props);


        this.state = {}

    }
    render() {
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Title>Bob Jones Return</Title>
                        <Paragraph>
                            <Text style={{ color: '#FF0000' }}>Status: In transit</Text>
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Text>Date of return:</Text>
                <Text>December 23, 2021</Text>

                <List.Section>
                    <List.Subheader>
                        Items in return:
                    </List.Subheader>
                    <List.Item onPress={() => this.props.navigation.navigate('returnItem')} title="Crewneck T-Shirt"
                        description={<Text>SKU: 156897586</Text>} left={() => <List.Icon icon="tshirt-crew" />}
                        right={() => <List.Icon icon="information" />}
                    />
                    <List.Item
                        title="Jim's Return"
                        description={<Text>SKU: 986654789</Text>}
                        left={() => <List.Icon color="#000" icon="redhat" />}
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
