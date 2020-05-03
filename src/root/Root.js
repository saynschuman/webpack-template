import { hot } from "react-hot-loader/root";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import allRoutes from "../features/routes";
import checkToken from "../commons/utils/checkToken";
import Wrapper from "./components/Wrapper";
import Favicon from "react-favicon";
import icon from "./img/favicon.png";

const Root = ({ history }) => {
  const dispatch = useDispatch();
  const routes = Object.values(allRoutes);

  React.useEffect(() => {
    checkToken(dispatch, history);
  }, []);

  return (
    <Wrapper>
      <Favicon url={icon} />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.pageComponent}
          />
        ))}
      </Switch>
    </Wrapper>
  );
};

export default hot(withRouter(Root));
