import React from 'react';
import { FunctionComponent } from 'react';

import SortIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';

type SortButtonProps = {
    className: string,
    descending: boolean,
    setDescending: any
}

export const SortButton: FunctionComponent<SortButtonProps> = ({ className, descending, setDescending }) =>
    <Button
        variant="contained"
        className={className}
        endIcon={<SortIcon />}
        onClick={() => setDescending(!descending)}
    >Sort {descending ? "Descending" : "Ascending"}</Button>
