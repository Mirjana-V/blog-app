import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";

export const Router = () => {
    return(
        <Switch>
            <Route path='/' exact>
                 <Redirect to='/posts'></Redirect>
          </Route>
            <Route exact path="/posts">
                <AppPosts />
            </Route>
            <Route exact path="/posts/:id">
                <SinglePost />
            </Route>
            <Route exact path="/add">
                <AddPost />
            </Route>
        </Switch>
    )
}