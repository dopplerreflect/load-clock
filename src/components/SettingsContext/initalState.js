const newState = {
  graph: {
    lines: true,
    dots: false,
    bars: false
  }
};

const lcState = JSON.parse(localStorage.getItem("lc.settings"));

export const initialState = lcState || newState;