import { LaunchProps } from './components/LaunchItem';

export const spaceXAPIEndpoint = "https://api.spacexdata.com/v3/launches";

export function processSpaceXAPIItem(item : any) : LaunchProps {
    return {
        number: item["flight_number"],
        name: item["mission_name"],
        date: new Date(item["launch_date_utc"]),
        ship: item["rocket"]["rocket_name"],
    }
}

export function processSpaceXAPI(item : any) {
    return item.map(processSpaceXAPIItem);
}
