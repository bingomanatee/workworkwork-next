import React, { Component } from 'react';
import _ from 'lodash';
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
const PIX_PER_DEG = 5;
const RED = PIXI.utils.rgb2hex([1, 0, 0]);
const BEIGE = PIXI.utils.rgb2hex([0, 0.5, 0, 7]);

function lerp(n, min, max, scale = 1) {
  const dist = max - min;
  return scale * _.clamp((n - min) / dist, 0, 1);
}

export class CountryMap extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.changeCountry = this.changeCountry.bind(this);
    this.nextCountry = this.nextCountry.bind(this);
    this.beginWorkOnCurrentCountry = this.beginWorkOnCurrentCountry.bind(this);
    this.state = {
      country: null,
      hexIndex: 0,
      countryHexes: [],
    };
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

  // ------- utility

  degToXY(lat, lon) {
    if (typeof lat === 'object') {
      return this.degToXY(lat.lt, lat.ln);
    }
    const [minLat, minLon, maxLat, maxLon] = this.extent;
    const x = lerp(lon, minLat, maxLat, this.width);
    const y = this.height - lerp(lat, minLon, maxLon, this.height);
    return { x, y };
  }

  weighRect() {
    try {
      const imageData = this.getImageData();
      const chunks = _.chunk(imageData.data, 4);

      return chunks.map(([r, g, b, a]) => a * (255 - r))
        .reduce((s, v) => s + v, 0);
    } catch (err) {
      return 0;
    }
  }

  getImageData() {
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

    hex.data.shapes.forEach((s) => {
      if (mode === 'line') {
        graphics.lineStyle(1, HEX_LINE_COLOR);
      } else {
        graphics.beginFill(color);
      }

      const points = s.points.map((p) => this.degToXY(p));
      const lastPoint = points[points.length - 1];

      graphics.moveTo(lastPoint.x, lastPoint.y);
      points.forEach((p) => {
        graphics.lineTo(p.x, p.y);
      });

      graphics.closePath();
      graphics.endFill();
    });


    if (iso3) {
      const alpha = this.model.hexStrength(hex, iso3);
      console.log('alpha = ', alpha);
      graphics.alpha = alpha;
    }

    return graphics;
  }

  get width() {
    return 360 * PIX_PER_DEG;
  }

  get height() {
    return 180 * PIX_PER_DEG;
  }

  // ------ general map drawing

  drawCountryName(country) {
    const { name, latitude, longitude } = country;
    const nameSprite = new PIXI.Text(name, { fontFamily: 'Arial', fontSize: 20, fill: DARK_BLUE, align: 'center' });
    const point = this.degToXY(latitude, longitude);
    nameSprite.position = point;
    this.countryContainer.addChild(nameSprite);
    return nameSprite;
  }

  drawCountry(country, color = BLACK, alpha = 1) {
    const { shapes } = country;
    const countryShape = new PIXI.Container();
    this.countryContainer.addChild(countryShape);
    countryShape.alpha = alpha;
    let g = new PIXI.Graphics();
    let pointCount = 0;
    for (const shape of shapes) {
      if (shape.points.shape.length > 3) {
        g.beginFill(color);
        const points = shape.points.shape.map((pt) => this.degToXY(pt.lt, pt.ln));
        const last = points[points.length - 1];
        g.moveTo(last.x, last.y);
        for (const p of points) {
          g.lineTo(p.x, p.y);
          pointCount += 1;
        }
        g.endFill();
        if (pointCount > 40) {
          countryShape.addChild(g);
          g = new PIXI.Graphics();
          pointCount = 0;
        }
      }
    }
    countryShape.addChild(g);
    return countryShape;
  }

  drawHex(hex, mode = 'line', iso3) {
    this.hexContainer.addChild(this.hexGraphics(hex, mode, iso3));
  }

  drawHexes() {
    const records = this.props.hexes;
    records.forEach((hex) => {
      this.drawHex(hex);
    });
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
    this.props.countries.forEach((country) => this.drawCountryName(country.data));
    this.drawCountry(this.model.base.table('countries').getData('BRA'), BLACK);
    this.drawCountry(this.model.base.table('countries').getData('CAN'), BLACK);
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

  // ----------- hex / country mapping

  changeCountry(event) {
    this.setState((state) => {
      state.iso3 = event.target.value;
      return state;
    });
  }

  beginWorkOnCurrentCountry() {
    this.hexContainer.removeChildren();
    this.countryContainer.removeChildren();
    this.app.render();
    requestAnimationFrame(() => {
      this.setState((state) => {
        const country = this.model.base.table('countries').getData(state.iso3);
        const hexes = this.model.findHexesAround(country);

        state.countryHexes = hexes;
        state.country = country;

        return { ...state, countryHexes: hexes, hexIndex: 0 };
      }, () => {
        this.workCountryHexes();
      });
    });
  }

  workCountryHexes() {
    const { countryHexes, hexIndex } = this.state;
    if (hexIndex >= countryHexes.length) {
      this.allHexesDone();
    } else {
      this.setState({ currentHex: countryHexes[hexIndex] }, () => {
        this.workCurrentHex();
      });
    }
  }

  allHexesDone() {
    this.drawCountryHexes();
    this.app.render();
    this.setState({ 'drawnHexes': this.state.iso3 });
    setTimeout(() => {
      this.nextCountry();
    }, 1000);
  }

  /**
   * after all the hexes have been analyzed,
   * draw a representation of the country with hex weights
   */
  drawCountryHexes() {
    const { country, countryHexes } = this.state;
    this.filler.clear();
    this.hexContainer.alpha = 1;
    this.hexContainer.removeChildren();
    this.countryContainer.removeChildren();
    this.drawCountry(country, RED, 0.2);
    countryHexes.filter((hex) => hex.data.countryShares.size > 0)
      .forEach((hex) => {
        this.drawHex(hex, 'fill', country.iso3);
      });
    this.app.render();
  }

 async nextCountry() {
    const { country } = this.state;
    if (country) country.hexesDone = true;
    await this.model.pollCountries();
    const workableCountries = this.model.base.query({
      tableName: 'countries',
      where(record) {
        const { hexesDone = false, hex_shares = [] } = record.data;
        if (hexesDone) {
          return false;
        }
        if (hex_shares.length) {
          return false;
        }
        return true;
      },
    });

    console.log('remaining countries:', workableCountries.length);

    if (workableCountries.length) {

      this.setState((state) => {
        const byPop = _.sortBy(workableCountries, (c => c.data.population * -1)).slice(0, 10);
        state.iso3 = _.shuffle(byPop).pop().key;
        return state;
      }, () => this.beginWorkOnCurrentCountry());
    } else {
      console.log('---- all countries found');
    }
  }

  findShareOfCurrentHex() {
    const { country, currentHex } = this.state;
    this.countryContainer.removeChildren();
    const shape = this.drawCountry(country, true);
    const hexImage = this.hexGraphics(currentHex, 'fill');
    shape.mask = new PIXI.MaskData(hexImage);
    this.app.render();
    return this.weighRect(shape, shape.getBounds());
  }

  workCurrentHex() {
    const { country, currentHex } = this.state;
    requestAnimationFrame(() => {
      const countryWeight = this.findShareOfCurrentHex();
      if (countryWeight) {
        currentHex.data.countryShares.set(country.iso3, countryWeight);
        this.countryContainer.removeChildren();
        if (!currentHex.data.countryShares.has('_BASE')) {
          this.findCurrentHexBase();
        } else {
          this.finishCurrentHex();
        }
      } else {
        this.finishCurrentHex();
      }
    });

  }

  finishCurrentHex() {
    const { countryHexes, hexIndex, iso3, currentHex } = this.state;
    this.model.sendCurrentHexShare(iso3,
      currentHex.key,
      currentHex.data.countryShares.get(iso3),
      currentHex.data.countryShares.get('_BASE_'));
    if (countryHexes.length === hexIndex + 1) {
      this.allHexesDone();
    } else {
      this.setState({ hexIndex: hexIndex + 1 }, () => {
        this.workCountryHexes();
      });
    }
  }

  findCurrentHexBase() {
    requestAnimationFrame(() => {
      const { currentHex } = this.state;
      this.countryContainer.removeChildren();
      const hexFull = this.hexGraphics(currentHex, 'fill', null, BEIGE);
      this.countryContainer.addChild(hexFull);
      this.app.render();

      const baseWeight = this.weighRect(hexFull.getBounds());
      currentHex.data.countryShares.set('_BASE_', baseWeight);
      this.finishCurrentHex();
    });
  }

  render() {
    const { height, width, state } = this;
    const { iso3 } = this.state;
    return (
      <ModelContext.Consumer>
        {(model) => {
          this.model = model;

          return (
            <>
              <Box direction="row" gap="medium" margin="large">
                <Text>Country {state.render || ''}</Text>
                <TextInput name='country' value={iso3 || ''} onChange={this.changeCountry}/>
                <Button label="Analyze" primary onClick={this.beginWorkOnCurrentCountry}/>
                <Button label="Next" primary onClick={this.nextCountry}/>
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
