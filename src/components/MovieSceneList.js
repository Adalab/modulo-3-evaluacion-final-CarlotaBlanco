import MovieSceneItem from './MovieSceneItem';
function MovieSceneList(props) {
  const sceneElements = props.movieScenes.map((scene) => {
    return (
      <li key={scene.id} className=''>
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
