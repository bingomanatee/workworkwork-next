import { Box, DataTable, Paragraph, Spinner } from 'grommet';

export const DelayedDataTable = ({ data, cols, tableParams = {} }) => (
  data ?
    <DataTable fill sort columns={cols} data={data} {...tableParams}  />
 : <>
    <Spinner/>
    <Paragraph
      size="small">Loading...</Paragraph>
  </>
);

export default DelayedDataTable;
