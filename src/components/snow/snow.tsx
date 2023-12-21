import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import PropTypes from 'prop-types';

const ANGE_RANGE = 0.4;
const HALF_ANGLE_RANGE = ANGE_RANGE / 2;
const HALF_PI = Math.PI / 3;
const ANGLE_SEED = 900;
const ANGLE_DIVISOR = 10000;
const INCREMENT_LOWER = 2;
const INCREMENT_UPPER = 4;
const FLAKE_SIZE_LOWER = 2;
const FLAKE_SIZE_UPPER = 6;

function getRandom(lower: number, upper: number): number {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return getRandomFloat(max - min) + min;
}

function getRandomFloat(upper: number): number {
  return Math.random() * upper;
}

function getRandomInt(upper: number): number {
  return Math.floor(Math.random() * (upper - 1 + 1)) + 1;
}

interface SnowProps {
  width: number;
  height: number;
}

const Snow: React.FC<SnowProps> = ({width, height}) => {
  const [position, setPosition] = useState({
    x: getRandomInt(width),
    y: getRandomInt(height),
    angle:
      (getRandomFloat(ANGLE_SEED) / ANGLE_SEED) * ANGE_RANGE +
      HALF_PI -
      HALF_ANGLE_RANGE,
    increment: getRandom(INCREMENT_LOWER, INCREMENT_UPPER),
    flakeSize: getRandom(FLAKE_SIZE_LOWER, FLAKE_SIZE_UPPER),
    opacity: Math.random() + 0.1,
  });

  const viewRef = useRef<View>(null);

  const move = () => {
    let newX = position.x + position.increment * Math.cos(position.angle);
    let newY = position.y + position.increment * Math.sin(position.angle);

    let newAngle =
      position.angle + getRandom(-ANGLE_SEED, ANGLE_SEED) / ANGLE_DIVISOR;

    if (!isInside(newX, newY, width, height)) {
      newX = getRandomInt(width);
      newY = -position.flakeSize - 1;
      newAngle =
        (getRandomFloat(ANGLE_SEED) / ANGLE_SEED) * ANGE_RANGE +
        HALF_PI -
        HALF_ANGLE_RANGE;
    }

    setPosition(prevState => ({
      ...prevState,
      x: Math.floor(newX),
      y: Math.floor(newY),
      angle: newAngle,
    }));

    if (viewRef.current) {
      viewRef.current.setNativeProps({
        style: {
          top: Math.floor(newY),
          left: Math.floor(newX),
        },
      });
    }
  };

  const isInside = (x: number, y: number, w: number, h: number) => {
    return (
      x >= -position.flakeSize - 1 &&
      x + position.flakeSize <= w &&
      y >= -position.flakeSize - 1 &&
      y - position.flakeSize < h
    );
  };

  useEffect(() => {
    const interval = setInterval(move, 50);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const snowShape: ViewStyle = {
    top: position.y,
    left: position.x,
    width: position.flakeSize,
    height: position.flakeSize,
    borderRadius: position.flakeSize / 2,
    opacity: position.opacity,
  };

  return <View ref={viewRef} style={[styles.snow, snowShape]} />;
};

Snow.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  snow: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    zIndex: 10,
  },
});

export default Snow;
