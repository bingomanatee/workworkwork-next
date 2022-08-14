import React, { useContext, useEffect, useMemo } from 'react';
import { Box, Button, Heading, Layer, Spinner, Tab, Tabs, Text } from 'grommet';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { create, enums } from '@wonderlandlabs/collect';
import { constants } from '@wonderlandlabs/carpenter';
import ModelContext from '../components/ModelContext';
import EditTask from '../components/EditTask';
import TitleBar from '../components/TitleBar';
import DelayedDataTable from '../components/DelayedDataTable';
import { Iso3Label, IsoCountContext as IsoCountContext1 } from '../components/Iso3Label';
import  LocationMap  from '../components/LocationMap';
import CountryMap from '../components/CountryMap';

const { FormEnum } = enums;

dayjs.extend(relativeTime);

function countFields(data, field) {
  const map = create(new Map());
  if (!Array.isArray(data)) {
    return map;
  }
  return data.reduce((m, item) => {
    const quality = create(item);
    if (quality.form === FormEnum.scalar) {
      return map;
    }
    const fieldValue = quality.get(field);

    if (m.hasKey(fieldValue)) {
      m.set(fieldValue, m.get(fieldValue) + 1);
    } else {
      m.set(fieldValue, 1);
    }

    return map;
  }, map)
    .filter((count) => count > 1);
}

const Locations = () => {
  const [show, setShow] = React.useState(false);
  const [locations, setLocations] = React.useState(null);
  const [hexes, setHexes] = React.useState(null);
  const [countries, setCountries] = React.useState(null);
  const [iso, setIso] = React.useState(null);
  const model = useContext(ModelContext);

  const LOC_COLS = [
    {
      property: 'iso3',
      header: 'ISO',
      render: (location) => (<Iso3Label onClick={() => setIso(location.iso3)} iso3={location.iso3}/>),
    },
    {
      property: 'name',
      header: 'Name',
    },
    {
      property: 'latitude',
      header: 'Lat',
      size: 'small',
    },
    {
      property: 'longitude',
      header: 'Lon',
      size: 'small',
    },
    {
      property: 'population',
      header: 'Pop',
      size: 'small',
    },
    {
      property: 'hex_shares', header: 'Hexes',
      size: 'f', render: (data) => {
        return data.hex_shares.length || 0;
      },
    },
  ];

  const COLS = useMemo(() => {
    if (iso) {
      return LOC_COLS.filter(c => c.property !== 'iso3');
    }
    return LOC_COLS;
  }, [iso]);

  useEffect(() => {
    const sub = model.base.stream({
      tableName: 'countries',
    }, (records) => {
      setLocations(records.map(r => r.data));
    });

    const hexSub =  model.base.stream({
      tableName: 'hexes',
    }, (records) => {
      setHexes(records);
    });

    model.pollHexes();
    model.pollCountries();

    const countrySub = model.base.stream({
      tableName: 'countries',
    }, (records) => {
      setCountries(records);
    });

    return () => {
      sub.unsubscribe();
      hexSub.unsubscribe();
      countrySub.unsubscribe();
    };
  }, [model]);

  const iso3Counts = useMemo(() => {
    if (Array.isArray(locations)) {
      return locations.reduce((memo, loc) => {
        if (loc.iso3) {
          memo.set(loc.iso3, 1 + (memo.has(loc.iso3) ? memo.get(loc.iso3) : 0));
        }

        return memo;
      }, new Map());
    }
    return new Map();
  }, [locations]);

  const data = useMemo(() => iso ? locations.filter((l) => l.iso3 === iso) : locations, iso);

  const subgroup = useMemo(() => {
    if (!iso) {
      return '';
    }
    const states = countFields(data, 'province_state');
    if (states.size > 1) {
      return 'province_state';
    }
    return null;
  }, [iso, data]);

  if (!hexes) {
    return <Spinner size="large" />;
  }

  return (
    <IsoCountContext1.Provider value={iso3Counts}>
      <Box pad="large">
        <TitleBar
          label="Locations"
        />
        <Tabs>
          <Tab title="data">
            <Box margin={{ top: 'medium', bottom: 'medium' }}>
              <Text size="small">
                <b>Subgroup</b>: {subgroup}, <b>iso</b>: {iso}
              </Text>
            </Box>
            <Box align="start" overflow="auto">
              {iso ? <Box fill="horizontal" direction="row" justify="between">
                <Heading level="3">Viewing locations in iso &quot;{iso}&quot;</Heading>
                <Button label="View All ISOs" onClick={() => setIso(null)}/>
              </Box> : null}
              <DelayedDataTable
                data={data}
                cols={COLS}
                count={iso3Counts}
                tableParams={{
                  groupBy: iso ? subgroup : 'iso3',
                  pin: true,
                  step: 200,
                  sort: { direction: 'asc', property: 'uid' },
                }}
              />
            </Box>
          </Tab>
          <Tab title="Map">
            <Box>
              <LocationMap hexes={hexes} locations={locations} />
            </Box>
          </Tab>
          <Tab title="Countries">
            <Box>
              <CountryMap hexes={hexes} locations={locations} countries={countries} />
            </Box>
          </Tab>
        </Tabs>
            {show && <Layer>
              <EditTask
                update={() => {
                  setShow(false);
                }
                }/>
            </Layer>}
      </Box>
</IsoCountContext1.Provider>
)
  ;
};

export default Locations;
