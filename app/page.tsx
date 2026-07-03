export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "64px",
        background:
          "radial-gradient(circle at top, rgba(155,48,255,0.15), transparent 35%), #000000",
      }}
    >
      <section
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
        }}
      >
        <div>
          <p
            style={{
              color: "rgba(155,48,255,0.9)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            IEEE INSAT
          </p>

          <h1
            style={{
              fontSize: "clamp(44px, 8vw, 92px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              marginBottom: "20px",
            }}
          >
            TSYP XIV
          </h1>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.65)",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Homepage test. Navbar and Footer are working. We will add the real
            hero section next.
          </p>
        </div>
      </section>
    </main>
  );
}