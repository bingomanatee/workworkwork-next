import { useContext } from "react";
import ModelContext from "./ModelContext";
import { Box, Text } from "grommet";

export function DataScale() {
  const model = useContext(ModelContext);

  let numbers = [0]

  for (let n = 4; n < 29; ++n) {
    numbers.push(Math.round(10 ** (n / 4)));
  }

  return <Box direction="row" gap="2px" justify="stretch">
    {numbers.map((n) => (
      <Box key={n} direction="column" width="5rem" >
        <Box justify="end" background={model.valueToColor(n).toString({format: 'hex'})} width="100%" height="2.5rem">
          <Text textAlign="center" color="white" size="xsmall">{n}</Text>
          <Text textAlign="center" color="grey" size="xsmall">{model.valueToColor(n).toString({format: 'hex'})}</Text>
        </Box>
      </Box>
    ))}
  </Box>
}
