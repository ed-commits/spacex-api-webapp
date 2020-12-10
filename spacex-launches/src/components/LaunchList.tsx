import React from 'react';
import { FunctionComponent } from 'react';
import { LaunchProps, LaunchItem } from './LaunchItem';

function reverseIf(array: any[], rev: boolean) {
    if (rev) {
        return array.slice(0).reverse();
    }
    else {
        return array;
    }
}

function byDateRange(dateRange : null | [Date, Date]) {
    return function (item : LaunchProps) {
        if (dateRange == null) {
            return true;
        }
        else {
            let beginDate = dateRange[0];
            let endDate = dateRange[1];
            return beginDate <= item.date && item.date < endDate;
        }
    }
}

export const LaunchList: FunctionComponent<{ items: Array<LaunchProps>, descendingOrder: boolean, yearRangeFilter: null | [Date, Date] }> = ({ items, descendingOrder, yearRangeFilter }) =>
    <ul>
        {reverseIf(items, !descendingOrder)
            .filter(byDateRange(yearRangeFilter))
            .map(item => (
                <li>
                    <LaunchItem
                        number={item.number}
                        name={item.name}
                        date={item.date}
                        ship={item.ship}
                    />
                </li>))}
    </ul>
