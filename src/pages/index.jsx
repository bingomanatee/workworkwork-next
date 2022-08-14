import { useContext, useEffect, useMemo, useState } from 'react';
import { Box, Button, Layer, Select, Spinner, Stack, Text } from 'grommet';
import { Canvas, useThree } from 'react-three-fiber';
import ModelContext from '../components/ModelContext';
import { a, useSpring } from '@react-spring/three'
import * as THREE from 'three';
import { useDrag } from 'react-use-gesture';
import { Leaf, isNum } from '@wonderlandlabs/forest';
import dayjs from "dayjs";
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
import _ from 'lodash';
import { BLACK } from "../components/model";
dayjs.extend(isSameOrAfter)

const CONTINENTS = ['all', 'Africa', 'Europe', 'North America', 'Asia', 'Australia'];

let ThreeGlobe = null;
if (typeof window !== 'undefined') {
  ThreeGlobe = require('three-globe').default;
}

function Inspector({ responsiveness = 20, children }) {
  const { size } = useThree()
  const euler = useMemo(() => new THREE.Euler(), [])
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }))
  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * responsiveness
    euler.x += (dy / size.width) * responsiveness
    euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2)
    set({ rotation: euler.toArray().slice(0, 3) })
  })
  return (
    <a.group {...bind()} {...spring}>
      {children}
    </a.group>
  )
}

const GlobeView = () => {
  const model = useContext(ModelContext);
  const leaf = useMemo(() => new Leaf(
    {
      geoJson: null,
      time: 0,
      continent: 'all',
      animate: false,
      animationInterval: 0.25,
      globe: null,
    },
    {
      selectors: {
        currentDate({ time }) {
          let date = dayjs(new Date(2020, 0, 1));
          return date.add(time, 'd');
        },
        features({ geoJson, continent }) {
          if (!geoJson) {
            return null;
          }
          if (continent === 'all') {
            return geoJson;
          }
          const some = geoJson.filter((f) => {
            return f.properties.CONTINENT === continent
          });

          return some;
        },
      },

      actions: {
        colorFn (leaf, country) {
          const {properties} = country;
          const iso = properties.WB_A3;
          const key = `${iso}-deaths`;
          const pivot = model.base.table('pivots').getData(key);
          if (!pivot) {
            return BLACK.toString('srgb');;
          }
          const {offset, st, data} = pivot;

          const currentTime = leaf.selector('currentDate');

          const pivotStartTime = dayjs(st).add(offset, 'd');
          const index = currentTime.diff(pivotStartTime, 'd');


          if (index < 0) return BLACK.toString('srgb');

          if (index >= data.length) {
            return model.valueToColor(data[data.length - 1]);
          }
          return model.valueToColor(data[index]).toString('srgb');
      },
        toggleAnimate(leaf) {
          leaf.do.setAnimate(!leaf.value.animate);
          if (leaf.value.animate) {
            leaf.do.next();
          }
        },
        next(leaf) {
          if (!leaf.value.animate) {
            return;
          }

          const currentTime = leaf.selector('currentDate');
          if (currentTime.isSameOrAfter(new Date())) {
            return;
          }
          setTimeout(leaf.do.advanceTime, leaf.value.animationInterval);
        },
        advanceTime(leaf) {
          leaf.do.setTime(leaf.value.time + 1);
          leaf.do.next();
        },
        loadGeoJson(leaf) {
          model.getGeoJson()
            .then((data) => {
              leaf.do.setGeoJson(data);
            });
        }
      }
    }
  ), []);

  useEffect(() => {
    const sub = leaf.subscribe(setState);
    leaf.do.loadGeoJson();
    return () => sub.unsubscribe();
  }, [leaf]);

  useEffect(() => {
    model.getField('deaths');
  }, [])

  const [state, setState] = useState(null);

  const { geoJson, continent = 'all', time, animate, $currentDate, $features } = (state || {});

  const globe = useMemo(() => {
    if ((!ThreeGlobe) || (!leaf.selector('features'))) {
      return null;
    }
    const globe = new ThreeGlobe({ animateIn: false })
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .hexPolygonsData(leaf.selector('features'))
      .hexPolygonResolution(continent === 'all' ? 3 : 4)
      .hexPolygonMargin(0.1)
      .hexPolygonColor(leaf.do.colorFn);
    /*.hexPolygonLabel(({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        Population: <i>${d.POP_EST} </i>
      `);*/
    return globe;
  }, [continent, geoJson, ThreeGlobe]);

  useEffect(() => {
    if (globe) {
      console.log('--- advancing features')
      globe.hexPolygonsData([...$features]);
    }

  }, [time, globe, continent])

  /*  const [geoJson, setGJ] = useState(null);
    const [time, setTime] = useState(0);
    const colorFn = useMemo(() => () => `#${Math.round(Math.random() * (2 ** 24)).toString(16).padStart(6, '0')}`, []);
    const [globeColors, setGC] = useState([]);
    const [continent, setCon] = useState('Asia');

    const features = useMemo(() => {
      if (!geoJson) {
        return null;
      }
      if (continent === 'all') {
        return geoJson;
      }
      const some = geoJson.filter((f) => {
        return f.properties.CONTINENT === continent
      });
      console.log('some: ', some);
      return some;
    }, [geoJson, continent])
  */

/*  const Globe = useMemo(() => {
    if ((!ThreeGlobe) || (!$features)) {
      return null;
    }
    const globe = new ThreeGlobe({ animateIn: false })
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .hexPolygonsData($features)
      .hexPolygonResolution(continent === 'all' ? 3 : 4)
      .hexPolygonMargin(0.1)
      .hexPolygonColor(leaf.do.colorFn);
    /!*.hexPolygonLabel(({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        Population: <i>${d.POP_EST}</i>
      `);*!/
    return globe;
  }, [continent]);*/

/*  useEffect(() => {
    let animate = true;

    function changeData() {
      if (globe) {
        globe.hexPolygonsData([...$features]);
      }
      if (animate) {
        requestAnimationFrame(changeData);
      }
    }

    changeData();
    return () => animate = false;
  }, [globe])*/

  /*  useEffect(() => {
      model.getGeoJson()
        .then((data) => {
          console.log('--- data fetched:', data);
          setGJ(data);


        });
    }, []);*/

  if (!geoJson || !globe) {
    return <Spinner size="large"/>;
  }

  return <>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Canvas>
        <ambientLight color="#cddbfe"/>
        <directionalLight color="#cddbfe"/>
        <pointLight position={[10, 10, 10]}/>
        <mesh position={[-40, -20, -140]}>
          <Inspector>
            <primitive object={globe}/>
          </Inspector>
        </mesh>
      </Canvas>
    </div>
    <Layer plain position="top-right" modal={false} fill="horizontal">
      <Box style={{ zIndex: 10000 }} align="baseline" pad="small" direction="row-reverse" gap="medium"
           fill="horizontal">
        <Box pad="small">
          <Text color="white">Continent</Text>
        </Box>
        <Box background="#FFF">
          <Select options={CONTINENTS} value={continent}
                  valueLabel={(option) => (<Box pad="2px" fill="horizontal" background="#FFF">
                    <Text>{option}</Text>
                  </Box>)}

                  onChange={({ value }) => leaf.do.setContinent(value)}>
            {(option) => (<Box pad="small" fill="horizontal" background="#FFF"><Text>{option}</Text></Box>)}
          </Select>
        </Box>

        {
          <Button color="black" label={animate ? 'Stop' : 'Animate'} primary onClick={leaf.do.toggleAnimate}></Button>
       }

        {animate ? <Text>{$currentDate.format('MMM DD YY')} ({time})</Text> : ''}
      </Box>
    </Layer>
  </>;
};

export default GlobeView
