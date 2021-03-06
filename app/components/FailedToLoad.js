import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import Button from './Button'
import s from '../styles/components/FailedToLoadStyles'

const FailedToLoad = ({onRetry, message}) => {
  return (
    <View style={s.container}>
      <Text style={s.heading}>
        {message}
      </Text>
      <Button
        style={s.button}
        onPress={() => onRetry()}>
        <Text>Retry</Text>
      </Button>
    </View>
  )
}

FailedToLoad.propTypes = {
  onRetry: PropTypes.func,
  message: PropTypes.string
}

export default FailedToLoad
