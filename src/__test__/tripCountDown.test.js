import { countdownDates, sum } from "../client/js/tripCountDown.js";
//import { TestScheduler } from "jest";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('current date is less than future date', () => {
    // var moment = require('moment'); // require
    // moment().format();

    const today = 13;
    const nextDate = 20;

    expect(today).toBeLessThan(nextDate);
    expect(today).toBe(13);
    expect(nextDate).toEqual(20);
    expect(nextDate).toBeGreaterThan(today);
    expect(today).not.toBe(nextDate);
});