import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default class ReturnListScreen extends Component {

    constructor(props: Object) {
        super(props);


        this.state = {}

    }
    render() {
        return (
            <View>


                <List.Section>
                    <List.Item onPress={() => this.props.navigation.navigate('returnItem', { params: { name: 'Bob Jones', status: <Text style={{ color: '#00DD00' }}>Status: Delivered</Text> } })} title="Bob's Return"
                        description={<Text style={{ color: '#00DD00' }}>Status: Delivered</Text>} left={() => <List.Icon icon="account-circle" />}
                        right={() => <List.Icon icon="information" />}
                    />
                    <List.Item onPress={() => this.props.navigation.navigate('returnItem', { params: { name: 'Jim Jones', status: <Text style={{ color: '#FEBE00' }}>Status: Picked up</Text> } })}
                        title="Jim's Return"
                        description={<Text style={{ color: '#FEBE00' }}>Status: Picked up</Text>}
                        left={() => <List.Icon color="#000" icon="account-circle" />}
                        right={() => <List.Icon icon="information" />}
                    />
                    <List.Item onPress={() => this.props.navigation.navigate('returnItem', { params: { name: 'Jan Jones', status: <Text style={{ color: '#FF0000' }}>Status: In transit</Text> } })}
                        title="Jan's Return"
                        description={<Text style={{ color: '#FF0000' }}>Status: In transit</Text>}
                        left={() => <List.Icon color="#000" icon="account-circle" />}
                        right={() => <List.Icon icon="information" />}
                    />
                    <List.Item onPress={() => this.props.navigation.navigate('returnItem', { params: { name: 'Alex Jones', status: <Text style={{ color: '#FEBE00' }}>Status: Picked up</Text> } })}
                        title="Alex's Return"
                        description={<Text style={{ color: '#FEBE00' }}>Status: Picked up</Text>}
                        left={() => <List.Icon color="#000" icon="account-circle" />}
                        right={() => <List.Icon icon="information" />}
                    />
                    <List.Item onPress={() => this.props.navigation.navigate('returnItem', { params: { name: 'Ron Jones', status: <Text style={{ color: '#FF0000' }}>Status: In transit</Text> } })}
                        title="Ron's Return"
                        description={<Text style={{ color: '#FF0000' }}>Status: In transit</Text>}
                        left={() => <List.Icon color="#000" icon="account-circle" />}
                        right={() => <List.Icon icon="information" />}
                    />
                </List.Section>


                <Button
                    onPress={() => this.props.navigation.navigate('appHome')}>
                    Go back
                </Button>
            </View>
        );
    }
}
