import React, { useState } from "react";
import "./sports.scss";
import { ArrowBackIos } from "@material-ui/icons";

const sportsList = [
  "Golf",
  "Tennis",
  "Bowling",
  "Ping Pong",
  "Squash",
  "Pickleball",
];

function Sports({ setCurrent, sports, setSports }) {
  const [skillsList, setSkillsList] = useState(sports);

  const handleFormChange = (event, index) => {
    let data = [...skillsList];
    data[index][event.target.name] = event.target.value;
    setSkillsList(data);
  };

  // event.target.name === returns name of the category
  // event.target.value === returns the selected option

  const addFields = () => {
    let object = {
      sport: "",
      self_skill: "",
    };

    setSkillsList([...skillsList, object]);
  };

  const removeFields = (index) => {
    let data = [...skillsList];
    data.splice(index, 1);
    setSkillsList(data);
  };

  const handleContinue = () => {
    setSports(skillsList);
    setCurrent("Bio");
  };

  const handleBack = () => {
    setCurrent("ProfilePhoto");
  };

  return (
    <div className="sports">
      <ArrowBackIos onClick={handleBack} />
      <h4>My preferred sports and skills are</h4>
      <form>
        {skillsList.map((form, index) => {
          return (
            <div className="sport-skill" key={index}>
              <select
                required
                name="sport"
                className="select-sport"
                onChange={(event) => handleFormChange(event, index)}
                value={form.sport}
              >
                <option value="" selected disabled>
                  Select a sport
                </option>
                {sportsList.map((sport) => {
                  if (skillsList.find((e) => e.sport === sport)) {
                    return (
                      <option key={sport} value={sport} selected disabled>
                        {sport}
                      </option>
                    );
                  } else {
                    return (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    );
                  }
                })}
              </select>
              <select
                required
                name="self_skill"
                onChange={(event) => handleFormChange(event, index)}
                value={form.self_skill}
              >
                <option value="" selected disabled>
                  Select a skill
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              {skillsList.length === 1 ? (
                <></>
              ) : (
                <button className="remove" onClick={() => removeFields(index)}>
                  x
                </button>
              )}
            </div>
          );
        })}
      </form>
      {skillsList.length < 3 ? (
        <button className="add" onClick={addFields}>
          +
        </button>
      ) : (
        <></>
      )}
      <button className="continue" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Sports;
