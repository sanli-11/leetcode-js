function insertInterval(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length < 1) return [newInterval];

    let insertS = false, insertE = false;
    let start = [], end = [];

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0]) start.push(intervals[i])
        if (intervals[i][1] > newInterval[1]) end.push(intervals[i])
    }

    if (start.length > 0) {
        if (newInterval[0] <= start.at(-1)![1]) {
            if (start.at(-1)![1] < newInterval[1]) start.at(-1)![1] = newInterval[1]

            insertS = true;
        }
    }
    if (end.length > 0) {
        if (newInterval[1] >= end[0][0]) {
            if (end[0][0] > newInterval[0]) end[0][0] = newInterval[0]

            insertE = true;
        }
    }

    if (insertS && insertE) start.at(-1)![1] = end.shift()![1]
    else if (!(insertS || insertE)) start.push(newInterval);


    return start.concat(end);
};

export { insertInterval };
