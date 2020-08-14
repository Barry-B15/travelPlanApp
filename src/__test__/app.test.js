import { performAction, getGeoNames } from "../client/js/app.js";

test("Function performAction, should be defined", () => {
    expect(performAction).toBeDefined();
});

describe("getGeoNames, handles city names", () => {
    test('it should be a const', () => {
        expect(getGeoNames).toBeDefined();
    });
});