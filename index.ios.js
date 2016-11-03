/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,ListView,
    View, Image, TouchableOpacity,TextInput,
} from 'react-native';
import Button from './src/component/Button';
import Toast from 'react-native-root-toast';


class AwesomeProject extends Component {
    //构建
    constructor(props) {
        super(props);
        //初始状态
        this.state = {status: 1, text: 2};
        // 初始化模拟数据
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Julie', 'Devin'
            ])
        };

    }

    // setTimeout

    fetchData = (emablek)=> {
        // alert('正在获取数据');
        console.log(2);
        //禁用按钮
        this.refs.button1.disable();
        this.timer = setTimeout(()=> {
            emablek();
            //  alert('正在获取数据');
            // this.refs.button1.enable();
        }, 3000);

    };
    customPressHander = ()=> {
        alert('你按下按钮 ' + this.state.status);
    };

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View>

                <View style={{flex: 10, alignItems: 'center'}}>
                    {/*props 属性 ref 就相当于html中的id，标记和引用组件*/}

                    <Button text="确定" ref="button1" onPress={this.fetchData} beijinyes="red"
                            dianjishijian={()=>alert('您点击了确定事情！')} date="2016-03-15" object={{a: 'b'}}></Button>
                    <Text >
                        {this.state.text}
                    </Text>
                    <Button text="取消" ref="button2" onPress={this.fetchData} beijinyes="gray"
                            dianjishijian={()=>alert('您点击了取消事情！')}></Button>
                    <Button text="取消1" ref="button" onPress={this.fetchData}></Button>
                    <Button text="取消1" onPress={()=>this.setState({text: 22})}></Button>
                    <Button text="取消3" onPress={()=>Toast.show('ddd')}></Button>
                    {/*<Text style={styles.red}>just red</Text>*/}
                    {/*<Text style={styles.bigblue}>just bigblue</Text>*/}
                    {/*<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>*/}
                    {/*<Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>*/}
                </View>
                <View style={{height: 150}}>


                    <View style={{flex: 1, flexDirection: 'row',
                        justifyContent: 'space-around', }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                </View>
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {/*{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}*/}
                    </Text>
                </View>
                <View style={{paddingTop: 22}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
                </View>

            </View>





        );
    }

}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
