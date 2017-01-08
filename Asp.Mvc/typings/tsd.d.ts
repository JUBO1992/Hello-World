declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

declare class ReactAce extends __React.PureComponent<any, any>{}

declare module "react-ace" {
  export default ReactAce;
}