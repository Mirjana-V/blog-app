import React from "react";
import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./pages/SinglePost";

export const Router = () => {
    return(
        <Switch>
            <Route exact path="/posts">
                <AppPosts />
            </Route>
            <Route exact path="/posts/:id">
                <SinglePost />
            </Route>
        </Switch>
    )
}