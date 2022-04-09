export const Lights = () => {
  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight position={[-10, 0, -15]} intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={0.2} />
      <spotLight position={[0, 10, 0]} intensity={0.7} penumbra={1} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.15}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
    </>
  );
};
