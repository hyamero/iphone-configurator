import { SetState } from 'zustand';
import create from 'zustand'

interface ColorTypes {
  current: {
    camera: string;
    body: string;
    logo: string;
    frame: string;
  };
  // current?: string;
  setColor: () => void;
}

const green = {
  camera: "#CBD8C9",
  body: "#162415",
  logo: "#CBD8C9",
  frame: "#CBD8C9",
}

export const useStore = create((set: SetState<ColorTypes>) => ({
  current: {
    camera:null,
    body: null,
    logo: null,
    frame: null,
  },
  setColor: () => {
    set(() => ({ current: green }))
  }
}))
