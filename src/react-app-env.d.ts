/// <reference types="react-scripts" />

declare module "valtio" {
    function useSnapshot<T extends object>(p: T): T;
    function proxy<T extends object>(p: T): T;
  }