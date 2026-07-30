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
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          number: {
            value: 80,
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
            speed: 1.5,
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 2, max: 4 },
          },
        },
      }}
    />
  );
}

export default ParticleBackground;