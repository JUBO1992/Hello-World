declare namespace ReactSplitPane {
        import React = __React;

        type SplitPane = React.ClassicComponent<any, any>;
        var SplitPane: React.ClassicComponentClass<any>;
}

declare module "react-split-pane" {
        export = ReactSplitPane;
}