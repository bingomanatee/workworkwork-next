import { Box, Text } from 'grommet';


export default ({ data, skipIfEmpty = true, expand = true, ifEmpty = '', size = 'small' }) => {
  if (!data && skipIfEmpty) {
    return ifEmpty;
  }
  try {
    if (!expand) {
      const dataString = JSON.stringify(data);
      return (
        <Box fill="horizontal" overflow="auto">
        <Text as="pre" size={size} truncate>
          {dataString}
        </Text>
      </Box>
      );
    }

    const dataString = JSON.stringify(data, true, 2);
    return (
      <Box fill="horizontal" overflow="auto">
        <Text size={size}>
          <pre>
            {dataString}
          </pre>
        </Text>
      </Box>
    );
  } catch (err) {
    return skipIfEmpty ? ifEmpty : <Box fill="horizontal">{ifEmpty}</Box>;
  }

};
