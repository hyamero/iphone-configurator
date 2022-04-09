import { SetState } from 'zustand';
import create from 'zustand'
import { ColorTypes } from './colors';

export interface ColorSlice {
  current: ColorTypes;
  setColor: () => void;
}

export const useStore = create((set: SetState<ColorSlice>) => ({
  current: {
    name: 'green',
    camera: "#CBD8C9",
    body: "#162415",
    logo: "#CBD8C9",
    frame: "#CBD8C9",
  },
  setColor: (color: any) => {
    set(() => ({ current: color }) as ColorSlice )
  }
}))
