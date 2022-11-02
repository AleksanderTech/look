export default {
    router: null,

    mount(element) {
        const currentPath = window.location.pathname;
        if (this.router) {
            let route = this.router.routes.find(route => route.path === currentPath);
            if (route) {
                element.innerHTML = route.component;
                return;
            }
        }

        element.innerHTML = '';
    },

    use(router) {
        this.router = router;
    }
}
