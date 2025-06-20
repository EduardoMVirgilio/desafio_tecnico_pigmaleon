export default function sumOptimist(nums = [], target = 0) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;
    if (seen.has(complement)) {
      return true;
    }
    seen.set(current, i);
  }

  return false;
}
