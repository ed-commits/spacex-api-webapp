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

export const LaunchList: FunctionComponent<{ items: Array<LaunchProps>, descendingOrder: boolean }> = ({ items, descendingOrder }) =>
    <ul>
        {reverseIf(items, !descendingOrder).map(item => (
            <li>
                <LaunchItem
                    number={item.number}
                    name={item.name}
                    date={item.date}
                    ship={item.ship}
                />
            </li>))}
    </ul>
