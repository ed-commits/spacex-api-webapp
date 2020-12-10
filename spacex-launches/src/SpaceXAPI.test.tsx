import { expect } from 'chai';
import 'mocha';

import { processSpaceXAPIItem, processSpaceXAPI } from './SpaceXAPI';
import { spaceXTestData } from './SpaceXAPITestData';
import { LaunchProps } from './components/LaunchItem';

describe('Test that mocha is working',
    () => {
        it('should return true', () => {
            const result = true;
            expect(result).to.equal(true);
        });
    });

const expectedItem1: LaunchProps = {
    number: 1,
    name: "FalconSat",
    date: new Date("24 Mar 2006 22:30"),
    ship: "Falcon 1",
};

describe('Test processing a single launch item',
    () => {
        it('should equal the expected result', () => {
            const result = processSpaceXAPIItem(spaceXTestData[0]);
            expect(result).to.eql(expectedItem1);
        });
    });

const expectedItem2: LaunchProps = {
    number: 2,
    name: "DemoSat",
    date: new Date("2007-03-21T01:10:00.000Z"),
    ship: "Falcon 1",
};

describe('Test processing a second launch item',
    () => {
        it('should equal the expected result', () => {
            const result = processSpaceXAPIItem(spaceXTestData[1]);
            expect(result).to.eql(expectedItem2);
        });
    });

describe('Test processing the whole API response',
    () => {
        it('the first two items should match', () => {
            const result = processSpaceXAPI(spaceXTestData);
            expect(result[0]).to.eql(expectedItem1);
            expect(result[1]).to.eql(expectedItem2);
        });
    });
