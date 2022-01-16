import React from "react";
import Select, { components } from "react-select";
import { Icon } from "@iconify/react";

//Set up options for filters
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
//Set up custom theme to override react select default styles
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
//Custom dropdown indicator to replace default react-select dropdown
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="ant-design:caret-down-filled" width={12} />
    </components.DropdownIndicator>
  );
};

const DeveloperFilters = () => {
  return (
    <div className="flex flex-col text-sm md:flex-row sm:flex-row mt-3 sm:mt-0 md:mt-0">
      <div style={{ width: "160px" }}>
        <Select
          components={{ DropdownIndicator }}
          styles={customStyles}
          isSearchable
          theme={customTheme}
          className="pr-3"
          options={optionsProgrammingLanguages}
          placeholder="Language: Any"
        />
      </div>
      <Select
        components={{ DropdownIndicator }}
        styles={customStyles}
        isSearchable={false}
        theme={customTheme}
        options={optionsDates}
        placeholder="Date Range: Today"
      />
    </div>
  );
};

export default DeveloperFilters;
