import jsdom from "jsdom";
import { vi } from "vitest";
import { addPtoBody, sleep } from "./utils";
const { JSDOM } = jsdom;

describe("mutation observer tests", () => {
  beforeEach(() => {
    const html = "<!DOCTYPE html><body></body></html>";
    const jsdom = new JSDOM(html);
    global.document = jsdom.window.document;
  });

  
  test("MutationObserver exist",()=>{
    expect(MutationObserver).toBeDefined()
  })

  test("MutationObserver callback is called but sleep is required",async () => {
    // Define the MutationObserver callback function
    const observerCallback = vi.fn();
  
    // Create a new MutationObserver
    const observer = new MutationObserver(observerCallback);
    observer.observe(document, { childList: true, subtree: true  });
    // Trigger a mutation 
    addPtoBody(1);
    await sleep(0);
  
    // Check if the observer's callback function was called
    expect(observerCallback).toHaveBeenCalled();
  });
})
  

