function Avatar(props) {
  const { name, src, rounded } = props;
  const styles = {
    borderRadius: rounded?"50%":"16px"
  }
  return (
    <div>
      <img width="110px" src={src} style={styles} alt="Avatar" />
      <h1 style={{color:"gray"}}>{name}</h1>
    </div>
  );
}

export default Avatar;
