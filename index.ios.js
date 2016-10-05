/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity,
} from 'react-native';
import Button from './src/component/Button';
import Toast from 'react-native-root-toast';



class AwesomeProject extends Component {
    //构建
    constructor(props){
        super(props);
        //初始状态
        this.state = {status:1,text:2};

    }

    // setTimeout

    fetchData =(emablek)=>{
        // alert('正在获取数据');
        console.log(2);
        //禁用按钮
        this.refs.button1.disable();
        this.timer = setTimeout(()=>{
            emablek();
            //  alert('正在获取数据');
            // this.refs.button1.enable();
        },3000);

    };
    customPressHander = ()=>{
        alert('你按下爱你 '+this.state.status);
    };
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                {/*props 属性 ref 就相当于html中的id，标记和引用组件*/}

               <Button text="确定" ref="button1" onPress = {this.fetchData} beijinyes="red" dianjishijian={()=>alert('您点击了确定事情！')} date="2016-03-15" object={{a:'b'}}></Button>
                <Text >
                    {this.state.text}
                </Text>
               <Button text="取消" ref="button2" onPress = {this.fetchData}  beijinyes="gray" dianjishijian={()=>alert('您点击了取消事情！')}></Button>
               <Button text="取消1" ref="button" onPress = {this.fetchData}  ></Button>
               <Button text="取消1" onPress = {()=>this.setState({text:22})}  ></Button>

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


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
