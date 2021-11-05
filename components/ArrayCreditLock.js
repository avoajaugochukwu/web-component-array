import { template, ErrorTemplate } from "../templates/index.js";
import readJson from "../api/api.js";
import createCreditItemFragment from "../utils/createCreditItemFragment.js";

class ArrayCreditLock extends HTMLElement {
  constructor() {
    super();
    this.data = [];
    this.showAllCreditHistory = false;
    this.numOfShownItems = 5;
    this.numOfRemainingItems = 0;
    this.hideLockHistory = false;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  render() {
    this.attachShadow({ mode: "open" });

    if (!this.getAttribute("url")) {
      this.shadowRoot.appendChild(ErrorTemplate.content.cloneNode(true));
      return;
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.displayCreditHistory();
    this.toggleFactsAndStep();
    this.toggleCreditHistory();
    this.toggleLockHistory();
  }

  async displayCreditHistory() {
    this.clearCreditHistoryList();

    /* If true, clear '<li>s' and get show All (n) text, which will be hidden, then exit method  */
    if (this.hideLockHistory) {
      this.getShowAllText();
      return;
    }

    const ul = this.shadowRoot.getElementById("credit-history-list");

    this.data = await readJson();

    this.numOfRemainingItems = this.data.length - this.numOfShownItems;
    this.getShowAllText();

    for (let index = 0; index < this.data.length; index++) {
      var li = document.createElement("li");
      var documentFragment = createCreditItemFragment(this.data[index]);

      li.classList.add("history-list");
      li.appendChild(documentFragment);

      /* if showAll is false, and number to display exceeded, exit loop  */
      if (index >= this.numOfShownItems && !this.showAllCreditHistory) {
        break;
      }

      ul.appendChild(li);
    }
  }

  clearCreditHistoryList() {
    const ul = this.shadowRoot.getElementById("credit-history-list");

    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  toggleCreditHistory() {
    const showAll = this.shadowRoot.querySelector(".show-all");

    showAll.addEventListener("click", () => {
      this.showAllCreditHistory = !this.showAllCreditHistory;
      this.displayCreditHistory();
    });
  }

  toggleLockHistory() {
    const historyTitle = this.shadowRoot.querySelector(".history-title");
    const transUnionFile = this.shadowRoot.querySelector(".transunion-file");

    historyTitle.addEventListener("click", () => {
      this.hideLockHistory = !this.hideLockHistory;
      // Reset list to only show 5 items whenever history is clicked
      this.showAllCreditHistory = false;
      this.displayCreditHistory();

      historyTitle.innerText = this.hideLockHistory
        ? "Show lock history"
        : "Hide lock history";

      transUnionFile.innerText = this.hideLockHistory
        ? "Your TransUnion File is Locked"
        : "Your TransUnion File is Open";
    });
  }

  getShowAllText() {
    const showAll = this.shadowRoot.querySelector(".show-all");

    showAll.style.display = this.hideLockHistory ? "none" : "block";

    showAll.innerText = this.showAllCreditHistory
      ? `Hide (${this.numOfRemainingItems})`
      : `Show All (${this.numOfRemainingItems})`;
  }

  toggleFactsAndStep() {
    const factHeaders = this.shadowRoot.querySelectorAll(".collapsible");

    factHeaders.forEach((factHeader) => {
      factHeader.addEventListener("click", () => {
        factHeader.classList.toggle("expanded");
      });
    });
  }
}

window.customElements.define("array-credit-lock", ArrayCreditLock);
