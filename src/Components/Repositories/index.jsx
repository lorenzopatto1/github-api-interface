import React, { useEffect, useState } from "react";
import { useGithub } from "../../Hooks/github-hook";
import { RepositoryItem } from "./RepositoryItem";

import {
  WrapperTabs,
  WrapperTabList,
  WrapperTab,
  WrapperTabPanel,
  WrapperList,
} from "./styled";

export const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <WrapperTabList>
            <WrapperTab>Repositories</WrapperTab>
            <WrapperTab>Starred</WrapperTab>
          </WrapperTabList>
          <WrapperTabPanel>
            <WrapperList>
              {githubState.repositories.map(item => (
                <RepositoryItem 
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <WrapperList>
            {githubState.starred.map(item => (
                <RepositoryItem 
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};
