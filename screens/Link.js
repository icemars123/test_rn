import React, { Component } from "react";
import { 
    AppRegistry, 
    Platform, 
    StatusBar, 
    StyleSheet, 
    View, 
    Text, 
    ScrollView, 
    WebView 
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";



const INDEX_FILE_PATH = `./../assets/dist/test.html`;
const INDEX_FILE_ASSET_URI = Asset.fromModule(require(INDEX_FILE_PATH)).uri;

export default class Home extends React.Component {
    render() {
        return (
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            //     <Text>
            //         Here is Link!!!
            //     </Text>
            // </View>
            <View style={{ flex: 1, overflow: 'hidden' }}>

                <WebView
                    style={{ ...StyleSheet.absoluteFillObject }}
                    ref={this.createWebViewRef}
                    source={
                        Platform.OS === 'ios'
                            ? require('./../assets/dist/test.html')
                            : { uri: INDEX_FILE_ASSET_URI }
                    }
                    onLoadEnd={this.onWebViewLoaded}
                    onMessage={this.handleMessage}
                    startInLoadingState={true}
                    renderLoading={this.showLoadingIndicator}
                    renderError={this.renderError}
                    javaScriptEnabled={true}
                    onError={this.onError}
                    scalesPageToFit={false}
                    mixedContentMode={'always'}
                    domStorageEnabled={true}
                />
            </View>
        );
    }
}