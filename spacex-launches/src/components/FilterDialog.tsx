import React from 'react';
import { FunctionComponent } from 'react';
import { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SelectIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';

type FilterDialogProps = {
    className: string,
    setYearFilter: any,
}

export const FilterDialog: FunctionComponent<FilterDialogProps> = function ({ className, setYearFilter }) {
    const [option, setOption] = useState("0-3000");
    const [open, setOpen] = useState(false);

    const parseDateRange = (dateRange : string) : null | [Date, Date] => {
        let endpoints = dateRange.split(/-/);
        if(endpoints.length == 2) {
            let startDate = endpoints[0] === "today" ? new Date() : new Date(endpoints[0]);
            let endDate = new Date(endpoints[1]);
            return [startDate, new Date(endDate.getFullYear(), 11, 31)]
        }
        else {
            return null;
        }
    }

    const handleChange = (event: any) => {
        setOption(event.target.value);
        setYearFilter(parseDateRange(event.target.value))
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <>
        <Button
            variant="contained"
            className={className}
            endIcon={<SelectIcon />}
            onClick={handleOpen}
        > Filter by Year</Button >

        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Filter by Year</DialogTitle>
            <DialogContent>
                    <FormControl>
                        <Select
                            value={option}
                            onChange={handleChange}
                            input={<Input />}
                        >
                            <MenuItem value="0-3000">Any year</MenuItem>
                            <MenuItem value="2006-2010">2006 to 2010</MenuItem>
                            <MenuItem value="2010-2015">2010 to 2015</MenuItem>
                            <MenuItem value="2015-2020">2015 to 2020</MenuItem>
                            <MenuItem value="2020-2020">2020</MenuItem>
                            <MenuItem value="today-3000">Upcoming</MenuItem>
                        </Select>
                    </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    Ok
          </Button>
            </DialogActions>
        </Dialog>

    </>
}
