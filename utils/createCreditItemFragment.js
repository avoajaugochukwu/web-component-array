import formatTime from "./formatTime.js";

const createCreditItemFragment = (creditItem) => {
  const documentFragment = document.createRange().createContextualFragment(`
      <span class="date">${formatTime(creditItem.date)}</span>
      <div class="lock-wrapper">
      <span class="lock">${
        creditItem.type === "enrollment" ? "Unlocked" : "Locked"
      }</span>
      </div>
    `);

  return documentFragment;
};

export default createCreditItemFragment;
