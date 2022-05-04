function MovieSceneItem(props) {
  return (
    <a href='#'>
      <img
        className='image'
        alt={props.scene.movie}
        title={props.scene.movie}
        src={props.scene.poster}
      />
      <h3 className=''>{props.scene.movie}</h3>
      <p className=''>{props.scene.line}</p>
      <p className=''>{props.scene.year}</p>
    </a>
  );
}

export default MovieSceneItem;
