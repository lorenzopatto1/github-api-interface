import { Layout } from "../../Components/Layout";
import { Profile } from "../../Components/Profile";
import { Repositories } from "../../Components/Repositories";
import { NoSearch } from "../../Components/NoSearch";
import { useGithub } from "../../Hooks/github-hook";

export const Home = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};