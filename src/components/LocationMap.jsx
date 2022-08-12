import React, { Component } from 'react';
import { withSize } from 'react-sizeme';
import _ from 'lodash';
import { getRes0Indexes, geoToH3 } from 'h3-js';
import * as PIXI from 'pixi.js';
import { Box, Spinner, Stack } from 'grommet';
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

function lerp(n, min, max, scale = 1) {
  const dist = max - min;
  return scale * _.clamp((n - min) / dist, 0, 1);
}

export class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { height: '50vh' };
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    const { width, height } = prevProps.size;
    const { size } = this.props;
    if (size.width && size.height && width !== size.width || (height !== size.height)) {
      if (!this.app) {
        this.init();
      }
      this.draw();
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  get width() {
    if (this.props.size) {
      return this.props.size.width;
    }
    return 0;
  }

  get height() {
    if (this.props.size) {
      return this.props.size.height;
    }
    return 0;
  }

  degToXY(lat, lon) {
    const [minLat, minLon, maxLat, maxLon] = this.extent;
    const x = lerp(lon, minLat, maxLat, this.width);
    const y = this.height - lerp(lat, minLon, maxLon, this.height);
    return { x, y };
  }

  drawFill() {
    const { width, height } = this.props.size;
    this.filler.clear();
    this.filler.beginFill(PIXI.utils.rgb2hex([1, 0.5, 0]))
      .drawRect(0, 0, width, height)
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

  drawLocs() {
    this.locationContainer.removeChildren();
    if (!this.props.locations) {
      return;
    }
    let graphics = new PIXI.Graphics();
    let locCount = 0;
    this.props.locations.forEach(({ latitude, longitude }) => {
      if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
        return;
      }
      const pt = this.degToXY(latitude, longitude);
      graphics.beginFill(PIXI.utils.rgb2hex([1, 1, 1]));
      graphics.drawCircle(pt.x, pt.y, 1.5);
      if (++locCount > 20) {
        this.locationContainer.addChild(graphics);
        graphics = new PIXI.Graphics();
        locCount = 0;
      }
    });
    if (locCount) {
      this.locationContainer.addChild(graphics);
    }
  }

  drawHex(hex) {

    const graphics = new PIXI.Graphics();
    graphics.lineStyle(1, HEX_LINE_COLOR);
    // eslint-disable-next-line no-underscore-dangle
    const locs = hex.joins ? hex.joins.get('locHexes') : null;

    hex.data.shapes.forEach((s) => {
      if (s.width > 200) {
        return;
      }
      const lastPoint = this.degToXY(...s.points[s.points.length - 1]);
      if (locs && locs.length > 0) {
        graphics.beginFill(HAS_LOC_COLOR);
      }
      graphics.moveTo(lastPoint.x, lastPoint.y);
      s.points.forEach((ll) => {
        const p = this.degToXY(...ll);
        graphics.lineTo(p.x, p.y);
      });
      if (hex.joins && hex.joins.hasKey('locHexes') && hex.joins.get('locHexes').length > 0) {
        graphics.endFill();
      }
    });

    this.hexContainer.addChild(graphics);
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

    console.log('join took ', Date.now() - start, 'ms');
    console.log('hexes:', this.model.base.table('hexes').data.size);
    console.log('locations:', this.model.base.table('locations').data.size);

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
    this.extent = this.map.getView().calculateExtent(this.map.getSize());
    this.drawFill();
    this.drawHexes();
    this.drawGrid();
    this.drawLocs();
    this.app.render();
  }

  init() {
    // Create the application
    if (!this.app && this.myRef.current && this.height) {

      this.app = new PIXI.Application({
        width: this.props.size.width,
        height: this.props.size.height,
        backgroundAlpha: 0,
        resizeTo: this.myRef.current,
      });

      this.filler = new PIXI.Graphics();
      this.filler.alpha = 0;
      this.app.stage.addChild(this.filler);
      this.hexContainer = new PIXI.Container();
      this.app.stage.addChild(this.hexContainer);
      this.lines = new PIXI.Graphics();
      this.app.stage.addChild(this.lines);
      this.locationContainer = new PIXI.Container();
      this.app.stage.addChild(this.locationContainer);
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

  render() {
    if (!this.props.hexes) {
      return <Spinner size="large"/>;
    }
    const { height, width } = this.props.size;
    return (
      <ModelContext.Consumer>
        {(model) => {
          this.model = model;

          return (
            <Box fill style={{ position: 'relative', minHeight: '50vh' }}>
              <Stack guidingChild={1} interctiveChild={1}>
                <Box fill>
                  <div
                    id="map-image" style={{
                    width: '100%',
                    height: '100%',
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
                <div style={{ position: 'absolute', width: 300, top: 0, right: 0 }}>
                  <div>width: {this.props.size.width}</div>
                  <div>height: {this.props.size.height}</div>
                </div>
              </Stack>
            </Box>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}

export default withSize({ monitorHeight: true, monitorWidth: true })(LocationMap);
