import MovieSceneItem from './MovieSceneItem';
function MovieSceneList(props) {
  if (props.movieScenes.length === 0) {
    return <p>No hay ninguna película que coincida con tu búsqueda</p>;
  } else {
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
}

export default MovieSceneList;
