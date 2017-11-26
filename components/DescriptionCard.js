import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base';
​
export default class DescriptionCard extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem button onPress={function_call()}>
                            // <Thumbnail source={require('./img/NSP.png')} />
                            <Text>Native Starter Pro</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}
