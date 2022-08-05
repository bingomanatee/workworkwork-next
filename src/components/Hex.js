/* eslint-disable no-param-reassign */
import { h3ToGeo, h3ToGeoBoundary } from 'h3-js';

class Shape {
  constructor(hex, points) {
    this.hex = hex;
    this.points = points;
  }

  get width() {
    const { min, max } = this.points.reduce((memo, [_, lon]) => {
      if (lon < memo.min) memo.min = lon;
      if (lon > memo.max ) memo.max = lon;
      return memo;
    }, { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY });
    return max - min;
  }

}

export default class Hex {

  constructor({ hIndex, level }) {
    this.hIndex = hIndex;
    this.boundary = h3ToGeoBoundary(hIndex);
    this.center = h3ToGeo(hIndex);
    this.level = level || 0;
  }

  status = 'new';

  get ps() {
    return this.boundary.map(([_, lon]) => {
      if (lon < -45) {
        return 'l';
      }
      if (lon > 45) {
        return 'r';
      }
      return 'c';
    });
  }

  get leftShape() {
    const { ps } = this;
    return new Shape(this, this.boundary.map((p, i) => {
      const side = ps[i];
      if (side === 'r') {
        return [p[0], p[1] - 360];
      }
      return p;
    }));
  }

  get rightShape() {
    const { ps } = this;
    return new Shape(this, this.boundary.map((p, i) => {
      const side = ps[i];
      if (side === 'l') {
        return [p[0], p[1] + 360];
      }
      return p;
    }));
  }

  get shapes() {
    const { ps } = this;
    const psSet = new Set(ps);
    if (psSet.has('l') && psSet.has('r')) {
      return [this.leftShape, this.rightShape];
    }
    return [new Shape(this, this.boundary)];
  }

  countryShares = new Map();
}
