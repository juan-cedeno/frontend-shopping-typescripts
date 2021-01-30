import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import '../css/lenguaje.css'

export const Lenguaje = () => {
  const [state, setState] = useState("es");

  const { i18n } = useTranslation();

  const setLenguaje = useCallback(() => {
    i18n.changeLanguage(state);

    if (state === "es") {
      setState("en");
    } else {
      setState("es");
    }

  }, [i18n, state]);

  return (
    <div className="lenguaje">
      <button onClick={setLenguaje}>
        {state === "es" ? "Español" : "English"}
      </button>
    </div>
  );
};
