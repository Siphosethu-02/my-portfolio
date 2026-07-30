import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
            number: {
            value: 120,
            },

          color: {
            value: "#38bdf8",
          },

          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

            opacity: {
            value: 0.8,
            },

            size: {
            value: 4,
            },
        },
      }}
    />
  );
}

export default ParticleBackground;