const target = 9;
const nums = [2, 7, 11, 15];

function check_one_number(mIndex) {

    const mNumber = nums[mIndex];
    console.log('memory Index:' + mIndex)
    console.log('Memory Number :' + mNumber);

    var output = null;

    nums.forEach(function (val, key) {
            console.log('key of arr:' + key + ' ' + 'value of arr:' + val)

            if (mNumber == val) {
                return;
            }
            if (mNumber + val == target) {

                output = [mNumber, val]
                return false;

            }
        }
    );

    if (output) {
        return output;
    }
    /**
     * Check other memory number of arr
     */
    if (mIndex <= nums.length - 1) {
        return check_one_number(mIndex + 1);

    }

}

result = check_one_number(0);
document.write('output:' + result);
