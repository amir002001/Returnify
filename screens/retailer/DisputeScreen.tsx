import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Avatar, Card, List, Paragraph, Title, Modal, Portal, Button, Provider, TextInput } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default class DisputeScreen extends Component {

    constructor(props: Object) {
        super(props);

        this.state = { orderNumber: this.props.route.params.params.orderNo };

    }
    render() {
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Title>Dispute for order {this.state.orderNumber}</Title>
                        <Paragraph>
                            Please provide a reasoning for your dispute:
                        </Paragraph>
                    </Card.Content>
                </Card>
                <TextInput
                    mode="outlined"
                    label="Dispute reason"
                    placeholder="Type something"
                    right={<TextInput.Affix text="/100" />}
                />

                <Button
                    onPress={() => this.props.navigation.navigate('appHome')}>
                    Submit Dispute
                </Button>


                {/* <Provider>
                    <Portal>
                        <Modal visible={this.state.visible} onDismiss={this.setState({ visible: false })}>
                            <Text>Example Modal.  Click outside this area to dismiss.</Text>
                        </Modal>
                    </Portal>
                </Provider> */}
            </View >
        );
    }
}
