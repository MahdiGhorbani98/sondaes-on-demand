import React, { useEffect, useState } from "react";
export default function SummaryForm() {
  const [checked, setChecked] = useState(false);
  // const popover = document.getElementById("popover");
  useEffect(() => {
    const terms_and_conditions = document.getElementById(
      "terms_and_conditions"
    );
    const node = document.createElement("div");
    const textnode = document.createTextNode(
      "No ice cream will actually be delivered"
    );
    node.appendChild(textnode);

    terms_and_conditions.addEventListener("mouseover", () => {
      document.getElementById("form").appendChild(node);
    });

    terms_and_conditions.addEventListener("mouseout", () => {
      node.remove();
    });
  });

  return (
    <div>
      <form id="form" action="" className="m-10">
        <div className="flex items-center justify-center relative">
          <input
            className="mr-2 w-4 h-4"
            id="terms"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="terms">
            I agree{" "}
            <span id="terms_and_conditions" className="text-blue-700">
              Terms and Conditions
            </span>
          </label>
        </div>

        <br />
        <button
          className="bg-orange-400 px-2 py-1 m-2 rounded text-white"
          disabled={!checked}
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}
