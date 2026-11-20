/** Pure calculator math. All money is integer cents to avoid float drift. */

/** Sum of monthly prices (cents). */
export function monthlyTotal(selected: readonly number[]): number {
  return selected.reduce((sum, c) => sum + c, 0);
}

/** Monthly prices (cents) x 12 = yearly spend in cents. */
export function yearlyTotal(selected: readonly number[]): number {
  return monthlyTotal(selected) * 12;
}

/** The 3 most expensive selected (all of them if fewer than 3) x 12, in cents per year. */
export function typicalSavings(selected: readonly number[]): number {
  const top3 = [...selected].sort((a, b) => b - a).slice(0, 3);
  return monthlyTotal(top3) * 12;
}

/** Whole dollars, rounded down (the page never overstates what you save). */
export function wholeDollars(cents: number): number {
  return Math.floor(cents / 100);
}

/** "$15.49" */
export function formatCents(cents: number): string {
  const value = (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `$${value}`;
}

/** "$1,121" */
export function formatDollars(dollars: number): string {
  return `$${dollars.toLocaleString("en-US")}`;
}
