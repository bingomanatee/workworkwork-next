import { Box, Text } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextStyled = styled(Text)`
  text-transform: uppercase;
`;

const FormLabel = ({ children, color='input' }) =>(
  <Box gridArea="label">
  <TextStyled color={color}>{children}</TextStyled>
</Box>
);

  FormLabel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
      .isRequired,
    color: PropTypes.string,
  };

  FormLabel.defaultProps = {
    color: 'brand',
  };

export default FormLabel;
