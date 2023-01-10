import { React, useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { getReceivedMatchesByUser, getMatchSport, getMatchChallenger } from "../../../helpers/selectors";

import "./styles.scss";
import Button from "../Button";

export default function MatchesListItem() {
  const testID = 1

  const { state } = useContext(matchContext);

  const { matches } = state

  const receivedMatches = getReceivedMatchesByUser(matches, testID)
  
  const matchesItem = receivedMatches.map((match) => {

    const matchSport = getMatchSport(state, match)

    const challenger = getMatchChallenger(state, match)

    const message = `User ${challenger.username} has challenged you to ${matchSport}!`

    return (
      <main className="match" key={match.id}>
        <section className="match__opponent">
          <section className="match__opponent-profile">
            <img
            className="match__opponent-profile-pic"
            src={challenger.profile_pic}
            alt={challenger.username}
            />
          </section>
          <section className="match__opponent-message">
           {message}
          </section>
        </section>
        
        <section className="match__buttons">
          <Button accept >ACCEPT</Button>
          <Button decline >DECLINE</Button>
        </section>
      </main>
    )}
  );

  return (
    <section>
      {matchesItem}
    </section>
  );
};
