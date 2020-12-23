export interface Routes {
  current: string;
  stack: string[];
  init(): void;
  go(route: string): void;
  back(): void;
}
