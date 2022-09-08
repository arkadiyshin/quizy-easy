function CurrentScore(props) {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/goal-svgrepo-com-1.png`}
      ></img>
      <h1>{props.score}</h1>
    </>
  );
}

export default CurrentScore;
