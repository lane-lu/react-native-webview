import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import WebView from 'react-native-webview';

type Props = {};
type State = {
  lastEvent: string
};

export default class Cookies extends Component<Props, State> {
  state = {
    lastEvent: ''
  };

  render() {
    return (
      <View>
        <View style={{ height: 120 }}>
          <WebView
            source={{uri: 'https://ezmaxmobile-server-mas-i810-manage.apps.awsmas810.ezmaxcloud.com/'}}
            customCertificatesForHost={''}
            automaticallyAdjustContentInsets={false}
            onNavigationStateChange={this.handleWebViewNavigationStateChange}
            sharedCookiesEnabled={true}
            thirdPartyCookiesEnabled={true}
            onSetCookies={this.onSetCookies}
          />
        </View>
        <Button
          title={'Get Cookies'}
          onPress={() => console.log('Get cookies')}
        />
        <Text>Last set cookie event:</Text>
        <Text>{this.state.lastEvent}</Text>
      </View>
    );
  }

  onSetCookies = event => {
    this.setState({lastEvent: JSON.stringify(event.nativeEvent)});
  }

  handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    console.log('Navigation event: ', url);
  }
}
