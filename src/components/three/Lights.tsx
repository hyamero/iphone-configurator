export const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[-10, 0, -15]} intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={0.2} />
      <spotLight position={[0, 10, 0]} intensity={0.7} penumbra={1} />
    </>
  );
};
