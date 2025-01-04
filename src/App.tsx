export const App = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        boxSizing: "border-box",
        display: "grid",
        fontFamily: "serif",
        minHeight: "100vh",
        padding: 16,
        placeContent: "center",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          display: "grid",
          gap: 32,
          textAlign: "center",
        }}
      >
        <img
          alt="Computer"
          src="https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/Computer-icon.png"
          style={{
            height: 128,
            marginLeft: "auto",
            marginRight: "auto",
            width: 128,
          }}
        />
        <h1
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1,
            marginBottom: 0,
            marginTop: 0,
            textShadow: "black 2px 0px",
          }}
        >
          Rollup Preact Typescript
        </h1>
        <div
          style={{
            backgroundColor: "white",
            borderStyle: "inset",
            padding: 16,
          }}
        >
          <a href="https://github.com/garthmcrae/rollup-preact-typescript">
            https://github.com/garthmcrae/rollup-preact-typescript
          </a>{" "}
          <a href="https://garthmcrae.github.io/rollup-preact-typescript/">
            https://garthmcrae.github.io/rollup-preact-typescript/
          </a>
        </div>
      </div>
    </div>
  );
};
