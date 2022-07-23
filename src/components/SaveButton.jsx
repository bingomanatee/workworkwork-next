import { Add, Save } from 'grommet-icons';
import { Button } from 'grommet';

export const SaveButton = ({ id, valid, saving })=> (<Button
    disabled={(saving || (!valid))} type="submit"
    icon={id ? <Save/> : <Add/>} primary label="Submit"/>);

export default SaveButton;
