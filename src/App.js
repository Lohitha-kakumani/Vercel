import "./App.css";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1a1a1a",
    color: "white",
    textAlign: "center",
    flexDirection: "column",
  };

  const inputStyle = {
    padding: "10px",
    marginRight: "5px",
    borderRadius: "5px 0 0 5px",
    border: "1px solid #555",
    backgroundColor: "#333",
    color: "white",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 15px",
    borderRadius: "0 5px 5px 0",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Coming Soon - updatedversion</h1>
      <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <div>
        <input type="email" placeholder="Enter your email" style={inputStyle} />
        <button style={buttonStyle}>Notify Me</button>
      </div>
    </div>
  );
}

export default App;
