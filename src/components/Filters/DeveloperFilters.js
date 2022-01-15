import React from "react";
import Select from "react-select";

const optionsProgrammingLanguages = [
  { label: "React", value: "react" },
  { label: "ReactNative", value: "react-native" },
  { label: "Javascript", value: "js" },
  { label: "Typescript", value: "css" },
];

const optionsDates = [
  { label: "Today", value: "today" },
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
];
function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#1f6feb",
      primary: "#1f6feb",
      neutral0: "white",
      neutral80: "#8b949e",
      neutral20: "#8b949e",
    },
    control: (provided) => ({
      ...provided,
    }),
  };
}

const customStyles = {
  control: (css) => ({
    ...css,
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
  }),
  menu: ({ width, ...css }) => ({
    ...css,
    width: "max-content",
  }),
  option: (css) => ({ ...css, width: 150 }),
  indicatorSeparator: () => ({}),
};

const DeveloperFilters = () => {
  return (
    <div className="flex flex-col text-sm md:flex-row sm:flex-row mt-3 sm:mt-0 md:mt-0">
      <div style={{ width: "180px" }}>
        <Select
          styles={customStyles}
          isSearchable
          theme={customTheme}
          className="mr-3"
          options={optionsProgrammingLanguages}
          placeholder="Language: Any"
        />
      </div>
      <Select
        styles={customStyles}
        isSearchable={false}
        theme={customTheme}
        className="mr-3"
        options={optionsDates}
        placeholder="Date Range: Today"
      />
    </div>
  );
};

export default DeveloperFilters;
