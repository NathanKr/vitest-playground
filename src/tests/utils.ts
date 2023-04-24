export function addPtoBody(index: number): void {
  document.body.innerHTML += `<p>${index}</p>;`;
}

export function addPtoBodyInFuture(index: number, timeoutMs = 100): void {
  setTimeout(() => {
    addPtoBody(index);
  }, timeoutMs);
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
