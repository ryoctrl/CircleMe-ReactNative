export const getCurrentRoute = (navigationState) => {
    if (!navigationState) {
        return null
    } else if (!navigationState.routes) {
        return navigationState
    }

    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
        return getCurrentRoute(route)
    }

    return route
}
