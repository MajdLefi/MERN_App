import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    if (!isAuth) {
        return <Redirect to='/' />
    }
    return <Route component={Component} {...rest} />
}

export default PrivateRoutes;