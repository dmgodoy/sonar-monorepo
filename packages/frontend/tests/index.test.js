const { renderGreeting, toggleClass } = require("../src/index");

describe("renderGreeting", () => {
  it("renders a greeting with a name", () => {
    const container = document.createElement("div");
    renderGreeting("Alice", container);
    expect(container.textContent).toBe("Hello, Alice!");
  });

  it("renders a fallback when name is empty", () => {
    const container = document.createElement("div");
    renderGreeting("", container);
    expect(container.textContent).toBe("Hello, stranger!");
  });
});

describe("toggleClass", () => {
  it("adds a class when not present", () => {
    const el = document.createElement("div");
    toggleClass(el, "active");
    expect(el.classList.contains("active")).toBe(true);
  });

  it("removes a class when already present", () => {
    const el = document.createElement("div");
    el.classList.add("active");
    toggleClass(el, "active");
    expect(el.classList.contains("active")).toBe(false);
  });
});
