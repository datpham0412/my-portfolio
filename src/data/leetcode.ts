export interface LeetCodeHighlight {
  title: string;
  url: string;
  difficulty: "Easy" | "Medium" | "Hard";
  language: string;
  description: string;
  upvotes: number | null;
}

export const leetcodeHighlights: LeetCodeHighlight[] = [
  {
    title: "Number of Arithmetic Triplets",
    url: "https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5049086/5-methods-c-java-python-beginner-friendl-1i26/",
    difficulty: "Easy",
    language: "Python",
    description:
      "Identifies and counts all triplets in a sorted array whose consecutive elements differ by a given value.",
    upvotes: 169,
  },
  {
    title: "Check Distances Between Same Letters",
    url: "https://leetcode.com/problems/check-distances-between-same-letters/solutions/5052889/3-methods-c-java-python-beginner-friendl-ha9v/",
    difficulty: "Easy",
    language: "Java",
    description:
      "Validates number of characters between each pair of same letters in a string matches a given distance array using O(n) hashmap or array lookups.",
    upvotes: 4,
  },
  {
    title: "Find Subarrays With Equal Sum",
    url: "https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5056834/c-beat-100-unordered_set-by-datpham0412-u253/",
    difficulty: "Medium",
    language: "C++",
    description:
      "Finds all subarrays with equal sums using a hash map for efficient O(n) solution with detailed comments.",
    upvotes: null,
  },
  {
    title: "Largest Positive Integer That Exists With Its Negative",
    url: "https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/",
    difficulty: "Easy",
    language: "Python",
    description:
      "Finds the largest positive integer that exists with its negative using a hash set for efficient O(n) solution with detailed comments.",
    upvotes: null,
  },
  {
    title: "Number of Distinct Averages",
    url: "https://leetcode.com/problems/number-of-distinct-averages/solutions/5057388/c-java-python-beat-100-unordered_set-by-4oopm/",
    difficulty: "Easy",
    language: "Java",
    description:
      "Finds the number of distinct averages by sorting and using a hash set for efficient O(n log n) solution with detailed comments.",
    upvotes: null,
  },
  {
    title: "Count Pairs Whose Sum Is Less Than Target",
    url: "https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/5060826/c-java-python-two-pointers-by-datpham041-a8x5/",
    difficulty: "Easy",
    language: "C++",
    description:
      "Finds the number of pairs whose sum is less than target using two pointers for efficient O(n log n) solution with detailed comments.",
    upvotes: null,
  },
];
