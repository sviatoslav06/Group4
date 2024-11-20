import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/Surname.png"} alt="Alina Naryzhna" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Alina Naryzhna</h2>
          <p style={styles.position}>Full-Stack Web Developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/Riznyk.jpg"} alt="Rostyslav Riznyk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Rostyslav Riznyk</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="Tanya Tverdun" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Tanya Tverdun</h2>
          <p style={styles.position}>Backend developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="Danylo Smutok" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Danylo Smutok</h2>
          <p style={styles.position}>Product Owner</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="Oleksandr Simonov" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Oleksandr Simonov</h2>
          <p style={styles.position}>Analyst</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/Samoliuk.JPG"} alt="Sviatoslav Samoliuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Sviatoslav Samoliuk</h2>
          <p style={styles.position}>Tester</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="Test" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Test</h2>
          <p style={styles.position}>Test</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="Test2" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Test2</h2>
          <p style={styles.position}>Test2</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
