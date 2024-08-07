import React from "react";
interface TInput {
  label?: string;
  value?: string;
  preFix?: string;
}
export default function TwInput(
  props: TInput = { label: "labelName", value: "valueName" }
) {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="username"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            {props.preFix}
          </span>
          <input
            type="text"
            name={props.value}
            id={props.value}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
            placeholder="janesmith"
          />
        </div>
      </div>
    </div>
  );
}
