import React, { useState } from "react";
export default function SummaryForm() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <form action="" className="m-10">
        <div className="flex items-center justify-center">
          <input
            className="mr-2 w-4 h-4"
            id="terms"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="terms">
            I agree <span className="text-blue-700">Terms and Conditions</span>
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
