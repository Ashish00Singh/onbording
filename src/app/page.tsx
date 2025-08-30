"use client";

import { useState } from "react";

export default function page() {
  const [plans, setPlans] = useState([
    { name: "", price: "", description: "" },
  ]);

  // handle change
  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...plans];
    (updated[index] as any)[field] = value;
    setPlans(updated);
  };

  // add new plan
  const addPlan = () => {
    setPlans([...plans, { name: "", price: "", description: "" }]);
  };

  // remove a plan
  const removePlan = (index: number) => {
    const updated = plans.filter((_, i) => i !== index);
    setPlans(updated);
  };

  // submit all plans
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Plans:", plans);
    alert("Plans saved! Check console.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold">Manage Plans</h2>

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow-md grid gap-3 bg-white"
          >
            <input
              type="text"
              placeholder="Plan Name"
              value={plan.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              placeholder="Price"
              value={plan.price}
              onChange={(e) => handleChange(index, "price", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={plan.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              className="border p-2 rounded w-full"
            />
            <div className="flex justify-end">
              {plans.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePlan(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={addPlan}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Plan
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Plans
        </button>
      </div>
    </form>
  );
}
