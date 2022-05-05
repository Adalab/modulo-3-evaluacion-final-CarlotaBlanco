import MovieSceneItem from './MovieSceneItem';
function MovieSceneList(props) {
  const sceneElements = props.movieScenes.map((scene, index) => {
    return (
      <li key={index} className=''>
        <MovieSceneItem scene={scene} />
      </li>
    );
  });
  return (
    <section>
      <ul className=''>{sceneElements}</ul>
    </section>
  );
}

export default MovieSceneList;
