import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState([]);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      fetch("/profile.json")
        .then(result => (result.ok ? result.json() : null))
        .then(response => {
          if (response) {
            setrepo(response.data.user);
          }
        })
        .catch(error => {
          console.error(
            `${error} (GitHub section failed, showing only contact section)`
          );
          setrepo("Error");
        });
    }
  }, []);

  return (
  <>
  {openSource.display &&
  openSource.showGithubProfile === "true" &&
  !(typeof prof === "string" || !prof.login) ? (
    <Suspense fallback={renderLoader()}>
      <GithubProfileCard prof={prof} key={prof.id} />
      <Contact />
    </Suspense>
  ) : (
    <Contact />
  )}
</>
);

}
