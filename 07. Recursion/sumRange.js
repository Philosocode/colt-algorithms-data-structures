function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

/*
sumRange(3)
  RETURN 3 + sumRange(2)
             RETURN 2 + sumRange(1)
                        RETURN 1
            RETURN 3
  RETURN 6

sumRange(4)
           -> 4 + sumRange(3)
                             -> 3 + sumRange(2)
                                               -> 2 + sumRange(1)
                                               -> RETEURN 3
                                RETURN 6
              RETURN 10
*/

console.log(sumRange(3));