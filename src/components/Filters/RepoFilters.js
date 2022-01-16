import React from "react";
import Select, { components } from "react-select";
import { Icon } from "@iconify/react";

//Set up options for repo filters
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
//set up theme and custom styles to override react-select default styles
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

//replace default react-select dropdown icon with custom one
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="ant-design:caret-down-filled" width={12} />
    </components.DropdownIndicator>
  );
};

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

const RepoFilters = () => {
  return (
    <div className="flex flex-col text-sm md:flex-row sm:flex-row mt-3 sm:mt-0 md:mt-0">
      <div style={{ width: "210px" }}>
        <Select
          components={{ DropdownIndicator }}
          styles={customStyles}
          isSearchable
          theme={customTheme}
          className="pr-3"
          options={optionsSpokenLanguages}
          placeholder="Spoken Language: Any"
        />
      </div>
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
        isSearchable={false}
        theme={customTheme}
        styles={customStyles}
        options={optionsDates}
        placeholder="Date Range: Today"
      />
    </div>
  );
};

export default RepoFilters;
