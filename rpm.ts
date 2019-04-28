type MultRow = [number, number];
type MultTable = MultRow[];

export default function rpm(x: number, y: number): number {
  let multTable: MultTable = [];

  const startingRow: MultRow = [Math.abs(x), Math.abs(y)];

  multTable.push(startingRow);

  const rpmResult: number = rpmWorker(multTable);

  if (Math.sign(x) !== Math.sign(y) && rpmResult !== 0) {
    return rpmResult * -1;
  }

  return rpmResult;
}

const rpmWorker: (multTable: MultTable) => number = (multTable) => {
  const lastRow: MultRow = multTable[multTable.length - 1];

  if (lastRow[0] <= 1) {
    return multTable
      .map((row: MultRow): MultRow => {
        let [left, right]: [number, number] = row;
        right = (() => {
          if (left & 1) {
            return right;
          }

          return 0;
        })();

        return [left, right];
      })
      .reduce((acc, row) => {
        return acc + row[1];
      }, 0);
  }

  multTable.push([Math.floor(lastRow[0] / 2), lastRow[1] * 2]);

  return rpmWorker(multTable);
};
