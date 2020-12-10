import React from 'react';
import { FunctionComponent } from 'react';
import { LaunchProps, LaunchItem } from './LaunchItem';

export const LaunchList: FunctionComponent<{ items: Array<LaunchProps> }> = ({ items }) =>
    <ul>
        {items.map(item => (
            <li>
                <LaunchItem
                    number={item.number}
                    name={item.name}
                    date={item.date}
                    ship={item.ship}
                />
            </li>))}
    </ul>
