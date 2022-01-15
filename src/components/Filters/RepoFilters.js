import React from "react";
import Select from "react-select";

const optionsProgrammingLanguages = [
  { label: "React", value: "react" },
  { label: "ReactNative", value: "react-native" },
  { label: "Javascript", value: "js" },
  { label: "Typescript", value: "css" },
];

const optionsSpokenLanguages = [
  { label: "English", value: "english" },
  { label: "French", value: "french" },
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
    },
    control: () => ({}),
  };
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: (styles) => ({
    // none of react-select's styles are passed to <Control />
    ...styles,
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    color: "white",
  }),
  indicatorSeparator: () => ({}),
};

const RepoFilters = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row mt-3 sm:mt-0 md:mt-0">
      <Select
        styles={customStyles}
        isSearchable
        theme={customTheme}
        className="mr-3"
        options={optionsSpokenLanguages}
        placeholder="Spoken Language: Any"
      />
      <Select
        styles={customStyles}
        isSearchable
        theme={customTheme}
        className="mr-3"
        options={optionsProgrammingLanguages}
        placeholder="Language: Any"
      />
      <Select
        styles={customStyles}
        className="mr-3"
        options={optionsDates}
        placeholder="Date Range: Today"
      />
    </div>
  );
};

export default RepoFilters;
