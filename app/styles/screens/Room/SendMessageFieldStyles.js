import {StyleSheet} from 'react-native'

const padding = 12
const button = 35
const buttonMargin = 8

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: padding,
    backgroundColor: 'white',
    elevation: 8
  },
  innerContainer: {
    flex: 1
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 14
  },
  button: {
    height: button,
    margin: buttonMargin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendIcon: {
    width: 30,
    height: 30
  },
  hidden: {
    position: 'absolute',
    top: 10000,  // way off screen
    left: 10000, // way off screen
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: 'transparent',
  }
})

export default style
