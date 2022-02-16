import React, { useState, useContext } from "react";
import { useGithub } from "../../Hooks/github-hook";
import { useTheme } from "../../Hooks/useTheme";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { shade } from "polished";

import { Wrapper } from "./styled.js";

export const Header = () => {
  const { getUser } = useGithub();
  const { colors } = useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <Wrapper>
        <input
          type="text"
          placeholder="Digite o nome do usuário desejado"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <Switch
          onChange={toggleTheme}
          checked={theme.title === "dark"}
          checkedIcon={false}
          unCheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.background)}
          onColor={shade(0.95, colors.background)}
          offHandleColor="#000"
          onHandleColor="#fff"
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </Wrapper>
    </header>
  );
};
