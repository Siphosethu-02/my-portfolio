import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles"
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
              distance: 180,
              links: {
                opacity: 0.8,
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
            opacity: 0.4,
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