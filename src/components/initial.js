import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Charts() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcomeTitle")} initial</h1>
      <p>{t("welcomeMessage")}</p>
      <button onClick={() => navigate("/")}>{t("goToCharts")}</button>
    </div>
  );
}

export default Charts;
