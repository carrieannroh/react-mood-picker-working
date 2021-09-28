import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {queueRerenderWithNewMoodValue("happy"); };
  const handleMoodChangeToHungry = () => {queueRerenderWithNewMoodValue("hungry"); };
  const handleMoodChangeToCheeky = () => {queueRerenderWithNewMoodValue("cheeky"); };
  const handleMoodChangeToSleepy = () => {queueRerenderWithNewMoodValue("sleepy"); };

    //const nextMood = "happy";
    // console.log(
    //   "😀 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   moodValueFromCurrentRender
    // );
 

  const handleMoodChangeToConfused = () => {
    //const nextMood = "confused";
    queueRerenderWithNewMoodValue("confused");
    // console.log(
    //   "🤔 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   moodValueFromCurrentRender
    // );
  };

  const handleMoodChangeToSad = () => {
    //const nextMood = "sad";
    queueRerenderWithNewMoodValue("sad");
    // console.log(
    //   "😢 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   moodValueFromCurrentRender
    // );
  };

  console.log(
    "Component is rendering with a mood value of",
    moodValueFromCurrentRender
  );

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToHungry}>😋</button>
      <button onClick={handleMoodChangeToCheeky}>😉</button>
      <button onClick={handleMoodChangeToSleepy}>😴</button>
    </>
  );
}

export default MoodPickerDemo;
