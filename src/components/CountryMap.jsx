import React, { Component } from 'react';
import { withSize } from 'react-sizeme';
import _ from 'lodash';
import { getRes0Indexes, geoToH3 } from 'h3-js';
import * as PIXI from 'pixi.js';
import { Box, Button, Stack, Text, TextInput } from 'grommet';
import { constants } from '@wonderlandlabs/carpenter';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ModelContext from './ModelContext';

const { binaryOperator } = constants;
const BACKGROUND_COLOR = PIXI.utils.rgb2hex([0.33, 0.25, 0]);
const HEX_LINE_COLOR = PIXI.utils.rgb2hex([0.5, 0, 0]);
const HAS_LOC_COLOR = PIXI.utils.rgb2hex([0.25, 0.125, 0]);
const BLACK = PIXI.utils.rgb2hex([0, 0, 0]);
const DARK_BLUE = PIXI.utils.rgb2hex([0, 0, 0.4]);
const PIX_PER_DEG = 4;
const RED = PIXI.utils.rgb2hex([1, 0, 0]);
const BEIGE = PIXI.utils.rgb2hex([0,0.5, 0,7]);

function waitFor(time) {
  return new Promise((done) => {
    setTimeout(() => done(), time);
  });
}

function lerp(n, min, max, scale = 1) {
  const dist = max - min;
  return scale * _.clamp((n - min) / dist, 0, 1);
}

function nearBounds(center, bounds) {
  const west = bounds[0].ln - 2;
  const east = bounds[1].ln + 2;
  const south = bounds[1].lt - 2;
  const north = bounds[0].lt + 2;

  const [lt, ln] = center;
  const match = ln >= west && ln <= east && lt >= south && lt <= north;
  return match;
}

export class CountryMap extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { height: '50vh' };
    this.changeCountry = this.changeCountry.bind(this);
    this.analyzeCountry = this.analyzeCountry.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    // this.draw();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  get width() {
    return 360 * PIX_PER_DEG;
  }

  get height() {
    return 180 * PIX_PER_DEG;
  }

  degToXY(lat, lon) {
    if (typeof lat === 'object') {
      return this.degToXY(lat.lt, lat.ln);
    }
    const [minLat, minLon, maxLat, maxLon] = this.extent;
    const x = lerp(lon, minLat, maxLat, this.width);
    const y = this.height - lerp(lat, minLon, maxLon, this.height);
    return { x, y };
  }

  drawFill() {
    this.filler.clear();
    this.filler.beginFill(PIXI.utils.rgb2hex([1, 0.5, 0]))
      .drawRect(0, 0, this.width, this.height)
      .endFill();
  }

  drawGrid() {
    this.lines.clear();
    this.lines.lineStyle(1, PIXI.utils.rgb2hex([1, 1, 1]), 0.125);

    for (let lat = -90; lat <= 90; lat += 10) {
      const start = this.degToXY(lat, -180);
      const end = this.degToXY(lat, 180);
      this.lines.moveTo(start.x, start.y).lineTo(end.x, end.y);
    }


    for (let lon = -180; lon <= 180; lon += 10) {
      const start = this.degToXY(-90, lon);
      const end = this.degToXY(90, lon);
      this.lines.moveTo(start.x, start.y).lineTo(end.x, end.y);
    }

    this.lines.lineStyle(2, PIXI.utils.rgb2hex([1, 1, 1]), 0.25);

    [[[-180, 0], [180, 0]], [[0, -90], [0, 90]]].forEach(([[lon, lat], [lon2, lat2]]) => {
      const start = this.degToXY(lat, lon);
      const end = this.degToXY(lat2, lon2);
      this.lines.moveTo(start.x, start.y).lineTo(end.x, end.y);
    });
  }

  drawCountries() {
    this.countryContainer.removeChildren();
    this.props.countries.forEach((country) => this.drawCountry(country.data));
    this.drawCountry(this.model.base.table('countries').getData('BRA'), true);
    this.drawCountry(this.model.base.table('countries').getData('CAN'), true);
  }

  drawCountry(country, drawShape = false, color = BLACK, alpha = 1) {
    if (!country) {
      return;
    }
    const { name, latitude, longitude, shapes, boundary } = country;
    if (!drawShape) {
      const nameSprite = new PIXI.Text(name, { fontFamily: 'Arial', fontSize: 20, fill: DARK_BLUE, align: 'center' });
      const point = this.degToXY(latitude, longitude);
      nameSprite.position = point;
      this.countryContainer.addChild(nameSprite);
    } else {
      const countryShape = new PIXI.Container();
      countryShape.alpha = alpha;
      this.countryContainer.addChild(countryShape);
      let g = new PIXI.Graphics();
      let pointCount = 0;
      g.beginFill(color);
      for (const shape of shapes) {
        if (shape.points.shape.length > 3) {
          const points = shape.points.shape.map((pt) => this.degToXY(pt.lt, pt.ln));
          const last = points[points.length - 1];
          g.moveTo(last.x, last.y);
          for (const p of points) {
            g.lineTo(p.x, p.y);
            pointCount += 1;
          }
          if (pointCount > 40) {
            g.endFill();
            countryShape.addChild(g);
            g = new PIXI.Graphics();
            g.beginFill(color);
            pointCount = 0;
          }
        }
      }
      g.endFill();
      /*    console.log('boundary', boundary);
          g.lineStyle({ width: 2, color: RED });
          const s = this.degToXY(country.boundary[0]);
          const s2 = this.degToXY(country.boundary[1]);
          s2.x -= s.x;
          s2.y -= s.y;
          console.log('drawing rect', s, s2);
          g.drawRect(s.x, s.y, s2.x, s2.y);
          g.closePath();
          countryShape.addChild(g); */
      return countryShape;
    }
  }

  getImageData(s) {
    const canvas = this.app.renderer.plugins.extract.canvas(this.countryContainer);
    const context = canvas.getContext('2d');
    const imgData = context.getImageData(0, 0, this.width, this.height);
    return imgData;
  }

  /**
   *
   * @param hex {Object} // a record
   * @param mode {string}
   * @param iso3 {string|undefined}
   * @returns {Graphics}
   */
  hexGraphics(hex, mode = 'line', iso3, color = BLACK) {
    const graphics = new PIXI.Graphics();

    if (mode === 'line') {
      graphics.lineStyle(1, HEX_LINE_COLOR);
      graphics.beginFill(HAS_LOC_COLOR);
    } else {
      graphics.beginFill(color);
    }

    hex.data.shapes.forEach((s) => {
      if (s.width > 200) {
        return;
      }
      const lastPoint = this.degToXY(...s.points[s.points.length - 1]);

      graphics.moveTo(lastPoint.x, lastPoint.y);
      s.points.forEach((ll) => {
        const p = this.degToXY(...ll);
        graphics.lineTo(p.x, p.y);
      });
      if (mode === 'line') {
        graphics.closePath();
      }
    });

    graphics.endFill();

    if (iso3) {
      if (hex.data.countryShares.has(iso3)) {
        const base = hex.data.countryShares.get('_BASE_');
        const share = hex.data.countryShares.get(iso3);
        if (base <= 0 || share <= 0) {
          graphics.alpha = 0;
        } else {
          graphics.alpha = share / base;
        }
      }
    }

    return graphics;
  }

  drawHex(hex, iso3) {
    this.hexContainer.addChild(this.hexGraphics(hex, 'fill', iso3));
  }

  drawHexes() {
    if (!this.model) {
      return;
    }
    const start = Date.now();
    const records = this.model.base.table('hexes').query({
      tableName: 'hexes',
      where: {
        field: 'level',
        test: binaryOperator.eq,
        against: 2,
      },
      joins: [
        {
          joinName: 'locHexes',
        },
      ],
    });
    /*
        console.log('join took ', Date.now() - start, 'ms');
        console.log('hexes:', this.model.base.table('hexes').data.size);
        console.log('locations:', this.model.base.table('locations').data.size); */

    records.forEach((hex) => {
      if (hex.data.level !== 2) {
        return;
      }
      this.drawHex(hex);
    });
  }

  draw() {
    if (!this.app) {
      return;
    }
    this.hexContainer.alpha = 0.15;
    this.extent = this.map.getView().calculateExtent(this.map.getSize());
    this.drawFill();
    this.drawHexes();
    this.drawGrid();
    this.drawCountries();
    this.app.render();
  }

  init() {
    // Create the application
    if (!this.app && this.myRef.current && this.height) {

      this.app = new PIXI.Application({
        width: this.width,
        height: this.height,
        backgroundAlpha: 0,
        resizeTo: this.myRef.current,
        forceCanvas: true,
      });

      this.filler = new PIXI.Graphics();
      this.filler.alpha = 0;
      this.app.stage.addChild(this.filler);
      this.hexContainer = new PIXI.Container();
      this.hexContainer.alpha = 0.15;
      this.app.stage.addChild(this.hexContainer);
      this.lines = new PIXI.Graphics();
      this.app.stage.addChild(this.lines);
      this.countryContainer = new PIXI.Container();
      this.app.stage.addChild(this.countryContainer);
      this.myRef.current.appendChild(this.app.view);

      this.drawMap();
      this.draw();
      // Add the view to the DOM
      this.myRef.current.appendChild(this.app.view);
    }
  }

  drawMap() {
    this.map = new Map({
      target: 'map-image',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 0,
        extent: [-180, -90, 180, 90],
        projection: 'EPSG:4326',
      }),
    });
  }

  changeCountry(event) {
    this.setState((state) => {
      state.country = event.target.value;
      return state;
    });
  }

  analyzeCountry(code) {
    if ((!code || (typeof code !== 'string'))) {
      code = this.state.country;
    }
    const country = this.model.base.table('countries').getData(code);
    if (!country) {
      console.log('cannot find code', code);
      return;
    }
    this.hexContainer.alpha = 1;
    this.filler.clear();
    this.hexContainer.removeChildren();
    this.countryContainer.removeChildren();
    //   console.log('bounds:', country.boundary);
    const hexes = this.model.base.table('hexes').query({
      tableName: 'hexes',
      where: (record) => {
        if (record.data.level !== 2) {
          return false;
        }
        return nearBounds(record.data.center, country.boundary);
      },
    });

    // console.log('matches:', hexes);
    let index = 0;
    const digestHexes = () => {
      console.log('index = ', index);
      if (index >= hexes.length) {
        console.log('---- done');
        this.setState({ render: 'done' }, () => {
          this.drawCountry(country, true, RED, 0.2);
          hexes.filter((hex) => hex.data.countryShares.size > 0)
            .forEach((hex) => {
              this.drawHex(hex, country.iso3);
            });
          requestAnimationFrame(() => {
            this.app.render();
          });
        });
        return;
      }
      const hex = hexes[index];
      if (hex.data.status === 'new') {
        this.analyzeCountryHex(hex, country);
      } else if (hex.data.status === 'done') {
        index += 1;
      }
      requestAnimationFrame(digestHexes);
    };
    requestAnimationFrame(digestHexes);

  }

  weighRect(rect) {
    try {
      const imageData = this.getImageData(rect);
      const chunks = _.chunk(imageData.data, 4);

      return chunks.map(([r, g, b, a]) => {
        if (a && Math.random() < 0.1) console.log('opaque: ', r, g, b, a);
        return a * (255 - r);
      })
        .reduce((s, v) => s + v, 0);
    } catch (err) {
      return 0;
    }
  }

  analyzeCountryHex(hex, country) {
    if (hex.data.status !== 'new') {
      return;
    }
    this.countryContainer.removeChildren();
    const shape = this.drawCountry(country, true);

    const hexImage = this.hexGraphics(hex, 'fill');
    shape.mask = new PIXI.MaskData(hexImage);
    this.app.render();
    const rect = shape.getBounds();

    const countryWeight = this.weighRect(shape, rect);
    if (countryWeight) {
      this.countryContainer.removeChildren();
      requestAnimationFrame(() => {
        hex.data.countryShares.set(country.iso3, countryWeight);
        this.countryContainer.removeChildren();
        const hexFull = this.hexGraphics(hex, 'fill', null, BEIGE);
        this.countryContainer.addChild(hexFull);
        this.app.render();

        const baseWeight = this.weighRect(hexFull.getBounds());
        console.log('--------------- weight = ', countryWeight, 'base=', baseWeight, 'ratio', Math.round(countryWeight / baseWeight * 100));
        hex.data.countryShares.set('_BASE_', baseWeight);
        hex.data.status = 'done';
      });
    } else {
      hex.data.status = 'done';
    }
  }

  render() {
    const { height, width, state } = this;
    return (
      <ModelContext.Consumer>
        {(model) => {
          this.model = model;

          return (
            <>
              <Box direction="row" gap="medium" margin="large">
                <Text>Country {state.render || ''}</Text>
                <TextInput name='country' value={state.country || ''} onChange={this.changeCountry}/>
                <Button label="Analyze" primary onClick={this.analyzeCountry}/>
              </Box>
              <Box fill style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
                <Stack guidingChild={1} interctiveChild={1}>
                  <Box fill>
                    <div
                      id="map-image" style={{
                      width: `${width}px`, height: `${height}px`,
                      border: '1px solid red',
                    }}/>
                  </Box>

                  <Box>
                    <div
                      id="hexes"
                      ref={this.myRef}
                      style={{
                        width,
                        height,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
            </>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}

export default CountryMap;
