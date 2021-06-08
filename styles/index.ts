// TODO: try to reduce imports in the main index
import delay from './animation/delay';
import duration from './animation/duration';
import keyframes from './animation/keyframes';
import timing from './animation/timing';
import radius from './border/radius';
import bwidth from './border/width';
import boxshadow from './effect/boxshadow';
import opacity from './effect/opacity';
import container from './layout/container';
import blur from './filter/blur';
import brightness from './filter/brightness';
import contrast from './filter/contrast';
import dropshadow from './filter/dropshadow';
import grayscale from './filter/grayscale';
import huerotate from './filter/huerotate';
import invert from './filter/invert';
import saturate from './filter/saturate';
import sepia from './filter/sepia';
import flex from './layout/flex';
import grid from './layout/grid';
import gap from './layout/gap';
import order from './layout/order';
import zindex from './layout/zIndex';
import height from './sizing/height';
import maxheight from './sizing/maxheight';
import minheight from './sizing/minheight';
import maxwidth from './sizing/maxwidth';
import minwidth from './sizing/minwidth';
import width from './sizing/width';
import fontsize from './typography/fontsize';
import fontweight from './typography/fontweight';
import letterspacing from './typography/letterspacing';
import lineheight from './typography/lineheight';
import breakpoint from './breakpoint';
import color from './color';
import spacing from './spacing';

export default {
  animation: {
    delay,
    duration,
    keyframes,
    timing
  },
  border: {
    radius,
    bwidth
  },
  effect: {
    boxshadow,
    opacity
  },
  filter: {
    blur,
    brightness,
    contrast,
    dropshadow,
    grayscale,
    huerotate,
    invert,
    saturate,
    sepia
  },
  layout: {
    container,
    grid,
    flex,
    gap,
    zindex,
    order
  },
  sizing: {
    height,
    maxheight,
    minheight,
    maxwidth,
    minwidth,
    width
  },
  typography: {
    fontsize,
    fontweight,
    letterspacing,
    lineheight
  },
  breakpoint,
  color,
  spacing
};
