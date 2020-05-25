import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import styles from './styles';


class Screen extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  toggleOpen = () => {
    const toValue = this._isOpen ? 0 : 1;
    Animated.timing(this.state.animation, {
      useNativeDriver: true,
        toValue,
      duration: 200,
    }).start();
    this._isOpen = !this._isOpen;
  };

  render() {
    
    /* 
    * Animated styles for reload button
    */
    const reloadStyles = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };

    /* 
    * Animated styles for Order button
    */
    const orderStyles = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -150],
          }),
        },
      ],
    };

    /* 
    * Animated styles for semi-transparent background
    */
    const bgStyles = {
      transform: [
        {
          scale: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 30],
          }),
        },
      ],
    };

    /* 
    * Interpolations for Opacity and x-position
    * for button labels.
    */
    const labelPositionInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, -90],
    });

    const opacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 0, 1],
    });

    /* 
    * Opacity and Position interpolations applied to label
    */
    const labelStyles = {
      opacity: opacityInterpolate,
      transform: [
        {
          translateX: labelPositionInterpolate,
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background, bgStyles]} />
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.other, orderStyles]}>
            <Animated.Text style={[styles.label, labelStyles]}>
              Order
            </Animated.Text>
            <Icon name="food-fork-drink" size={20} color="#555" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.other, reloadStyles]}>
            <Animated.Text style={[styles.label, labelStyles]}>
              Reload
            </Animated.Text>
            <Icon name="reload" size={20} color="#555" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <View style={[styles.button, styles.pay]}>
            <Animated.Text style={[styles.label, labelStyles]}>
              Pay
            </Animated.Text>
            <Icon name="cart-outline" size={27} color="#fff" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


export default Screen;
