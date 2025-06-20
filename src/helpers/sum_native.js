export default function sumNative(nums = [], target = 0) {
  if (nums.length === 0) return false;
  return (
    nums.findIndex((_, i) =>
      nums.slice(i + 1).some((num) => num + nums[i] === target)
    ) >= 0
  );
}
