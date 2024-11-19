import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

interface SchoolBuildingProps extends GroupProps {}

const SchoolBuildingModel: React.FC<SchoolBuildingProps> = (props) => {
  const { scene } = useGLTF("./school_building.glb"); // Ensure correct path to the GLB file

  return <primitive object={scene} {...props} />;
};

export default SchoolBuildingModel;
