import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { US, FR, ES } from "country-flag-icons/react/3x2";
import { ArrowDropDown } from "@mui/icons-material";

const languages = [
  {
    code: "en",
    label: "English",
    flag: <US title="United States" className="flag-icon" />,
  },
  {
    code: "es",
    label: "Español",
    flag: <ES title="Spain" className="flag-icon" />,
  },
  {
    code: "fr",
    label: "Français",
    flag: <FR title="France" className="flag-icon" />,
  },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
      <ArrowDropDown
        sx={{ position: "absolute", top: "10%", left: "23%", zIndex: 1, cursor: 'pointer' }}
        onClick={() => setOpen(!open)}
      />
      <Select
        open={open}
        value={i18n.language}
        onChange={handleLanguageChange}
        onClick={() => setOpen(!open)}
        onClose={() => setOpen(false)}
        sx={{ height: "30px" }}
        inputProps={{ "aria-label": "Language" }}
        label={"language"}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.flag}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
