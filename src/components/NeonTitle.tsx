const NeonTitle = () => (
  <div className="perspective-1000 mb-2">
    <h1 className="transform-3d text-4xl md:text-6xl font-black tracking-tight neon-text-cyan text-center"
      style={{
        transform: "rotateX(5deg) rotateY(-2deg)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      ENEM Tracker V2
    </h1>
    <p className="text-center text-muted-foreground mt-2 text-sm">
      Seu companheiro de estudos para o ENEM
    </p>
  </div>
);

export default NeonTitle;
