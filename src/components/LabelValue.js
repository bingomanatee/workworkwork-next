import React, { useContext, useMemo, useState } from 'react';
import { Box, Grid, ResponsiveContext, Text, TextInput } from 'grommet';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import { LV_GRID_L, LV_GRID_S } from './ux-constants';

const LabelValue = ({ label, children }) => {
  const size = useContext(ResponsiveContext);
  const LV = size === 'small' ? LV_GRID_S : LV_GRID_L;

  let info = children;
  if (Array.isArray(children)
    && children.length === 1) {
    // eslint-disable-next-line prefer-destructuring
    info = children[0];
  }

  return (
    <Grid {...LV}>
      <Box gridArea="label">
        <FormLabel>{label}</FormLabel>
      </Box>
      <Box gridArea="info">
        {['string', 'number'].includes(typeof(info))  ? <Text>{info}</Text> : info}
      </Box>
    </Grid>
  );
};

LabelValue.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string,  PropTypes.element]).isRequired,
  children:  PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.element]).isRequired,
};

export default LabelValue;
