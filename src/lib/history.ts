export function pushHistoryState(state: Record<string, string>) {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(state)) {
    params.set(key, value);
  }
  history.pushState(state, "", "?" + params.toString());
}
