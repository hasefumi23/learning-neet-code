/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        const rowMap = {};
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") continue;

            if (rowMap[board[i][j]] == null) {
                rowMap[board[i][j]] = true;
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        const colMap = {};
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === ".") continue;

            if (colMap[board[j][i]] == null) {
                colMap[board[j][i]] = true;
            } else {
                return false;
            }
        }
    }

    const targets = [
        [1, 1], [1, 4], [1, 7],
        [4, 1], [4, 4], [4, 7],
        [7, 1], [7, 4], [7, 7]
    ];
    for (let i = 0; i < targets.length; i++) {
        const nums = targets[i];
        for (let j = 0; j < 3; j++) {
            if (!isCorrect(board, nums[0], nums[1])) return false;
        }
    }

    return true;
};

function isCorrect(board: string[][], row: number, col: number) {
    const map = {};
    const nums = [-1, 0, 1];
    let isCorrect = true;
    nums.forEach((rowDiff) => {
        nums.forEach((colDiff) => {
            if (board[row + rowDiff][col + colDiff] === ".") return;

            if (map[board[row + rowDiff][col + colDiff]] == null) {
                map[board[row + rowDiff][col + colDiff]] = true;
            } else {
                isCorrect = false;
            }
        });
    });
    // console.log(`row=${row},col=${col},map=${JSON.stringify(map)}`);

    return isCorrect;
}
// @lc code=end

let str =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".","0","8",".",".","7","9"]]

str =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// let ans;
// ans = isValidSudoku(str);
// console.log(`ans=${ans}`);
