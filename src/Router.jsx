import React from "react";
import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";

export const Router = () => {
    return(
        <Switch>
            <Route exact path="/posts">
                <AppPosts />
            </Route>
        </Switch>
    )
}