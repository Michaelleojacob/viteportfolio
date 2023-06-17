import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  name: "React Snow",
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "remove",
      },
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 0.4,
        opacity: 1,
        size: 80,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 180,
        links: {
          opacity: 0.35,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 10,
      },
      repulse: {
        distance: 100,
        duration: 5,
      },
      slow: {
        factor: 1,
        radius: 0,
      },
    },
  },
  particles: {
    color: {
      value: "#FFF",
    },
    links: {
      blink: false,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0.3,
      shadow: {
        blur: 5,
        color: {
          value: "lime",
        },
        enable: false,
      },
      width: 1,
    },
    move: {
      direction: "top",
      enable: true,
      speed: 0.25,
    },
    collisions: {
      enable: true,
    },
    number: {
      limit: -1,
      value: 160,
    },
    opacity: {
      animation: {
        enable: false,
        speed: 1,
        sync: false,
      },
      value: {
        min: 0.2,
        max: 0.2,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 2,
        max: 5,
      },
    },
  },
  pauseOnBlur: true,
  background: {
    color: "#10121b",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

export default options;
