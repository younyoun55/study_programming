import unittest

from ex01_sum import sum_numbers


class TestSumNumbers(unittest.TestCase):
    def test_basic(self):
        self.assertEqual(sum_numbers([1, 2, 3]), 6)

    def test_empty(self):
        self.assertEqual(sum_numbers([]), 0)

    def test_negative(self):
        self.assertEqual(sum_numbers([-1, 5, -4]), 0)


if __name__ == "__main__":
    unittest.main()
