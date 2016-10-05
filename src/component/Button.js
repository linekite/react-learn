/**
 * Created by line on 16/9/28.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity,
} from 'react-native';

export default class Button extends Component {
    //构建
    constructor(props) {
        super(props);
        //初始状态
        this.state = {
            disabled: false,
        };

    }

    onPress = ()=> {
        console.log(1);
        const {onPress}= this.props;
        onPress(this.enable);//异步
    };

    customPressHander = ()=> {
        // alert('你按下了按钮，当前状态值值是： ' + this.state.status);
        const {dianjishijian} = this.props;
        dianjishijian();
    };
    enable = ()=> {
        console.log(4);
        this.setState({
            disabled: false,
        })
    };
    disable = ()=> {
        console.log(3);
        this.setState({
            disabled: true,
        })
    };

    render() {
        //解构
        const {text, beijinyes,onPress} = this.props;
        //onPress={()=>this.customPressHander()}
        // this.state.disabled && style.disabled   ‘&&’ 的意思是前者为true的时候，使用后者的样式。
        return (
            <View style={styles.container}>

                <TouchableOpacity disabled={this.state.disabled}
                                  onPress={()=>this.onPress()}
                                  style={[styles.button, this.state.disabled && styles.disabled]}>
                    <Text style={styles.buttonText}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    disabled: {
        backgroundColor: 'gray',
    },
});