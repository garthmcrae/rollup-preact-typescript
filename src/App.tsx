export const App = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "grid",
        fontFamily: "serif",
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
        <p style={{ marginBottom: 0, marginTop: 0 }}>
          <a
            href="https://github.com/garthmcrae/rollup-preact-typescript"
            style={{
              color: "white",
              textDecoration: "none",
              textShadow: "black 2px 0px",
            }}
          >
            https://github.com/garthmcrae/rollup-preact-typescript
          </a>
        </p>
      </div>
    </div>
  );
};
