type MultRow = [number, number];
type MultTable = MultRow[];

export default function rpm(x: number, y: number): number {
  let multTable: MultTable = [];

  multTable.push([x, y]);

  return rpmWorker(multTable);
}


const rpmWorker: (multTable: MultTable) => number = (multTable) => {
  const lastRow: MultRow = multTable[multTable.length - 1];

  console.log(multTable);

  if ([-1, 1, 0].includes(lastRow[0])) {
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

  multTable.push([Math.floor(lastRow[0] >> 1), lastRow[1] << 1]);

  return rpmWorker(multTable);
};
