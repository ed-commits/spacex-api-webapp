import React from 'react';
import { FunctionComponent } from 'react';

type LaunchProps = {
    number: number,
    name: string,
    date: Date,
    ship: string
}

export const LaunchItem: FunctionComponent<LaunchProps> = ({ number, name, date, ship }) =>
    <div className="item">
        <span className="item__number">#{number}</span>
        <span className="item__name">{name}</span>
        <div className="item__subinfo">
            <span className="item__date">{new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }).format(date)}</span>
            <span className="item__ship">{ship}</span>
        </div>
    </div>
