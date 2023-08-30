let counters: Record<string, number> = {};

export async function incrementCounter(key: string): Promise<number> {
  if (!counters[key]) {
    counters[key] = 0;
  }

  counters[key]++;

  return counters[key];
}